import { ISuccessResponse } from "@module/_core/infras/config/type/apiReponse";
import { OrderStatusEnum } from "../config/type/orderStatus";

export interface CreateOrderDTO {
    planId: number;
    quantity: number;
}

export type CreateOrderResponse = ISuccessResponse<{ vnpPaymentUrl: string }>;

export interface OrderStatusDTO {
    orderId: number;
    userId: number;
    planId: number;
    status: OrderStatusEnum;
}

export type GetOrderStatusDTO = ISuccessResponse<OrderStatusDTO>;
