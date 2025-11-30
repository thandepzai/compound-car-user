import BackIcon from "@/module/_core/app/component/icon/AlphaIcon";

const OtpVerify = () => {
  return (
    <div className="min-h-screen">
      <div className="size-[40px] flex-center rounded-full border border-[#93C5FD]">
        <BackIcon color="#2196F3"/>
      </div>
      <div className="px-4 py-3 flex flex-col gap-9 items-center">
        <div className="font-bold text-[#2196F3] text-xl w-full">Mã Xác Thực OTP</div>
        <img src="./images/phone.png" alt="" className="size-[100px]" />
        <div className="text-[#6B7280] font-medium text-sm leading-5">Nhập mã 6 số bạn nhận được qua - SMS 378</div>
        <div className="flex justify-between px-6">
          <div className="flex h-[40px] w-[81px] rounded-lg border border-[#E5E7EB]">
            <input type="text" name="" id="" className="size-[40px] border-none ring-0 shadow-none outline-none text-2xl font-bold px-4"/>
            <div className="h-[39px] min-w-px bg-[#E5E7EB]"/>
            <input type="text" name="" id="" className="size-[40px] border-none ring-0 shadow-none outline-none text-2xl font-bold px-4"/>
          </div>
        </div>
        <button className="h-[48px] w-[164px] rounded-full flex-center font-bold text-lg bg-blue-500 text-white">
          Gửi lại mã (10s)
        </button>
      </div>
    </div>
  );
};

export default OtpVerify;
