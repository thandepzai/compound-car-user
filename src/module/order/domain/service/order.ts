import { useFetcher } from "@module/_core/infras/hook/useFetcher";
import { useMutation } from "@tanstack/react-query";
import { CreateOrderDTO, OrderStatusDTO } from "../dto/order";
import { OrderApi } from "../api/order";

interface UseOrderStatus {
    orderId: string;
    enabled: boolean;
}

export class OrderService {
    static ORDER_KEY = "ORDER";

    static useOrderStatus = ({ orderId, enabled }: UseOrderStatus) => {
        const { data } = useFetcher<OrderStatusDTO>([OrderService.ORDER_KEY, orderId], () => OrderApi.getOrderStatus(orderId), {
            enabled
        });

        const getOrderStatusMutation = useMutation({
            mutationFn: (orderId: string) => OrderApi.getOrderStatus(orderId)
        });

        return { data, getOrderStatusMutation };
    };

    static useOrderAction = () => {
        const createOrderMutation = useMutation({
            mutationFn: (createOrder: CreateOrderDTO) => OrderApi.createOrder(createOrder)
        });

        return { createOrderMutation };
    };
}
