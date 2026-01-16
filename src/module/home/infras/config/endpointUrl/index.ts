import { CompoundCarEndpoint } from "@module/_core/infras/config/endpointUrl/compoundCar";

export class HomeEndpoint extends CompoundCarEndpoint {
    static getPlans = () => `${CompoundCarEndpoint.base}/v1/plans`;
    static getPlan = (planId: number) => `${CompoundCarEndpoint.base}/v1/plan/${planId}`;
}
