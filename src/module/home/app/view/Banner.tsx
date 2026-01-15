import { useMatchWidth } from "@module/home/infras/hook/useMatchWidth";
import clsx from "clsx";
import { useRef } from "react";

const Banner = () => {
    const bannerRef = useRef<HTMLDivElement>(null);
    const isFullWidth = useMatchWidth(bannerRef, 1208);

    return (
        <div
            ref={bannerRef}
            className={clsx(
                "overflow-hidden relative tab:mt-5 tab:h-[1050px] lap:h-[700px] max-w-[1210px] mx-auto",
                isFullWidth ? "" : "rounded-3xl"
            )}
            style={{
                background: `
                linear-gradient(0deg, var(--bg-primary-original-default, #1FAEEB), var(--bg-primary-original-default, #1FAEEB)),
                radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),
                linear-gradient(180deg, #1FAEEB 0%, rgba(147, 197, 253, 0) 100%)
                `
            }}
        >
            <div
                className="absolute w-[1450px] h-[506px] bottom-[11px] left-[-105px] rotate-[-21deg]"
                style={{
                    background: `linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(147, 197, 253, 0.175) 50%, rgba(255, 255, 255, 0.0125) 100%)`
                }}
            />
            <div
                className="absolute bottom-0 w-full h-32 opacity-30 z-3 blur-[50px]"
                style={{
                    background: `linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, #93C5FD 50%, #1FAEEB 100%)`
                }}
            />
            <div className="h-full pt-10 lap:pt-32 lap:pl-10 lap:pr-[58px] desk:px-16 flex flex-col lap:flex-row gap-12 tab:gap-16 desk:gap-25 relative z-2 lap:justify-center max-lap:items-center">
                <div className="flex flex-col gap-4 tab:gap-8 text-[#F9FAFB] max-tab:mx-4 tab:w-[460px] desk:w-[550px]">
                    <div className="flex items-center gap-2">
                        <img src="/images/home/google-play.png" alt="" className="size-8" />
                        <div className="font-medium leading-6">Tải App Trên Ch Play</div>
                    </div>
                    <div className="font-bold text-3xl tab:text-5xl leading-9 tab:leading-[60px]">
                        Ứng Dụng Hỗ Trợ Tài Xế Lái Xe Ghép
                    </div>
                    <div className="text-lg font-medium leading-6 tab:leading-7">
                        Tối ưu hiệu suất – Tăng độ an toàn – Không bỏ lỡ khách hàng.
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 items-center">
                            <img className="w-6" src="/images/home/check.png" alt="" />
                            <span className="font-medium leading-6">Shortcut Trả Lời Zalo Tự Động</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img className="w-6" src="/images/home/check.png" alt="" />
                            <span className="font-medium leading-6">Vuốt Trả Lời Nhanh</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img className="w-6" src="/images/home/check.png" alt="" />
                            <span className="font-medium leading-6">An Toàn & Tiện Lợi</span>
                        </div>
                    </div>
                </div>
                <img
                    src="/images/home/phone.png"
                    alt=""
                    className="w-[298px] max-tab:h-[408px] tab:w-[402px] desk:w-[428px] lap:h-[572px]"
                />
            </div>
        </div>
    );
};

export default Banner;
