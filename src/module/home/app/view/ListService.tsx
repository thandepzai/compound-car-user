import { FaCheck } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const ListService = () => {
  return (
    <div className="mt-20">
      <div className="mx-auto flex-center border border-[#93C5FD] rounded-full w-[135px] h-[32px] gap-2">
        <FiShoppingCart color="#20aeeb" className="size-[18px]" />
        <div className="font-semibold leading-6 text-[#2196F3]">
          Gói dịch vụ
        </div>
      </div>
      <div className="mt-4 text-2xl leading-8 font-bold text-center text-[#1FAEEB]">
        Đăng Ký Tài Khoản Pro
      </div>
      <div className="text-center leading-6 mt-3 text-[#4B5563] max-w-[272px] tab:max-w-[585px] mx-auto">
        Giải pháp tối ưu hóa hiệu suất và an toàn dữ liệu. Đừng để lỡ bất kỳ
        khách hàng nào – Tạo tài khoản để chúng tôi hỗ trợ bạn tối đa.
      </div>
      <div className="mt-10 flex gap-10 max-lap:flex-wrap justify-center">
        <div
          className="bg-white rounded-xl p-2 pb-4 relative border-[#F3F4F6]"
          style={{ boxShadow: "0px 0px 4px 0px #00000026" }}
        >
          <div
            className="rounded-xl p-5 pt-8 w-[256px] h-50"
            style={{
              backgroundImage: `url("/images/home/bg-service.png")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="font-medium text-[#1FAEEB] leading-6">
              Gói 1 Tháng
            </div>
            <div className="text-3xl font-bold text-[#1FAEEB] leading-9 mt-2">
              50.000 VNĐ
            </div>
            <div className="mt-8 flex-center border border-[#93C5FD] rounded-full h-12 px-3 py-2 bg-white font-medium leading-6 text-lg text-[#2196F3] cursor-pointer select-none hover:bg-blue-50 active:bg-blue-100">
              Đăng ký
            </div>
          </div>
          <div className="mt-5 p-1.5 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div
                className="py-0.5 px-1.5 rounded-md font-bold text-sm leading-5 text-white"
                style={{
                  background: `
                    linear-gradient(0deg, #1FAEEB, #1FAEEB),
                    radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%),
                    linear-gradient(180deg, #0088FF 0%, rgba(147, 197, 253, 0) 100%)
                  `,
                }}
              >
                PRO
              </div>
              <div className="font-medium text-sm leading-5 text-[#1F2937]">
                Đăng ký kích hoạt tinh năng.
              </div>
            </div>
            <div className="h-[1px] w-full bg-[#F3F4F6]" />
            <div className="flex items-center gap-2">
              <div className="flex-center rounded-full bg-[#F3F4F6] size-6">
                <FaCheck color="#4B5563" className="w-3" />
              </div>
              <div className="font-medium text-sm leading-5 text-[#1F2937]">
                Dùng toàn bộ tính năng ứng dụng
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-center rounded-full bg-[#F3F4F6] size-6">
                <FaCheck color="#4B5563" className="w-3" />
              </div>
              <div className="font-medium text-sm leading-5 text-[#1F2937]">
                Cập nhật tính năng mới liên tục
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-center rounded-full bg-[#F3F4F6] size-6">
                <FaCheck color="#4B5563" className="w-3" />
              </div>
              <div className="font-medium text-sm leading-5 text-[#1F2937]">
                Hỗ trợ kỹ thuật 24/7
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-center rounded-full bg-[#F3F4F6] size-6">
                <FaCheck color="#4B5563" className="w-3" />
              </div>
              <div className="font-medium text-sm leading-5 text-[#1F2937]">
                Vuốt trả lời nhanh tin nhắn Zalo
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-white rounded-xl p-2 pb-4 relative border-[#F3F4F6]"
          style={{ boxShadow: "0px 0px 4px 0px #00000026" }}
        >
          <div
            className="rounded-xl p-5 pt-8 w-[256px] h-50"
            style={{
              backgroundImage: `url("/images/home/bg-service.png")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="font-medium text-[#1FAEEB] leading-6">
              Gói 1 Tháng
            </div>
            <div className="text-3xl font-bold text-[#1FAEEB] leading-9 mt-2">
              50.000 VNĐ
            </div>
            <div className="mt-8 flex-center border border-[#93C5FD] rounded-full h-12 px-3 py-2 bg-white font-medium leading-6 text-lg text-[#2196F3] cursor-pointer select-none hover:bg-blue-50 active:bg-blue-100">
              Đăng ký
            </div>
          </div>
          <div className="mt-5 p-1.5 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div
                className="py-0.5 px-1.5 rounded-md font-bold text-sm leading-5 text-white"
                style={{
                  background: `
                    linear-gradient(0deg, #1FAEEB, #1FAEEB),
                    radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%),
                    linear-gradient(180deg, #0088FF 0%, rgba(147, 197, 253, 0) 100%)
                  `,
                }}
              >
                PRO
              </div>
              <div className="font-medium text-sm leading-5 text-[#1F2937]">
                Đăng ký kích hoạt tinh năng.
              </div>
            </div>
            <div className="h-[1px] w-full bg-[#F3F4F6]" />
            <div className="flex items-center gap-2">
              <div className="flex-center rounded-full bg-[#F3F4F6] size-6">
                <FaCheck color="#4B5563" className="w-3" />
              </div>
              <div className="font-medium text-sm leading-5 text-[#1F2937]">
                Dùng toàn bộ tính năng ứng dụng
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-center rounded-full bg-[#F3F4F6] size-6">
                <FaCheck color="#4B5563" className="w-3" />
              </div>
              <div className="font-medium text-sm leading-5 text-[#1F2937]">
                Cập nhật tính năng mới liên tục
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-center rounded-full bg-[#F3F4F6] size-6">
                <FaCheck color="#4B5563" className="w-3" />
              </div>
              <div className="font-medium text-sm leading-5 text-[#1F2937]">
                Hỗ trợ kỹ thuật 24/7
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-center rounded-full bg-[#F3F4F6] size-6">
                <FaCheck color="#4B5563" className="w-3" />
              </div>
              <div className="font-medium text-sm leading-5 text-[#1F2937]">
                Vuốt trả lời nhanh tin nhắn Zalo
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-white rounded-xl p-2 pb-4 relative border-[#F3F4F6]"
          style={{ boxShadow: "0px 0px 4px 0px #00000026" }}
        >
          <div
            className="rounded-xl p-5 pt-8 w-[256px] h-50"
            style={{
              backgroundImage: `url("/images/home/bg-service.png")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="font-medium text-[#1FAEEB] leading-6">
              Gói 1 Tháng
            </div>
            <div className="text-3xl font-bold text-[#1FAEEB] leading-9 mt-2">
              50.000 VNĐ
            </div>
            <div className="mt-8 flex-center border border-[#93C5FD] rounded-full h-12 px-3 py-2 bg-white font-medium leading-6 text-lg text-[#2196F3] cursor-pointer select-none hover:bg-blue-50 active:bg-blue-100">
              Đăng ký
            </div>
          </div>
          <div className="mt-5 p-1.5 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div
                className="py-0.5 px-1.5 rounded-md font-bold text-sm leading-5 text-white"
                style={{
                  background: `
                    linear-gradient(0deg, #1FAEEB, #1FAEEB),
                    radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%),
                    linear-gradient(180deg, #0088FF 0%, rgba(147, 197, 253, 0) 100%)
                  `,
                }}
              >
                PRO
              </div>
              <div className="font-medium text-sm leading-5 text-[#1F2937]">
                Đăng ký kích hoạt tinh năng.
              </div>
            </div>
            <div className="h-[1px] w-full bg-[#F3F4F6]" />
            <div className="flex items-center gap-2">
              <div className="flex-center rounded-full bg-[#F3F4F6] size-6">
                <FaCheck color="#4B5563" className="w-3" />
              </div>
              <div className="font-medium text-sm leading-5 text-[#1F2937]">
                Dùng toàn bộ tính năng ứng dụng
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-center rounded-full bg-[#F3F4F6] size-6">
                <FaCheck color="#4B5563" className="w-3" />
              </div>
              <div className="font-medium text-sm leading-5 text-[#1F2937]">
                Cập nhật tính năng mới liên tục
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-center rounded-full bg-[#F3F4F6] size-6">
                <FaCheck color="#4B5563" className="w-3" />
              </div>
              <div className="font-medium text-sm leading-5 text-[#1F2937]">
                Hỗ trợ kỹ thuật 24/7
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-center rounded-full bg-[#F3F4F6] size-6">
                <FaCheck color="#4B5563" className="w-3" />
              </div>
              <div className="font-medium text-sm leading-5 text-[#1F2937]">
                Vuốt trả lời nhanh tin nhắn Zalo
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-white rounded-xl p-2 pb-4 relative border-[#F3F4F6]"
          style={{ boxShadow: "0px 0px 4px 0px #00000026" }}
        >
          <div
            className="rounded-xl p-5 pt-8 w-[256px] h-50"
            style={{
              backgroundImage: `url("/images/home/bg-service.png")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="font-medium text-[#1FAEEB] leading-6">
              Gói 1 Tháng
            </div>
            <div className="text-3xl font-bold text-[#1FAEEB] leading-9 mt-2">
              50.000 VNĐ
            </div>
            <div className="mt-8 flex-center border border-[#93C5FD] rounded-full h-12 px-3 py-2 bg-white font-medium leading-6 text-lg text-[#2196F3] cursor-pointer select-none hover:bg-blue-50 active:bg-blue-100">
              Đăng ký
            </div>
          </div>
          <div className="mt-5 p-1.5 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div
                className="py-0.5 px-1.5 rounded-md font-bold text-sm leading-5 text-white"
                style={{
                  background: `
                    linear-gradient(0deg, #1FAEEB, #1FAEEB),
                    radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%),
                    linear-gradient(180deg, #0088FF 0%, rgba(147, 197, 253, 0) 100%)
                  `,
                }}
              >
                PRO
              </div>
              <div className="font-medium text-sm leading-5 text-[#1F2937]">
                Đăng ký kích hoạt tinh năng.
              </div>
            </div>
            <div className="h-[1px] w-full bg-[#F3F4F6]" />
            <div className="flex items-center gap-2">
              <div className="flex-center rounded-full bg-[#F3F4F6] size-6">
                <FaCheck color="#4B5563" className="w-3" />
              </div>
              <div className="font-medium text-sm leading-5 text-[#1F2937]">
                Dùng toàn bộ tính năng ứng dụng
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-center rounded-full bg-[#F3F4F6] size-6">
                <FaCheck color="#4B5563" className="w-3" />
              </div>
              <div className="font-medium text-sm leading-5 text-[#1F2937]">
                Cập nhật tính năng mới liên tục
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-center rounded-full bg-[#F3F4F6] size-6">
                <FaCheck color="#4B5563" className="w-3" />
              </div>
              <div className="font-medium text-sm leading-5 text-[#1F2937]">
                Hỗ trợ kỹ thuật 24/7
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-center rounded-full bg-[#F3F4F6] size-6">
                <FaCheck color="#4B5563" className="w-3" />
              </div>
              <div className="font-medium text-sm leading-5 text-[#1F2937]">
                Vuốt trả lời nhanh tin nhắn Zalo
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListService;
