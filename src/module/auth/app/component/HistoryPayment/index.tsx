"use client";

import { UserSubscriptionDTO } from "@module/auth/domain/dto/auth";
import { FaChevronLeft } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

interface HistoryPaymentProps {
    userSubscription: UserSubscriptionDTO;
    onBack: () => void;
}
const HistoryPayment = ({ onBack, userSubscription }: HistoryPaymentProps) => {
    return (
        <div className="max-tab:px-4 mx-auto">
            <div className="py-3 flex tab:hidden">
                <div onClick={onBack} className="size-12 flex-center cursor-pointer">
                    <FaChevronLeft className="text-[#6B7280]" />
                </div>
                <div className="flex-1 flex-center font-bold text-xl leading-8 text-[#374151]">Lịch sử thanh toán </div>
                <div className="size-12" />
            </div>
            <div className="pb-5 hidden tab:flex items-center justify-between text-xl leading-8 text-black font-bold w-[488px] px-5 border-b border-[#F3F4F6] mb-5 -ml-5">
                Lịch sử thanh toán
                <div
                    onClick={onBack}
                    className="flex-center rounded-full size-8 border border-[#D1D5DB] cursor-pointer"
                >
                    <IoClose className="text-[#6B7280]" />
                </div>
            </div>
            <div className="flex flex-col gap-5 tab:gap-6">
                <div
                    className="rounded-lg border border-[#EFF6FF] p-3"
                    style={{ boxShadow: "0px 0px 8px 0px #00000026" }}
                >
                    <div className="flex gap-1.5 items-center">
                        <div className="flex-center rounded-md bg-[#1FAEEB] text-xs leading-4 w-[37px] h-5 text-[#F9FAFB] font-medium">
                            PRO
                        </div>
                        <div className="text-sm leading-5 text-[#0A0A0A] flex-1">Gói 12 Tháng</div>
                        <div className="rounded-lg bg-[#EFF6FF] font-bold text-sm leading-5 text-[#1FAEEB] w-28 h-7 flex-center">
                            Đã thanh toán
                        </div>
                    </div>
                    <div className="w-full h-px bg-[#F3F4F6] my-3" />
                    <div className="flex items-center">
                        <div className="flex-1">
                            <div className="flex gap-0.5 text-xs leading-4 font-medium">
                                <div className="text-[#6B7280]">Ngày mua :</div>
                                <div className="text-[#1F2937]">12/05/2025</div>
                            </div>
                            <div className="flex gap-0.5 text-xs leading-4 font-medium mt-1.5">
                                <div className="text-[#6B7280]">Ngày hết hạn :</div>
                                <div className="text-[#1F2937]">12/06/2026</div>
                            </div>
                        </div>
                        <div className="font-bold text-sm leading-5 text-[#1FAEEB]">200.000 VNĐ</div>
                    </div>
                </div>
                <div
                    className="rounded-lg border border-[#EFF6FF] p-3"
                    style={{ boxShadow: "0px 0px 8px 0px #00000026" }}
                >
                    <div className="flex gap-1.5 items-center">
                        <div className="flex-center rounded-md bg-[#1FAEEB] text-xs leading-4 w-[37px] h-5 text-[#F9FAFB] font-medium">
                            PRO
                        </div>
                        <div className="text-sm leading-5 text-[#0A0A0A] flex-1">Gói 12 Tháng</div>
                        <div className="rounded-lg bg-[#EFF6FF] font-bold text-sm leading-5 text-[#1FAEEB] w-28 h-7 flex-center">
                            Đã thanh toán
                        </div>
                    </div>
                    <div className="w-full h-px bg-[#F3F4F6] my-3" />
                    <div className="flex items-center">
                        <div className="flex-1">
                            <div className="flex gap-0.5 text-xs leading-4 font-medium">
                                <div className="text-[#6B7280]">Ngày mua :</div>
                                <div className="text-[#1F2937]">12/05/2025</div>
                            </div>
                            <div className="flex gap-0.5 text-xs leading-4 font-medium mt-1.5">
                                <div className="text-[#6B7280]">Ngày hết hạn :</div>
                                <div className="text-[#1F2937]">12/06/2026</div>
                            </div>
                        </div>
                        <div className="font-bold text-sm leading-5 text-[#1FAEEB]">200.000 VNĐ</div>
                    </div>
                </div>
                <div
                    className="rounded-lg border border-[#EFF6FF] p-3"
                    style={{ boxShadow: "0px 0px 8px 0px #00000026" }}
                >
                    <div className="flex gap-1.5 items-center">
                        <div className="flex-center rounded-md bg-[#1FAEEB] text-xs leading-4 w-[37px] h-5 text-[#F9FAFB] font-medium">
                            PRO
                        </div>
                        <div className="text-sm leading-5 text-[#0A0A0A] flex-1">Gói 12 Tháng</div>
                        <div className="rounded-lg bg-[#EFF6FF] font-bold text-sm leading-5 text-[#1FAEEB] w-28 h-7 flex-center">
                            Đã thanh toán
                        </div>
                    </div>
                    <div className="w-full h-px bg-[#F3F4F6] my-3" />
                    <div className="flex items-center">
                        <div className="flex-1">
                            <div className="flex gap-0.5 text-xs leading-4 font-medium">
                                <div className="text-[#6B7280]">Ngày mua :</div>
                                <div className="text-[#1F2937]">12/05/2025</div>
                            </div>
                            <div className="flex gap-0.5 text-xs leading-4 font-medium mt-1.5">
                                <div className="text-[#6B7280]">Ngày hết hạn :</div>
                                <div className="text-[#1F2937]">12/06/2026</div>
                            </div>
                        </div>
                        <div className="font-bold text-sm leading-5 text-[#1FAEEB]">200.000 VNĐ</div>
                    </div>
                </div>
                <div
                    className="rounded-lg border border-[#EFF6FF] p-3"
                    style={{ boxShadow: "0px 0px 8px 0px #00000026" }}
                >
                    <div className="flex gap-1.5 items-center">
                        <div className="flex-center rounded-md bg-[#1FAEEB] text-xs leading-4 w-[37px] h-5 text-[#F9FAFB] font-medium">
                            PRO
                        </div>
                        <div className="text-sm leading-5 text-[#0A0A0A] flex-1">Gói 12 Tháng</div>
                        <div className="rounded-lg bg-[#EFF6FF] font-bold text-sm leading-5 text-[#1FAEEB] w-28 h-7 flex-center">
                            Đã thanh toán
                        </div>
                    </div>
                    <div className="w-full h-px bg-[#F3F4F6] my-3" />
                    <div className="flex items-center">
                        <div className="flex-1">
                            <div className="flex gap-0.5 text-xs leading-4 font-medium">
                                <div className="text-[#6B7280]">Ngày mua :</div>
                                <div className="text-[#1F2937]">12/05/2025</div>
                            </div>
                            <div className="flex gap-0.5 text-xs leading-4 font-medium mt-1.5">
                                <div className="text-[#6B7280]">Ngày hết hạn :</div>
                                <div className="text-[#1F2937]">12/06/2026</div>
                            </div>
                        </div>
                        <div className="font-bold text-sm leading-5 text-[#1FAEEB]">200.000 VNĐ</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryPayment;
