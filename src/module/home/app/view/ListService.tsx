import { showToast } from "@lib/component/Toast/Toast";
import { ToastType } from "@lib/component/Toast/type";
import { AuthService } from "@module/auth/domain/service/auth";
import { useRouter } from "next/navigation";
import { FaCheck } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const ListService = () => {
    const router = useRouter();

    const { isLogin } = AuthService.useUser();

    const getOrder = (orderId: number) => {
        if (!isLogin) {
            showToast({
                type: ToastType.ERROR,
                description: "Vui lòng đăng nhập để đăng ký gói"
            });
            return;
        }
        router.push(`/orders/${orderId}`);
    };

    return (
        <div className="mt-20 relative">
            <img
                src="/images/home/bg-service.png"
                alt=""
                className="h-[700px] w-full object-cover object-center absolute"
            />
            <div className="relative z-2">
                <div className="mx-auto flex-center border border-[#93C5FD] rounded-full w-[131px] h-8 gap-2">
                    <FiShoppingCart color="#20aeeb" className="size-[18px]" />
                    <div className="font-semibold leading-6 text-[#1FAEEB]">Gói dịch vụ</div>
                </div>
                <div className="mt-4 text-2xl leading-8 font-bold text-center text-[#1FAEEB]">
                    Đăng Ký Tài Khoản Pro
                </div>
                <div className="text-center leading-6 mt-3 text-[#4B5563] max-tab:mx-8 tab:max-w-[585px] mx-auto">
                    Giải pháp tối ưu hóa hiệu suất và an toàn dữ liệu. Đừng để lỡ bất kỳ khách hàng nào – Tạo tài khoản
                    để chúng tôi hỗ trợ bạn tối đa.
                </div>
                <div className="lap:overflow-y-auto lap:scrollbar-x-dark pb-5">
                    <div className="max-tab:hidden mt-10 mx-auto w-[590px] lap:w-[1210px] grid grid-cols-2 lap:grid-cols-4 gap-10">
                        <div
                            className="bg-white rounded-xl p-2 pb-4 relative border border-[#F3F4F6] w-[272px] h-[506px] my-auto"
                            style={{ boxShadow: "0px 0px 4px 0px #00000026" }}
                        >
                            <div
                                className="rounded-xl p-5 w-64 h-35 text-[#F9FAFB] flex flex-col gap-2 leading-6 font-medium"
                                style={{
                                    backgroundImage: `url("/images/home/bg-service-card.png")`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            >
                                <div>Gói 1 tháng</div>
                                <div className="text-3xl leading-9 font-bold">50.000 VNĐ</div>
                                <div className="line-through">100.000 VNĐ</div>
                            </div>
                            <div className="h-px w-full bg-[#F3F4F6] my-4" />
                            <div className="p-1.5 pr-2 flex flex-col gap-5">
                                <div className="flex items-center gap-2">
                                    <div
                                        className="w-10.5 h-6 flex-center rounded-md font-bold text-sm leading-5 text-white"
                                        style={{
                                            backgroundImage: `url("/images/home/service-pro.png")`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center"
                                        }}
                                    >
                                        PRO
                                    </div>
                                    <div className="font-medium text-sm leading-5 text-[#1F2937]">
                                        Đăng ký kích hoạt tính năng.
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex-center rounded-full bg-[#F9FAFB] size-6">
                                        <FaCheck color="#1FAEEB" className="w-3" />
                                    </div>
                                    <div className="font-medium text-sm leading-5 text-[#1F2937]">
                                        Dùng toàn bộ tính năng ứng dụng
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex-center rounded-full bg-[#F9FAFB] size-6">
                                        <FaCheck color="#1FAEEB" className="w-3" />
                                    </div>
                                    <div className="font-medium text-sm leading-5 text-[#1F2937]">
                                        Cập nhật tính năng mới liên tục
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex-center rounded-full bg-[#F9FAFB] size-6">
                                        <FaCheck color="#1FAEEB" className="w-3" />
                                    </div>
                                    <div className="font-medium text-sm leading-5 text-[#1F2937]">
                                        Hỗ trợ kỹ thuật 24/7
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex-center rounded-full bg-[#F9FAFB] size-6">
                                        <FaCheck color="#1FAEEB" className="w-3" />
                                    </div>
                                    <div className="font-medium text-sm leading-5 text-[#1F2937]">
                                        Vuốt trả lời nhanh tin nhắn Zalo
                                    </div>
                                </div>
                            </div>
                            <div className="h-px w-full bg-[#F3F4F6] my-4" />
                            <div
                                onClick={() => getOrder(1)}
                                className="rounded-full w-full h-12 flex-center cursor-pointer bg-[#1FAEEB] text-lg leading-6 text-[#F9FAFB] font-semibold hover:opacity-90"
                            >
                                Đăng ký
                            </div>
                        </div>

                        <div
                            className="bg-white rounded-xl p-2 pb-4 relative border border-[#F3F4F6] w-[272px] h-[506px] my-auto"
                            style={{ boxShadow: "0px 0px 4px 0px #00000026" }}
                        >
                            <div
                                className="rounded-xl p-5 w-64 h-35 text-[#F9FAFB] flex flex-col gap-2 leading-6 font-medium"
                                style={{
                                    backgroundImage: `url("/images/home/bg-service-card.png")`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            >
                                <div>Gói 1 tháng</div>
                                <div className="text-3xl leading-9 font-bold">50.000 VNĐ</div>
                                <div className="line-through">100.000 VNĐ</div>
                            </div>
                            <div className="h-px w-full bg-[#F3F4F6] my-4" />
                            <div className="p-1.5 pr-2 flex flex-col gap-5">
                                <div className="flex items-center gap-2">
                                    <div
                                        className="w-10.5 h-6 flex-center rounded-md font-bold text-sm leading-5 text-white"
                                        style={{
                                            backgroundImage: `url("/images/home/service-pro.png")`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center"
                                        }}
                                    >
                                        PRO
                                    </div>
                                    <div className="font-medium text-sm leading-5 text-[#1F2937]">
                                        Đăng ký kích hoạt tính năng.
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex-center rounded-full bg-[#F9FAFB] size-6">
                                        <FaCheck color="#1FAEEB" className="w-3" />
                                    </div>
                                    <div className="font-medium text-sm leading-5 text-[#1F2937]">
                                        Dùng toàn bộ tính năng ứng dụng
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex-center rounded-full bg-[#F9FAFB] size-6">
                                        <FaCheck color="#1FAEEB" className="w-3" />
                                    </div>
                                    <div className="font-medium text-sm leading-5 text-[#1F2937]">
                                        Cập nhật tính năng mới liên tục
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex-center rounded-full bg-[#F9FAFB] size-6">
                                        <FaCheck color="#1FAEEB" className="w-3" />
                                    </div>
                                    <div className="font-medium text-sm leading-5 text-[#1F2937]">
                                        Hỗ trợ kỹ thuật 24/7
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex-center rounded-full bg-[#F9FAFB] size-6">
                                        <FaCheck color="#1FAEEB" className="w-3" />
                                    </div>
                                    <div className="font-medium text-sm leading-5 text-[#1F2937]">
                                        Vuốt trả lời nhanh tin nhắn Zalo
                                    </div>
                                </div>
                            </div>
                            <div className="h-px w-full bg-[#F3F4F6] my-4" />
                            <div
                                onClick={() => getOrder(2)}
                                className="rounded-full w-full h-12 flex-center cursor-pointer bg-[#1FAEEB] text-lg leading-6 text-[#F9FAFB] font-semibold hover:opacity-90"
                            >
                                Đăng ký
                            </div>
                        </div>

                        <div
                            className="bg-white rounded-xl p-2 pb-4 relative border w-[272px] h-[518px] border-[#2196F3]"
                            style={{ boxShadow: "0px 0px 4px 0px #00000026" }}
                        >
                            <div className="absolute w-[146px] h-12 rounded-full bg-white/50 left-5 top-[-27px] flex-center overflow-hidden shadow">
                                <div className="w-[136px] h-10 rounded-full bg-[#1FAEEB] flex-center gap-2">
                                    <div className="text-sm leading-5 font-bold text-white">Phổ biến nhất</div>
                                    <img src="./images/home/star-popular.svg" className="size-4" alt="" />
                                </div>
                            </div>
                            <div
                                className="rounded-xl p-5 pt-8 w-64 h-38 text-[#F9FAFB] flex flex-col gap-2 leading-6 font-medium"
                                style={{
                                    backgroundImage: `url("/images/home/bg-service-card.png")`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            >
                                <div>Gói 1 tháng</div>
                                <div className="text-3xl leading-9 font-bold">50.000 VNĐ</div>
                                <div className="line-through">100.000 VNĐ</div>
                            </div>
                            <div className="h-px w-full bg-[#F3F4F6] my-4" />
                            <div className="p-1.5 pr-2 flex flex-col gap-5">
                                <div className="flex items-center gap-2">
                                    <div
                                        className="w-10.5 h-6 flex-center rounded-md font-bold text-sm leading-5 text-white"
                                        style={{
                                            backgroundImage: `url("/images/home/service-pro.png")`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center"
                                        }}
                                    >
                                        PRO
                                    </div>
                                    <div className="font-medium text-sm leading-5 text-[#1F2937]">
                                        Đăng ký kích hoạt tính năng.
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex-center rounded-full bg-[#F9FAFB] size-6">
                                        <FaCheck color="#1FAEEB" className="w-3" />
                                    </div>
                                    <div className="font-medium text-sm leading-5 text-[#1F2937]">
                                        Dùng toàn bộ tính năng ứng dụng
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex-center rounded-full bg-[#F9FAFB] size-6">
                                        <FaCheck color="#1FAEEB" className="w-3" />
                                    </div>
                                    <div className="font-medium text-sm leading-5 text-[#1F2937]">
                                        Cập nhật tính năng mới liên tục
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex-center rounded-full bg-[#F9FAFB] size-6">
                                        <FaCheck color="#1FAEEB" className="w-3" />
                                    </div>
                                    <div className="font-medium text-sm leading-5 text-[#1F2937]">
                                        Hỗ trợ kỹ thuật 24/7
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex-center rounded-full bg-[#F9FAFB] size-6">
                                        <FaCheck color="#1FAEEB" className="w-3" />
                                    </div>
                                    <div className="font-medium text-sm leading-5 text-[#1F2937]">
                                        Vuốt trả lời nhanh tin nhắn Zalo
                                    </div>
                                </div>
                            </div>
                            <div className="h-px w-full bg-[#F3F4F6] my-4" />
                            <div
                                onClick={() => getOrder(3)}
                                className="rounded-full h-12 flex-center cursor-pointer bg-[#1FAEEB] text-lg leading-6 text-[#F9FAFB] font-semibold hover:opacity-90"
                            >
                                Đăng ký
                            </div>
                        </div>

                        <div
                            className="bg-white rounded-xl p-2 pb-4 relative border border-[#F3F4F6] w-[272px] h-[506px] my-auto"
                            style={{ boxShadow: "0px 0px 4px 0px #00000026" }}
                        >
                            <div
                                className="rounded-xl p-5 w-64 h-35 text-[#F9FAFB] flex flex-col gap-2 leading-6 font-medium"
                                style={{
                                    backgroundImage: `url("/images/home/bg-service-card.png")`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            >
                                <div>Gói 1 tháng</div>
                                <div className="text-3xl leading-9 font-bold">50.000 VNĐ</div>
                                <div className="line-through">100.000 VNĐ</div>
                            </div>
                            <div className="h-px w-full bg-[#F3F4F6] my-4" />
                            <div className="p-1.5 pr-2 flex flex-col gap-5">
                                <div className="flex items-center gap-2">
                                    <div
                                        className="w-10.5 h-6 flex-center rounded-md font-bold text-sm leading-5 text-white"
                                        style={{
                                            backgroundImage: `url("/images/home/service-pro.png")`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center"
                                        }}
                                    >
                                        PRO
                                    </div>
                                    <div className="font-medium text-sm leading-5 text-[#1F2937]">
                                        Đăng ký kích hoạt tính năng.
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex-center rounded-full bg-[#F9FAFB] size-6">
                                        <FaCheck color="#1FAEEB" className="w-3" />
                                    </div>
                                    <div className="font-medium text-sm leading-5 text-[#1F2937]">
                                        Dùng toàn bộ tính năng ứng dụng
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex-center rounded-full bg-[#F9FAFB] size-6">
                                        <FaCheck color="#1FAEEB" className="w-3" />
                                    </div>
                                    <div className="font-medium text-sm leading-5 text-[#1F2937]">
                                        Cập nhật tính năng mới liên tục
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex-center rounded-full bg-[#F9FAFB] size-6">
                                        <FaCheck color="#1FAEEB" className="w-3" />
                                    </div>
                                    <div className="font-medium text-sm leading-5 text-[#1F2937]">
                                        Hỗ trợ kỹ thuật 24/7
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex-center rounded-full bg-[#F9FAFB] size-6">
                                        <FaCheck color="#1FAEEB" className="w-3" />
                                    </div>
                                    <div className="font-medium text-sm leading-5 text-[#1F2937]">
                                        Vuốt trả lời nhanh tin nhắn Zalo
                                    </div>
                                </div>
                            </div>
                            <div className="h-px w-full bg-[#F3F4F6] my-4" />
                            <div
                                onClick={() => getOrder(4)}
                                className="rounded-full w-full h-12 flex-center cursor-pointer bg-[#1FAEEB] text-lg leading-6 text-[#F9FAFB] font-semibold hover:opacity-90"
                            >
                                Đăng ký
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab:hidden mt-8 mx-4 flex items-center flex-col gap-5">
                    <div
                        className="bg-white rounded-lg p-4 max-w-100 relative w-full overflow-hidden"
                        style={{ boxShadow: "0px 0px 4px 0px #00000026" }}
                    >
                        <img src="/images/home/bg-feature.svg" className="absolute size-full top-0 left-0 z-0" alt="" />
                        <div className="flex-center gap-2 relative z-10">
                            <img src="/images/home/pro.svg" className="w-[37px] h-5" alt="" />
                            <div className="font-bold leading-6">Kích hoạt tính năng</div>
                        </div>
                        <div className="mt-5 flex flex-col gap-4 relative z-10">
                            <div className="flex items-center gap-2">
                                <div className="flex-center rounded-full bg-[#F9FAFB] size-6">
                                    <FaCheck color="#1FAEEB" className="w-3" />
                                </div>
                                <div className="font-medium text-xs leading-4 text-[#1F2937]">
                                    Dùng toàn bộ tính năng ứng dụng
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex-center rounded-full bg-[#F9FAFB] size-6">
                                    <FaCheck color="#1FAEEB" className="w-3" />
                                </div>
                                <div className="font-medium text-xs leading-4 text-[#1F2937]">
                                    Không giới hạn tin nhắn tự động
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex-center rounded-full bg-[#F9FAFB] size-6">
                                    <FaCheck color="#1FAEEB" className="w-3" />
                                </div>
                                <div className="font-medium text-xs leading-4 text-[#1F2937]">
                                    Vuốt trả lời nhanh tin nhắn Zalo
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex-center rounded-full bg-[#F9FAFB] size-6">
                                    <FaCheck color="#1FAEEB" className="w-3" />
                                </div>
                                <div className="font-medium text-xs leading-4 text-[#1F2937]">
                                    Cập nhật tính năng mới liên tục
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex-center rounded-full bg-[#F9FAFB] size-6">
                                    <FaCheck color="#1FAEEB" className="w-3" />
                                </div>
                                <div className="font-medium text-xs leading-4 text-[#1F2937]">Hỗ trợ kỹ thuật 24/7</div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="rounded-lg p-4 max-w-100 w-full text-center bg-white"
                        style={{ boxShadow: "0px 0px 16px 0px #00000026" }}
                    >
                        <div className="text-[#1FAEEB] font-bold text-xl leading-8">1 Tháng</div>
                        <div className="text-sm leading-5 text-[#6B7280]">Phù hợp cho trải nghiệm</div>
                        <div className="text-2xl leading-8 font-bold text-[#374151] mt-4">50.000 VNĐ</div>
                        <div className="text-[#6B7280] text-xs leading-4">Tiết Kiệm 40%</div>
                        <div
                            onClick={() => getOrder(1)}
                            className="mt-4 h-12 bg-[#1FAEEB] rounded-lg text-lg text-white leading-6 flex-center font-semibold"
                        >
                            Đăng ký
                        </div>
                    </div>
                    <div
                        className="rounded-lg p-4 max-w-100 w-full text-center bg-white"
                        style={{ boxShadow: "0px 0px 16px 0px #00000026" }}
                    >
                        <div className="text-[#1FAEEB] font-bold text-xl leading-8">1 Tháng</div>
                        <div className="text-sm leading-5 text-[#6B7280]">Phù hợp cho trải nghiệm</div>
                        <div className="text-2xl leading-8 font-bold text-[#374151] mt-4">50.000 VNĐ</div>
                        <div className="text-[#6B7280] text-xs leading-4">Tiết Kiệm 40%</div>
                        <div
                            onClick={() => getOrder(2)}
                            className="mt-4 h-12 bg-[#1FAEEB] rounded-lg text-lg text-white leading-6 flex-center font-semibold"
                        >
                            Đăng ký
                        </div>
                    </div>
                    <div
                        className="rounded-lg max-w-100 w-full text-center bg-white border border-[#2196F3] overflow-hidden"
                        style={{ boxShadow: "0px 0px 16px 0px #00000026" }}
                    >
                        <div className="flex-center gap-2 bg-[#1FAEEB] py-1.5">
                            <div className="text-sm leading-5 font-bold text-[#F9FAFB]">Phổ biến nhất</div>
                            <img src="/images/home/star-popular.svg" className="size-4" alt="" />
                        </div>
                        <div className="p-4">
                            <div className="text-[#1FAEEB] font-bold text-xl leading-8">1 Tháng</div>
                            <div className="text-sm leading-5 text-[#6B7280]">Phù hợp cho trải nghiệm</div>
                            <div className="text-2xl leading-8 font-bold text-[#374151] mt-4">50.000 VNĐ</div>
                            <div className="text-[#6B7280] text-xs leading-4">Tiết Kiệm 40%</div>
                            <div
                                onClick={() => getOrder(3)}
                                className="mt-4 h-12 bg-[#1FAEEB] rounded-lg text-lg text-white leading-6 flex-center font-semibold"
                            >
                                Đăng ký
                            </div>
                        </div>
                    </div>
                    <div
                        className="rounded-lg p-4 max-w-100 w-full text-center bg-white"
                        style={{ boxShadow: "0px 0px 16px 0px #00000026" }}
                    >
                        <div className="text-[#1FAEEB] font-bold text-xl leading-8">1 Tháng</div>
                        <div className="text-sm leading-5 text-[#6B7280]">Phù hợp cho trải nghiệm</div>
                        <div className="text-2xl leading-8 font-bold text-[#374151] mt-4">50.000 VNĐ</div>
                        <div className="text-[#6B7280] text-xs leading-4">Tiết Kiệm 40%</div>
                        <div
                            onClick={() => getOrder(4)}
                            className="mt-4 h-12 bg-[#1FAEEB] rounded-lg text-lg text-white leading-6 flex-center font-semibold"
                        >
                            Đăng ký
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListService;
