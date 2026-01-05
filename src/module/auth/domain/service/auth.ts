import { useMutation } from "@tanstack/react-query";
import { AuthApi } from "../api/auth";
import { VerifyOTPDTO, VerifyRecaptchaDTO } from "../dto/auth";

export class AuthService {
    static AUTH_KEY = "AUTH_KEY";

    static useAuthAction = () => {
        const verifyRecaptchaMutation = useMutation({
            mutationFn: (verifyRecaptcha: VerifyRecaptchaDTO) => AuthApi.verifyRecaptcha(verifyRecaptcha)
        });

        const verifyOTPMutation = useMutation({
            mutationFn: (verifyOTP: VerifyOTPDTO) => AuthApi.verifyOTP(verifyOTP)
        });

        return {
            verifyRecaptchaMutation,
            verifyOTPMutation
        };
    };
}
