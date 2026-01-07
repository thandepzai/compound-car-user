import { useMutation, useQueryClient } from "@tanstack/react-query";
import { VerifyOTPDTO, VerifyRecaptchaDTO } from "../dto/auth";
import { AuthApi } from "../api/auth";
import { MeService } from "./me";

export class AuthService {
    static AUTH_KEY = "AUTH_KEY";

    static useAuthAction = () => {
        const queryClient = useQueryClient();
        const meAction = MeService.useMeAction();

        const verifyRecaptchaMutation = useMutation({
            mutationFn: (verifyRecaptcha: VerifyRecaptchaDTO) => AuthApi.verifyRecaptcha(verifyRecaptcha)
        });

        const verifyOTPMutation = useMutation({
            mutationFn: (verifyOTP: VerifyOTPDTO) => AuthApi.verifyOTP(verifyOTP),
            onSuccess: (data) => {
                localStorage.setItem("user", JSON.stringify(data.user));
                localStorage.setItem("ACCESS_TOKEN", data.accessToken);
                queryClient.setQueryData([this.AUTH_KEY], data);
                meAction.mutateLocal(data.user);
            }
        });

        return {
            verifyRecaptchaMutation,
            verifyOTPMutation
        };
    };

    static logout = () => {
        location.replace("/");
        localStorage.removeItem("user");
        localStorage.removeItem("ACCESS_TOKEN");
    };
}
