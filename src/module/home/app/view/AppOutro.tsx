import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

const AppOutro = () => {
    return (
        <div className="mt-16 border-t border-[#F9FAFB] py-8" style={{ boxShadow: "0px 0px 4px 0px #00000026" }}>
            <div className="text-xl leading-8 text-[#0A0A0A] font-bold text-center">LOGO</div>
            <div className="mt-4 text-2xl leading-8 font-bold text-[#1FAEEB] text-center">
                Hỗ Trợ Tài Xế Lái Xe Ghép
            </div>
            <div className="mt-4 leading-6 text-[#4B5563] text-center">
                Tự động bắt khách – Soạn tin nhanh – Tránh trôi tin nhắn
            </div>
            <img src="./images/home/google-play-download.png" className="w-[150px] h-[60px] mt-10 mx-auto" alt="" />
            <div className="mx-4 tab:mx-10 desk:mx-auto max-w-[1184px] my-6 h-px bg-[#E5E7EB]" />
            <div className="mx-4 tab:mx-10 desk:mx-auto max-w-[1184px] flex gap-3 max-tab:flex-col tab:gap-4 tab:items-center">
                <div className="flex flex-1 gap-4">
                    <img src="./images/home/facebook-icon.svg" alt="" className="size-6" />
                    <img src="./images/home/ig-icon.svg" alt="" className="size-6" />
                    <img src="./images/home/zalo-icon.svg" alt="" className="size-6" />
                </div>
                <div className="text-[#374151] text-sm leading-5">@2025 bản quyền thuộc về Hỗ Trợ Xế Xe Ghép</div>
            </div>
        </div>
    );
};

export default AppOutro;
