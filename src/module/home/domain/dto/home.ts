import { ISuccessResponse } from "../../../_core/infras/config/type/apiReponse";

export interface PlanDTO {
    id: number;
    name: string;
    type: string;
    description: string;
    duration: number;
    durationType: string;
    price: number;
    currency: string;
    status: string;
}

export type GetPlansDTO = ISuccessResponse<{ plans: PlanDTO[] }>;

export type GetOnePlanDTO = ISuccessResponse<{ plan: PlanDTO }>;
