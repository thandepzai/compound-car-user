"use client";
import LoginModal from "@module/auth/app/component/LoginModal";
import RecaptchaProvider from "../../RecaptchaProvider";
import { AuthService } from "@module/auth/domain/service/auth";
import { FiChevronUp } from "react-icons/fi";
import { BsWallet2 } from "react-icons/bs";
import formatDateVN from "@module/_core/infras/util/formatDate";
import LoginSlide from "@module/auth/app/component/LoginSlide";
import { usePathname, useRouter } from "next/navigation";
import { useWindowSize } from "@lib/hook/useWindowSize";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import InfoSlide from "@module/auth/app/component/InfoSlide";
import HistoryPaymentModal from "@module/auth/app/component/HistoryPaymentModal";
import clsx from "clsx";
import HistoryPaymentSlide from "@module/auth/app/component/HistoryPaymentSlide";
import { authUIController } from "@module/auth/infras/util/authUIController";

const MainHeader = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { loginModalRef, loginSlideRef, infoSlideRef, historyPaymentSlideRef, historyPaymentModalRef } =
        authUIController;

    const { isFetching, userSubscription } = AuthService.useUserSubscription();
    const { logout } = AuthService;

    const { deviceType } = useWindowSize();

    return (
        <header
            className={clsx(
                "sticky! top-0 left-0 w-full z-50 transition-all duration-300 bg-white border border-[#F9FAFB]",
                pathname !== "/" ? "max-tab:hidden!" : ""
            )}
        >
            <div className="mx-auto px-4 tab:px-6 lap:px-12 desk:px-4 h-[72px] tab:h-20 flex items-center justify-between max-w-[1184px]">
                <img onClick={() => router.push("/")} src="/images/logo.svg" alt="" className="w-[186px] h-12 cursor-pointer" />
                {!isFetching ? (
                    !!userSubscription ? (
                        <div className="relative group">
                            <div
                                onClick={() => infoSlideRef.current?.open()}
                                className="flex-center tab:hidden! bg-[#EFF6FF] text-[#1FAEEB] size-12 rounded-full"
                            >
                                <HiOutlineMenuAlt2 className="size-7" />
                            </div>
                            <div className="max-tab:hidden bg-[#EFF6FF] rounded-full p-3 flex items-center gap-2 text-lg font-semibold text-[#1FAEEB] cursor-pointer">
                                <img src="/images/home/pro.svg" className="w-[42px] h-6" />
                                {userSubscription.user.phoneNumber}
                                <FiChevronUp className="transition-transform group-hover:rotate-180" />
                            </div>
                            <div
                                className={`
                                    absolute right-0 top-full mt-2 
                                    w-[320px]
                                    rounded-2xl bg-white border border-[#2196F380]
                                    opacity-0 invisible
                                    group-hover:opacity-100 group-hover:visible
                                    transition-all duration-200
                                `}
                                style={{ boxShadow: "0px 0px 4px 0px #00000026" }}
                            >
                                <div className="p-5 border-b border-[#F3F4F6]">
                                    <div className="text-xl leading-8 font-bold text-[#1FAEEB]">Tài khoản PRO</div>
                                    <div className="text-[#4B5563] text-lg leading-7">
                                        Ngày hết hạn: {formatDateVN(userSubscription.subscription.endDate ?? "")}
                                    </div>
                                </div>
                                <div className="p-5 border-b border-[#F3F4F6]">
                                    <div
                                        onClick={() => historyPaymentModalRef.current?.open()}
                                        className="bg-[#EFF6FF] flex items-center gap-2 p-3 rounded-lg cursor-pointer"
                                    >
                                        <BsWallet2 className="size-5 text-[#1FAEEB]" />
                                        <div className="text-[#2196F3] text-lg leading-6 font-semibold">
                                            Lịch sử mua
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div
                                        onClick={logout}
                                        className="border border-[#FCA5A5] h-10 flex-center rounded-lg text-[#B91C1C] font-semibold leading-6 cursor-pointer hover:bg-red-50"
                                    >
                                        Đăng xuất
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <button
                            onClick={() => {
                                if (deviceType === "mobile") loginSlideRef.current?.open();
                                else loginModalRef.current?.open();
                            }}
                            className="w-[118px] h-12 rounded-full bg-[#EFF6FF] text-[#1FAEEB] font-semibold text-lg leading-6 hover:bg-[#e0ecfa] cursor-pointer active:bg-[#EFF6FF]"
                        >
                            Đăng nhập
                        </button>
                    )
                ) : null}
            </div>
            <LoginModal ref={loginModalRef} />
            <LoginSlide ref={loginSlideRef} />
            {userSubscription && (
                <InfoSlide
                    ref={infoSlideRef}
                    userSubscription={userSubscription}
                    showHistory={() => historyPaymentSlideRef.current?.open()}
                />
            )}
            {userSubscription && (
                <HistoryPaymentSlide ref={historyPaymentSlideRef} userSubscription={userSubscription} />
            )}
            {userSubscription && (
                <HistoryPaymentModal ref={historyPaymentModalRef} userSubscription={userSubscription} />
            )}
            <RecaptchaProvider siteKey={process.env.RECAPTCHA_KEY!} strategy="beforeInteractive" enterprise />
        </header>
    );
};

export default MainHeader;
