const MainFooter = () => {
  return (
    <div
      className="border-t border-t-[#F9FAFB] py-8"
      style={{ boxShadow: "0px 0px 4px 0px #00000026" }}
    >
      <div className="max-w-lapx mx-auto flex flex-col gap-4">
        <div className="font-bold text-xl leading-8 text-center">LOGO</div>
        <div className="font-bold text-3xl text-[#1FAEEB] leading-9 text-center">
          Ứng Dụng Hỗ Trợ Tài Xế Lái Xe Ghép
        </div>
        <div className="text-[#4B5563] leading-6 text-center">
          Tối ưu hiệu suất – Tăng độ an toàn – Không bỏ lỡ khách hàng.
        </div>
        <div className="mt-6 mb-2 text-center">Logo</div>
        <div className="h-px w-full bg-[#E5E7EB]"/>
        <div className="mt-2 mb-8 flex justify-between items-center">
          <div className="flex gap-4">
            <div className="bg-blue-300 size-6"></div>
            <div className="bg-blue-300 size-6"></div>
            <div className="bg-blue-300 size-6"></div>
          </div>
          <div className="text-[#374151] text-sm leading-5">@2025 bản quyền thuộc về Hỗ Trợ Xế Xe Ghép</div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
