"use client";

import { useParams } from "next/navigation";
import FailComponent from "./Fail";
import SuccessComponent from "./Success";
import { OrderService } from "@module/order/domain/service/order";
import { useEffect, useRef, useState } from "react";
import { OrderStatusEnum } from "@module/order/domain/config/type/orderStatus";
import { useQueryClient } from "@tanstack/react-query";

const CheckoutStatusView = () => {
    const { orderId } = useParams() || {};

    const [orderStatus, setOrderStatus] = useState(OrderStatusEnum.PAYMENT_PROCESSING);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const { data, getOrderStatusMutation } = OrderService.useOrderStatus({
        orderId: String(orderId),
        enabled: !!orderId
    });

    useEffect(() => {
        if (!data) return;

        setOrderStatus(data.status);

        // Nếu đang processing → start polling
        if (data.status === OrderStatusEnum.PAYMENT_PROCESSING) {
            if (!intervalRef.current) {
                intervalRef.current = setInterval(() => {
                    getOrderStatusMutation.mutate(String(orderId));
                }, 2000);
            }

            if (!timeoutRef.current) {
                timeoutRef.current = setTimeout(() => {
                    clearInterval(intervalRef.current!);
                    intervalRef.current = null;
                    setOrderStatus(OrderStatusEnum.PAYMENT_FAILED);
                }, 60_000);
            }
        } else {
            clearInterval(intervalRef.current!);
            clearTimeout(timeoutRef.current!);
            intervalRef.current = null;
            timeoutRef.current = null;
        }

        return () => {
            clearInterval(intervalRef.current!);
            clearTimeout(timeoutRef.current!);
        };
    }, [data, orderId]);

    return (
        <div className="bg-[#f3f4f6] min-h-[calc(100vh-82px)] tab:pt-3">
            {orderStatus === OrderStatusEnum.INIT && <>Đang khởi tạo</>}
            {orderStatus === OrderStatusEnum.PAYMENT_PROCESSING && <>Đang thanh toán</>}
            {orderStatus === OrderStatusEnum.SUCCESS && <SuccessComponent />}
            {orderStatus === OrderStatusEnum.PAYMENT_FAILED && <FailComponent />}
        </div>
    );
};

export default CheckoutStatusView;
