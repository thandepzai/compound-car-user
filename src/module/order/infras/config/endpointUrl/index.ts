import { CompoundCarEndpoint } from "@module/_core/infras/config/endpointUrl/compoundCar";

export class OrderEndpoint extends CompoundCarEndpoint {
    static createOrder = () => `${CompoundCarEndpoint.base}/v1/orders`;
    static getOrderStatus = (orderId: string) => `${CompoundCarEndpoint.base}/v1/orders/${orderId}/status`;
}
