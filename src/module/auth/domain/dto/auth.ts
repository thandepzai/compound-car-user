import { ISuccessResponse } from "@module/_core/infras/config/type/apiReponse";
import { ActionRecaptcha } from "../config/type/actionRecaptcha";
import { StatusType } from "../config/type/status";

export interface VerifyRecaptchaDTO {
    phoneNumber: string;
    userAction: ActionRecaptcha;
    captchaToken: string;
}

export interface VerifyRecaptchaData {
    sessionId: string;
    userId: number;
    phoneNumber: string;
    expiresAt: string;
    attempts: number;
}

export type VerifyRecaptchaResponseDTO = ISuccessResponse<VerifyRecaptchaData>;

export interface VerifyOTPDTO {
    phoneNumber: string;
    otpCode: string;
    sessionId: string;
}

export interface UserSubscriptionDTO {
    user: UserDTO;
    plan: PlanDTO;
    subscription: SubscriptionDTO;
    accessToken: string;
    refreshToken: string;
}

export type VerifyOTPResponseDTO = ISuccessResponse<UserSubscriptionDTO>;

export interface UserDTO {
    id: number;
    phoneNumber: string;
    fullName: string;
    createdAt: string;
    updatedAt: string;
    data: string;
    version: number;
    status: StatusType;
}

export interface PlanDTO {
    id: number;
    name: string;
    description: string;
    type: "FREE_TRIAL";
    price: number;
    currency: "VND";
    duration: number;
    durationType: "DAY";
    createdAt: string;
    updatedAt: string;
    data: string;
    version: number;
    status: StatusType;
}

export interface SubscriptionDTO {
    id: number;
    userId: number;
    phoneNumber: string;
    planId: number;
    startDate: string;
    endDate: string;
    createdAt: string;
    updatedAt: string;
    data: string;
    version: number;
    status: StatusType;
}
