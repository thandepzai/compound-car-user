import Slide from "@module/_core/app/component/Slide";
import formatDateVN from "@module/_core/infras/util/formatDate";
import { UserSubscriptionDTO, VerifyRecaptchaData } from "@module/auth/domain/dto/auth";
import { forwardRef, useImperativeHandle, useState } from "react";
import { BsWallet2 } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa";
import HistoryPayment from "../HistoryPayment";
import { AuthService } from "@module/auth/domain/service/auth";

interface InfoModalHandler {
    open: () => void;
}

interface InfoSlideProps {
    userSubscription: UserSubscriptionDTO;
}

const InfoSlide = forwardRef<InfoModalHandler, InfoSlideProps>(({ userSubscription }, ref) => {
    const { user } = userSubscription;
    const [open, setOpen] = useState(false);
    const [view, setView] = useState<"info" | "history">("info");

    const { logout } = AuthService;

    useImperativeHandle(ref, () => ({
        open: () => setOpen(true)
    }));

    const onClose = () => setOpen(false);

    return (
        <Slide open={open} direction="right" duration={0.2} width="100vw">
            {view === "info" ? (
                <div className="min-h-screen px-4 flex flex-col">
                    <div className="py-3">
                        <div onClick={onClose} className="size-12 flex-center cursor-pointer">
                            <FaChevronLeft className="text-[#6B7280]" />
                        </div>
                    </div>

                    <div className="flex gap-1.5 items-center text-xl leading-8 font-bold text-[#1FAEEB]">
                        Tài khoản: {user.phoneNumber}
                        <img src="/images/home/pro.svg" alt="" className="w-[42px] h-6" />
                    </div>
                    <div className="mt-1.5 text-lg leading-7 text-[#4B5563]">
                        Ngày hết hạn: {formatDateVN(userSubscription.subscription.endDate ?? "")}
                    </div>
                    <div className="h-px bg-[#F3F4F6] my-6" />
                    <div
                        onClick={() => setView("history")}
                        className="bg-[#EFF6FF] flex items-center gap-2 p-3 rounded-lg"
                    >
                        <BsWallet2 className="size-5 text-[#1FAEEB]" />
                        <div className="text-[#2196F3] text-lg leading-6 font-semibold">Lịch sử mua</div>
                    </div>
                    <div
                        onClick={logout}
                        className="flex-center font-semibold text-[#B91C1C] h-10 border border-[#FCA5A5] rounded-lg mt-auto mb-12"
                    >
                        Đăng xuất
                    </div>
                </div>
            ) : (
                <HistoryPayment userSubscription={userSubscription} onBack={() => setView("info")} />
            )}
        </Slide>
    );
});

export default InfoSlide;
