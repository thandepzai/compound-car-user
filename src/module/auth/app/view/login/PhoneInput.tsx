import clsx from "clsx";

const PhoneInput = () => {
  return (
    <div className="h-screen relative pt-[100px]">
      <div
        className="h-[250px] absolute z-10 top-0 w-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(37, 99, 235, 0.88) 0%, rgba(59, 130, 246, 0.78) 45.02%, #BFDBFE 75%, #FFFFFF 100%)",
        }}
      />
      <div className="relative z-20 mx-6 top-0 max-w-tab tab:mx-auto">
        <div className="font-bold text-2xl leading-8 text-[#F9FAFB]">
          Khởi đầu cùng Phụ Xe Ghép!
        </div>
        <div className="mt-7 bg-white rounded-lg p-[16px] flex flex-col gap-[20px]">
          <div className="h-[48px] flex">
            <div className="flex items-center gap-[8px] border-r border-[#E5E7EB] pl-[12px] pr-[6px]">
              <img
                src="./images/vietnamphone.svg"
                alt=""
                className="w-10 h-[24px]"
              />
              <div className="text-sm leading-5 text-[#1F2937]">(+84)</div>
            </div>
            <input
              placeholder="Số điện thoại"
              className="flex-1 p-[12px] placeholder:text-[#6B7280] outline-none!"
              type="number"
            />
          </div>
          <div className="bg-[#E5E7EB] h-px" />
          <div className="bg-[#E5E7EB] h-px" />
          <button
            className={clsx(
              "font-medium text-lg leading-6 text-[#F9FAFB] h-[48px] rounded-lg",
              false
                ? "bg-[#D4D4D4] cursor-not-allowed"
                : "cursor-pointer bg-[#3B82F6] hover:opacity-90 active:opacity-80"
            )}
          >
            Tiếp tục
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneInput;
