import { requester } from "@module/_core/infras/config/request/requester";
import { AuthEndpoint } from "../../infras/config/endpointUrl";
import {
    VerifyRecaptchaDTO,
    VerifyOTPDTO,
    VerifyRecaptchaResponseDTO,
    VerifyOTPResponseDTO,
    VerifyRecaptchaData,
    UserSubscriptionDTO
} from "../dto/auth";
import { appRequest } from "@module/_core/infras/config/request/axios";

export class AuthApi {
    static async verifyRecaptcha(verifyRecaptcha: VerifyRecaptchaDTO) {
        return requester<VerifyRecaptchaData>({
            requestFunc: () => appRequest.mapServer.post(AuthEndpoint.verifyRecaptcha(), verifyRecaptcha),
            handleData: (data: VerifyRecaptchaResponseDTO) => data.data
        })();
    }

    static async verifyOTP(verifyOTP: VerifyOTPDTO) {
        return requester<UserSubscriptionDTO>({
            requestFunc: () => appRequest.mapServer.post(AuthEndpoint.verifyOTP(), verifyOTP),
            handleData: (data: VerifyOTPResponseDTO) => data.data
        })();
    }
}
