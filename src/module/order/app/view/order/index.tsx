"use client";

import { showToast } from "@lib/component/Toast/Toast";
import { ToastType } from "@lib/component/Toast/type";
import { AuthService } from "@module/auth/domain/service/auth";
import { OrderService } from "@module/order/domain/service/order";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import clsx from "clsx";

const OrderView = () => {
    const { orderId } = useParams() || {};
    const router = useRouter();

    const [planId, setPlanId] = useState<number>(1);
    const [phone, setPhone] = useState<string>("");

    const { createOrderMutation } = OrderService.useOrderAction();

    const { user, isFetching } = AuthService.useUser();

    useEffect(() => {
        if (!!orderId) setPlanId(Number(orderId));
    }, [orderId]);

    useEffect(() => {
        if (isFetching) return;
        if (!user) {
            showToast({
                type: ToastType.ERROR,
                description: "Vui lòng đăng nhập để đăng ký"
            });
            router.push("/");
        } else setPhone(user.phoneNumber);
    }, [user, isFetching]);

    const createOrder = () => {
        createOrderMutation.mutate(
            { planId, quantity: 1 },
            {
                onSuccess: (data) => {
                    window.location.href = data;
                },
                onError: (error: any) => {
                    showToast({
                        type: ToastType.ERROR,
                        description: "Đã có lỗi xảy ra vui lòng thử lại"
                    });
                }
            }
        );
    };

    return (
        <div className="bg-[#f3f4f6] min-h-[calc(100vh-82px)] tab:py-3">
            <div
                className="tab:border tab:border-[#EFF6FF] tab:rounded-2xl tab:p-8 tab:w-2xl bg-white mx-auto max-tab:px-4"
                style={{ boxShadow: "0px 0px 4px 0px #00000026" }}
            >
                <div className="h-20 flex py-4 tab:hidden">
                    <div onClick={() => router.push("/")} className="size-12 flex-center">
                        <IoChevronBack className="size-6" />
                    </div>
                    <div className="flex-1 flex-center text-xl leading-8 font-bold text-black">Thanh toán</div>
                    <div className="size-12"></div>
                </div>
                <div className="font-bold text-3xl leading-9 text-center max-tab:hidden">
                    Quản Lý Gói Pro & Thanh Toán
                </div>
                <div className="mt-4 bg-[#EFF6FF] border border-[#EFF6FF] rounded-full py-2 px-3 font-bold text-sm leading-5 text-[#1FAEEB] w-fit mx-auto max-tab:hidden">
                    Nâng cấp lên Gói Pro để sử dụng toàn bộ tính năng
                </div>
                <div className="tab:mt-8 font-bold leading-6 tab:text-lg tab:leading-7">Chọn loại gói Pro</div>
                <div className="mt-3 flex gap-3">
                    {[1, 2, 3, 4].map((item, index) => {
                        const isActive = index + 1 === planId;
                        return (
                            <div
                                key={index}
                                onClick={() => setPlanId(index + 1)}
                                className={clsx(
                                    "p-3 rounded-lg flex flex-col items-center gap-1 w-[142px] cursor-pointer select-none",
                                    isActive ? "bg-[#1FAEEB] text-white" : "bg-[#F3F4F6] text-[#6B7280]"
                                )}
                            >
                                <div
                                    className={clsx(
                                        "font-bold max-tab:text-sm max-tab:leading-5",
                                        isActive ? "text-white" : "text-black"
                                    )}
                                >
                                    3 Tháng
                                </div>
                                <div className="font-bold leading-6 tab:text-lg tab:leading-7 ">150.000 VNĐ</div>
                                <div className="font-medium text-xs leading-4  line-through">100.000 VNĐ</div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-8 border border-[#F3F4F6] p-4 bg-[#F9FAFB] rounded-xl">
                    <div className="font-bold leading-6 tab:text-lg tab:leading-7 text-black">Thông tin tài khoản</div>
                    <div className="mt-4">
                        <div className="text-sm leading-5">Số điện thoại</div>
                        <div
                            className="mt-1 border border-[#D1D5DB] rounded-lg h-12 overflow-hidden flex"
                            style={{ boxShadow: "0px 1px 2px 0px #0A0D120D" }}
                        >
                            <div className="flex items-center p-3 pr-1.5 bg-[#F3F4F6] border-r border-[#D1D5DB] gap-2">
                                <img src="/images/vietnamphone.svg" className="w-[35px] h-6" alt="" />
                                <div className="text-sm leading-5 text-[#1F2937]">(+84)</div>
                            </div>
                            <input
                                type="text"
                                value={phone}
                                readOnly
                                onClick={() => {
                                    showToast({
                                        type: ToastType.ERROR,
                                        description: "Số điện thoại theo tài khoản, không thể thay đổi"
                                    });
                                }}
                                className="flex-1 bg-white rounded-lg px-3 outline-none! cursor-not-allowed select-text"
                            />
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="text-sm leading-5">Số điện thoại giới thiệu</div>
                        <div
                            className="mt-1 border border-[#D1D5DB] rounded-lg h-12 overflow-hidden flex"
                            style={{ boxShadow: "0px 1px 2px 0px #0A0D120D" }}
                        >
                            <div className="flex items-center p-3 pr-1.5 bg-[#F3F4F6] border-r border-[#D1D5DB] gap-2">
                                <img src="/images/vietnamphone.svg" className="w-[35px] h-6" alt="" />
                                <div className="text-sm leading-5 text-[#1F2937]">(+84)</div>
                            </div>
                            <input
                                type="text"
                                placeholder="Nhập giới thiệu"
                                className="flex-1 bg-white rounded-lg px-3 outline-none!"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="font-bold leading-6 tab:text-lg tab:leading-7 text-black">
                        Phương thức thanh toán
                    </div>
                    <div className="mt-3 border border-[#D1D5DB] rounded-xl p-3 flex items-center justify-between">
                        <div className="font-medium leading-6 text-[#4B5563] line-clamp-1">
                            Thanh toán qua VNPAY-QR / Ví điện tử
                        </div>
                        <img src="/images/order/vnpay.svg" className="w-[129px] h-11" alt="" />
                    </div>
                </div>
                <div className="mt-3 text-[#6B7280] text-sm leading-5 text-center tab:hidden">
                    Bấm “Thanh toán” đồng nghĩa việc bạn đọc và đồng ý với Điều khoản dịch vụ.
                </div>
                <div
                    className="max-tab:w-screen max-tab:-ml-4 max-tab:p-4 max-tab:pb-10 mt-8"
                    style={{ boxShadow: "0px 0px 4px 0px #00000026" }}
                >
                    <div className="flex justify-between">
                        <div className="leading-6 tab:text-xl tab:leading-8 text-black font-bold">Tổng cộng:</div>
                        <div>
                            <div className="font-bold text-2xl leading-8 tab:text-4xl tab:leading-10 text-[#1FAEEB]">
                                50.000 VNĐ
                            </div>
                            <div className="mt-1 text-[#4B5563] text-sm leading-5 tab:text-lg tab:leading-7">
                                Ngày hết hạn: 24/05/2025
                            </div>
                        </div>
                    </div>
                    <div
                        onClick={createOrder}
                        className="mt-4 h-12 bg-[#1FAEEB] rounded-lg flex-center font-semibold tab:font-bold text-lg leading-6 text-[#F9FAFB]"
                    >
                        Thanh toán
                    </div>
                </div>
                <div className="mt-2 text-[#6B7280] leading-6 text-center max-tab:hidden">
                    Bấm “Thanh toán” đồng nghĩa việc bạn đọc và đồng ý với Điều khoản dịch vụ.
                </div>
            </div>
        </div>
    );
};

export default OrderView;
