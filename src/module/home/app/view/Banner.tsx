const Banner = () => (
  <div
    className="lap:rounded-3xl overflow-hidden relative tab:mt-5 h-[800px] tab:h-[1050px] lap:h-[700px]"
    style={{
      background: `
        linear-gradient(0deg, var(--bg-primary-original-default, #1FAEEB), var(--bg-primary-original-default, #1FAEEB)),
        radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%),
        linear-gradient(180deg, #1FAEEB 0%, rgba(147, 197, 253, 0) 100%)
        `,
    }}
  >
    <div
      className="absolute w-[1450px] h-[506px] bottom-[11px] left-[-105px] rotate-[-21deg]"
      style={{
        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(147, 197, 253, 0.175) 50%, rgba(255, 255, 255, 0.0125) 100%)`,
      }}
    />
    <div
      className="absolute bottom-0 w-full h-32 opacity-30 z-3 blur-[50px]"
      style={{
        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, #93C5FD 50%, #1FAEEB 100%)`,
      }}
    />
    <div className="mt-32 flex flex-col lap:flex-row gap-12 tab:gap-16 lapx:gap-25 lap:mx-10 lapx:mx-16 relative z-2">
      <div className="flex flex-col gap-8 text-[#F9FAFB] max-tab:mx-4 tab:w-[460px] lap:w-[550px]">
        <div className="flex items-center gap-2">
          <img src="./images/home/google-play.png" alt="" className="size-8" />
          <div className="font-medium leading-6">Tải App Trên Ch Play</div>
        </div>
        <div className="font-bold text-5xl">
          Ứng Dụng Hỗ Trợ Tài Xế Lái Xe Ghép
        </div>
        <div className="text-lg font-medium leading-7">
          Tối ưu hiệu suất – Tăng độ an toàn – Không bỏ lỡ khách hàng.
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <img src="./images/home/check.png" alt="" />
            <span className="font-medium leading-6">
              Shortcut Trả Lời Zalo Tự Động
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <img src="./images/home/check.png" alt="" />
            <span className="font-medium leading-6">Vuốt Trả Lời Nhanh</span>
          </div>
          <div className="flex gap-2 items-center">
            <img src="./images/home/check.png" alt="" />
            <span className="font-medium leading-6">An Toàn & Tiện Lợi</span>
          </div>
        </div>
      </div>
      <img src="./images/home/phone.png" alt="" className="max-w-[428px]" />
    </div>
  </div>
);

export default Banner;
