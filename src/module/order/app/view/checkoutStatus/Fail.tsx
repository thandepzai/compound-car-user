import { LuRefreshCw } from "react-icons/lu";

const FailComponent = () => {
    return (
        <div
            className="bg-white w-full tab:w-[488px] tab:rounded-2xl tab:border tab:border-[#EFF6FF] max-tab:min-h-[calc(100vh-84px)] max-tab:p-4 max-tab:pt-16 tab:p-6 mx-auto"
            style={{ boxShadow: "0px 0px 4px 0px #00000026" }}
        >
            <img src="/images/order/error.svg" className="size-16 mx-auto" alt="" />
            <div className="mt-6 tab:mt-8 font-bold text-[#EF4444] text-2xl leading-8 tab:text-3xl tab:leading-9 text-center">
                Thanh toán thất bại!
            </div>
            <div className="text-center mt-16 font-medium leading-6 tab:text-lg tab:leading-7 text-[#4B5563]">
                Đã xảy ra lỗi, chúng tôi không thể xử lý thanh toán của bạn. Vui lòng liên hệ với bộ phận hỗ trợ nếu bạn
                bị mất tiền.
            </div>
            <div className="mt-16 h-12 tab:h-16 rounded-lg flex-center text-white text-lg leading-6 gap-2 bg-[#EF4444] font-semibold">
                <LuRefreshCw className="size-[22px] -mt-px" />
                Thử thanh toán lại
            </div>
        </div>
    );
};

export default FailComponent;
