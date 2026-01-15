import { useRef } from "react";
import { IoChevronBack } from "react-icons/io5";

const GuideSection = () => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (!sliderRef.current) return;

        const cardWidth = 320; // ~ width 1 card (px)
        const isTabletUp = window.innerWidth >= 768;
        const scrollAmount = cardWidth * (isTabletUp ? 3 : 1);

        sliderRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth"
        });
    };

    return (
        <div className="relative h-[600px] tab:h-[680px] lap:h-[385px] desk:h-[472px] mt-20 tab:mt-15 overflow-hidden">
            <img
                src="/images/home/guide-section-bg.svg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="relative z-10 lap:w-[930px] desk:w-[1210px] mx-[17px] tab:mx-8 lap:mx-auto py-12 flex flex-col lap:flex-row gap-8 tab:gap-10 items-center">
                <div className="w-[368px] tab:w-[454px] desk:w-[582px] h-64 tab:h-[304px] desk:h-[376px] flex flex-col gap-4">
                    <div className="text-xl leading-8 font-bold text-[#374151] text-center">
                        Video hướng dẫn sử dụng
                    </div>
                    <iframe
                        src="https://www.youtube.com/embed/J-1z1nQGS_k?si=tlYIXvJNV9kqbX7Y"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-full rounded-xl"
                    />
                </div>
                <div className="max-lap:w-full lap:flex-1 flex flex-col gap-4">
                    <div className="rounded-xl border border-[#2196F333] text-[#1FAEEB] relative">
                        <img src="/images/home/parameter-bg.png" className="absolute w-full h-full" alt="" />
                        <div className="relative z-10 flex py-5 px-4">
                            <div className="w-1/2 text-center">
                                <div className="text-2xl leading-8 desk:text-3xl desk:leading-9 font-bold">1000 +</div>
                                <div className="mt-2 font-medium leading-6 desk:text-lg desk:leading-7">
                                    Tài xế tin dùng
                                </div>
                            </div>
                            <div className="h-16 bg-white min-w-px" />
                            <div className="w-1/2 text-center">
                                <div className="text-2xl leading-8 desk:text-3xl desk:leading-9 font-bold flex-center gap-3">
                                    4.8/ 5.0 <img src="/images/home/star-app.svg" className="size-8" alt="" />
                                </div>
                                <div className="mt-2 font-medium leading-6 desk:text-lg desk:leading-7 line-clamp-1">
                                    Ứng dụng được đánh giá
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-lg leading-7 font-bold text-[#374151]">Tài xế nói gì?</div>
                    <div className="relative flex gap-4 w-full">
                        <div
                            onClick={() => scroll("left")}
                            className="absolute bg-white cursor-pointer flex-center size-8 rounded-full border border-[#D1D5DB] -translate-x-5 top-1/2 -translate-y-[18.5px]"
                        >
                            <IoChevronBack className="h-[21px] w-[18px]" color="#6B7280" />
                        </div>
                        <div
                            onClick={() => scroll("right")}
                            className="absolute bg-white cursor-pointer flex-center size-8 rounded-full border border-[#D1D5DB] right-0 rotate-180 translate-x-5 top-1/2 -translate-y-[18.5px]"
                        >
                            <IoChevronBack className="h-[21px] w-[18px]" color="#6B7280" />
                        </div>
                        <div
                            ref={sliderRef}
                            className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-x-hidden w-full"
                        >
                            <div className="shrink-0 border border-[#2196F34D] bg-white rounded-xl flex items-center gap-3 px-[11px] py-[7px] w-full tab:p-[11px]! tab:w-[calc(50%-8px)]">
                                <img
                                    src="https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2024/02/anh-avatar-cute-thumbnail.jpg"
                                    className="size-16 rounded-full"
                                    alt=""
                                />
                                <div className="text-[#374151] flex-1">
                                    <div className="font-bold leading-6">Vũ Văn An</div>
                                    <div className="mt-1 line-clamp-2 text-sm leading-5 tab:text-base tab:leading-6">
                                        Ứng dụng đã giúp tôi tăng thu nhập và làm việc hiệu quả.
                                    </div>
                                </div>
                            </div>
                            <div className="shrink-0 border border-[#2196F34D] bg-white rounded-xl flex items-center gap-3 px-[11px] py-[7px] w-full tab:p-[11px]! tab:w-[calc(50%-8px)]">
                                <img
                                    src="https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2024/02/anh-avatar-cute-thumbnail.jpg"
                                    className="size-16 rounded-full"
                                    alt=""
                                />
                                <div className="text-[#374151] flex-1">
                                    <div className="font-bold leading-6">Vũ Văn An</div>
                                    <div className="mt-1 line-clamp-2 text-sm leading-5 tab:text-base tab:leading-6">
                                        Ứng dụng đã giúp tôi tăng thu nhập và làm việc hiệu quả.
                                    </div>
                                </div>
                            </div>
                            <div className="shrink-0 border border-[#2196F34D] bg-white rounded-xl flex items-center gap-3 px-[11px] py-[7px] w-full tab:p-[11px]! tab:w-[calc(50%-8px)]">
                                <img
                                    src="https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2024/02/anh-avatar-cute-thumbnail.jpg"
                                    className="size-16 rounded-full"
                                    alt=""
                                />
                                <div className="text-[#374151] flex-1">
                                    <div className="font-bold leading-6">Vũ Văn An</div>
                                    <div className="mt-1 line-clamp-2 text-sm leading-5 tab:text-base tab:leading-6">
                                        Ứng dụng đã giúp tôi tăng thu nhập và làm việc hiệu quả.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuideSection;
