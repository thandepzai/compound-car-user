import { GrHomeRounded } from "react-icons/gr";
import { RiShoppingBag2Line } from "react-icons/ri";

const SuccessComponent = () => {
    return (
        <div
            className="bg-white w-full tab:w-[488px] tab:rounded-2xl tab:border tab:border-[#EFF6FF] max-tab:min-h-[calc(100vh-84px)] max-tab:p-4 max-tab:pt-16 tab:p-6 mx-auto"
            style={{ boxShadow: "0px 0px 4px 0px #00000026" }}
        >
            <img src="/images/order/success.svg" className="size-16 mx-auto" alt="" />
            <div className="mt-6 tab:mt-8 font-bold text-[#1FAEEB] text-2xl leading-8 tab:text-3xl tab:leading-9 text-center">Thanh toán thành công</div>
            <div className="flex justify-between mt-16">
                <div className="leading-6 tab:text-lg tab:leading-7 text-[#4B5563]">Tài khoản</div>
                <div className="text-[#4B5563] text-lg leading-7 font-medium tab:text-xl tab:font-bold tab:leading-8">0816 975 888</div>
            </div>
            <div className="flex justify-between mt-5">
                <div className="leading-6 tab:text-lg tab:leading-7 text-[#4B5563]">Gói Pro</div>
                <div className="text-[#4B5563] text-lg leading-7 font-medium tab:text-xl tab:font-bold tab:leading-8">1 Tháng</div>
            </div>
            <div className="flex justify-between mt-5">
                <div className="leading-6 tab:text-lg tab:leading-7 text-[#4B5563]">Thời hạn gói</div>
                <div className="text-[#4B5563] text-lg leading-7 font-medium tab:text-xl tab:font-bold tab:leading-8">24/05/2025</div>
            </div>
            <div className="flex justify-between mt-5">
                <div className="leading-6 tab:text-lg tab:leading-7 text-[#4B5563]">Trạng thái</div>
                <div className="text-[#4B5563] text-lg leading-7 font-medium tab:text-xl tab:font-bold tab:leading-8">Thành công</div>
            </div>
            <div className="flex justify-between mt-5">
                <div className="leading-6 tab:text-lg tab:leading-7 text-[#4B5563]">Giá tiền</div>
                <div className="text-[#4B5563] text-lg leading-7 font-medium tab:text-xl tab:font-bold tab:leading-8">50.000 vnđ</div>
            </div>
            <div className="mt-16 flex-center gap-2 text-lg leading-6 font-semibold text-white bg-[#1FAEEB] rounded-lg h-12 tab:h-16">
                <GrHomeRounded className="size-5 -mt-1" color="white" />
                Về trang chủ
            </div>
            <div className="mt-5 flex-center gap-2 text-lg leading-6 font-semibold text-[#2196F3] bg-[#EFF6FF] rounded-lg h-12 tab:h-16">
                <RiShoppingBag2Line className="size-5 " color="#2196F3" />
                Mua thêm
            </div>
        </div>
    );
};

export default SuccessComponent;
