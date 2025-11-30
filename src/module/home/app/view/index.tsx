import CartIcon from "@/module/_core/app/component/icon/CartIcon";
import CheckLine from "@/module/_core/app/component/icon/CheckLine";

const HomeView = () => {
  return (
    <div className="max-w-lapx mx-auto mt-5">
      <div
        className="h-[700px] rounded-3xl px-16 pt-32 flex gap-[101px]"
        style={{
          background: `
                linear-gradient(0deg, rgba(31, 174, 235, 0.85), rgba(31, 174, 235, 0.85)),
                radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%),
                linear-gradient(180deg, #1FAEEB 0%, rgba(147, 197, 253, 0) 100%)
            `,
        }}
      >
        <div className="flex flex-col gap-8 flex-1 text-[#F9FAFB]">
          <div className="flex items-center gap-2">
            <img
              src="./images/home/google-play.png"
              alt=""
              className="size-8"
            />
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
        <img
          src="./images/home/phone.png"
          alt=""
          className="max-w-[428px] ml-auto"
        />
      </div>

      <div className="mt-20">
        <div className="mx-auto mt-4 border border-[#93C5FD] h-8 flex gap-2 rounded-full px-2 py-1 w-fit items-center">
          <CartIcon className="size-[19px]" />
          <div className="font-semibold text-[#2196F3] leading-6">
            Gói dịch vụ
          </div>
        </div>
        <div className="mt-4 font-bold text-2xl text-center text-[#1FAEEB]">
          Đăng Ký Tài Khoản Pro
        </div>
        <div className="mt-3 max-w-[585px] text-center leading-6 mx-auto text-base">
          Giải pháp tối ưu hóa hiệu suất và an toàn dữ liệu. Đừng để lỡ bất kỳ
          khách hàng nào – Tạo tài khoản để chúng tôi hỗ trợ bạn tối đa.
        </div>
        <div className="mt-10 grid grid-cols-4 gap-10 items-center">
          <div
            className="bg-[#1FAEEB] rounded-2xl"
            style={{ boxShadow: "0px 0px 4px 0px #00000026" }}
          >
            <div className="font-medium leading-6 text-[#F3F4F6] m-4 mb-0">
              Gói 3 tháng
            </div>
            <div className="text-2xl font-2xl leading-8 font-bold text-[#F9FAFB] mx-4 mt-1 mb-5">
              150.000 VNĐ
            </div>
            <div className="rounded-2xl bg-white p-4">
              <div className="flex gap-2 font-medium text-lg text-[#0A0A0A]">
                <span>BREIF</span>
                <div
                  className="py-0.5 px-1.5 rounded-md text-[#F9FAFB] font-bold text-sm leading-5 flex-center"
                  style={{
                    background: `
                    linear-gradient(0deg, var(--bg-primary-original-default, #1FAEEB), var(--bg-primary-original-default, #1FAEEB)),
                    radial-gradient(50% 50% at 50% 50%, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%),
                    linear-gradient(180deg, #0088FF 0%, rgba(147, 197, 253, 0) 100%)
                    `,
                  }}
                >
                  PRO
                </div>
              </div>
              <div className="text-[#6B7280] text-sm leading-5">
                Mặt trời vàng rực rỡ chiếu qua kẽ lá, vẽ nên những vệt sáng lấp
                lánh trên.
              </div>
              <div className="h w-full bg-[#E5E7EB] my-4" />
              <div className="flex gap-2 items-center">
                <div className="rounded-full bg-[#F3F4F6] flex-center size-6">
                  <CheckLine className="size-5" />
                </div>
                <div className="font-medium text-[#1F2937] text-sm leading-5">
                  Dùng toàn bộ tính năng ứng dụng
                </div>
              </div>
              <div className="text-center font-semibold bg-[#1FAEEB] leading-6 rounded-full text-white py-2 hover:opacity-90 active:opacity-80 cursor-pointer">
                Đăng ký
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 max-w-lap mx-auto flex gap-16 items-center">
        <div className="size-[400px] bg-blue-400 rounded-lg"></div>
        <div className="flex flex-col gap-4 flex-1">
          <div className="text-[#1FAEEB] font-medium text-lg leading-7">
            Video Hướng Dẫn
          </div>
          <div className="font-bold text-3xl leading-9">
            Hỗ trợ tài xế tối ưu trải nghiệm ứng dụng !
          </div>
          <div className="text-[#6B7280] text-lg leading-7">
            Ứng dụng duy nhất tại Việt Nam, mang đến giải pháp hỗ trợ tài xế
            nhanh chóng, tiện lợi và tối ưu hóa năng suất, đảm bảo không bỏ lỡ
            bất kỳ khách hàng nào.
          </div>
          <div className="mt-8 flex gap-8">
            <div className="w-1/2">
              <div className="font-bold text-3xl leading-9">5 triệu +</div>
              <div className="mt-5 text-[#6B7280] leading-6">
                Tài xế dùng hàng tháng
              </div>
            </div>
            <div className="w-px h-20 bg-[#D1D5DB]" />
            <div className="w-1/2">
              <div className="font-bold text-3xl leading-9">8 triệu</div>
              <div className="mt-5 text-[#6B7280] leading-6">
                Tài khoản tài xế đã đăng ký
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomeView;
