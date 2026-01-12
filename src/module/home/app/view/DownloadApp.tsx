const DownloadApp = () => {
    return (
        <div className="mt-16 tab:mt-20 flex flex-col gap-11 lap:gap-20 lap:flex-row lap:items-center lap:justify-center relative overflow-hidden">
            <div className="absolute font-bold leading-18 text-[#1FAEEB] text-[217.32px] whitespace-nowrap overflow-visible opacity-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Phụ xe ghép</div>
            <div className="relative z-10">
                <div className="font-bold text-[#1FAEEB] text-4xl leading-10 tab:text-6xl tab:leading-18 max-lap:text-center">
                    Tải ứng dụng
                </div>
                <div className="mt-2 text-[#374151] leading-6 tab:text-lg tab:leading-7 max-lap:text-center">
                    Để trải nghiệm các dịch vụ của chúng tôi
                </div>
                <img src="./images/home/download-logo.png" className="w-[241px] h-20 mt-6 max-lap:mx-auto" alt="" />
                <div className="grid max-tab:px-4 max-tab:gap-3 tab:grid-cols-2 mt-6 w-[360px] tab:w-[482px] mx-auto">
                    <div>
                        <div className="font-medium text-black leading-6 tab:text-lg tab:leading-7">Ứng dụng được đánh giá</div>
                        <div className="text-[#4B5563] mt-2 leading-6">⭐ 4.8/5.0 Đánh giá</div>
                    </div>
                    <div>
                        <div className="font-medium text-black leading-6 tab:text-lg tab:leading-7">Uy tín & Minh bạch</div>
                        <div className="text-[#4B5563] mt-2 leading-6 flex gap-1">
                            <img src="./images/home/ch-logo.svg" className="w-4 h-6" alt="" />Google Play Protect Đã kiểm duyệt và An toàn</div>
                    </div>
                </div>
            </div>
            <img src="./images/home/detail-app.png" alt="" className="w-[60%] tab:w-[336px] max-lap:mx-auto my-5 relative z-10" />
        </div>
    );
};

export default DownloadApp;
