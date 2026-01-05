import { CompoundCarEndpoint } from "@module/_core/infras/config/endpointUrl/compoundCar";

export class AuthEndpoint extends CompoundCarEndpoint {
    static verifyRecaptcha = () => `${CompoundCarEndpoint.base}/auth/otp/verification`;
    static verifyOTP = () => `${CompoundCarEndpoint.base}/auth/web/login`;
}
