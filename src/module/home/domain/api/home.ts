import { requester } from "@module/_core/infras/config/request/requester";
import { appRequest } from "@module/_core/infras/config/request/axios";
import { HomeEndpoint } from "@module/home/infras/config/endpointUrl";
import { GetOnePlanDTO, GetPlansDTO, PlanDTO } from "../dto/home";

export class PlanApi {
    static async getPlans() {
        return requester<{ plans: PlanDTO[] }>({
            requestFunc: () => appRequest.mapServer.post(HomeEndpoint.getPlans()),
            handleData: (data: GetPlansDTO) => data.data
        })();
    }

    static async getPlan(planId: number) {
        return requester<{ plan: PlanDTO }>({
            requestFunc: () => appRequest.mapServer.post(HomeEndpoint.getPlan(planId)),
            handleData: (data: GetOnePlanDTO) => data.data
        })();
    }
}
