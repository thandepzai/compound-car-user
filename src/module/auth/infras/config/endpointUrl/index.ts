import { CompoundCarEndpoint } from "@module/_core/infras/config/endpointUrl/compoundCar";

export class AuthEndpoint extends CompoundCarEndpoint {
    static refreshToken = () => `${CompoundCarEndpoint.base}/v1/refresh-token`;
    static verifyRecaptcha = () => `${CompoundCarEndpoint.base}/v1/auth/web/login`;
    static verifyOTP = () => `${CompoundCarEndpoint.base}/v1/auth/otp/verification`;
}
