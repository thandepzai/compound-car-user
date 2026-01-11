import { requester } from "@module/_core/infras/config/request/requester";
import { CreateOrderDTO, CreateOrderResponse, GetOrderStatusDTO } from "../dto/order";
import { OrderEndpoint } from "@module/order/infras/config/endpointUrl";
import { appRequest } from "@module/_core/infras/config/request/axios";

export class OrderApi {
    static async createOrder(createOrder: CreateOrderDTO) {
        return requester<string>({
            requestFunc: () => appRequest.mapServer.post(OrderEndpoint.createOrder(), createOrder),
            handleData: (data: CreateOrderResponse) => data.data.vnpPaymentUrl
        })();
    }

    static async getOrderStatus(orderId: string) {
        return requester({
            requestFunc: () => appRequest.mapServer.get(OrderEndpoint.getOrderStatus(orderId)),
            handleData: (data: GetOrderStatusDTO) => data.data
        })();
    }
}
