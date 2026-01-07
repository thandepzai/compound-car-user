import { useGlobalState } from "@lib/hook/useGlobalState";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserDTO, VerifyOTPDTO, VerifyRecaptchaDTO } from "../dto/auth";
import { AuthApi } from "../api/auth";
import { MeService } from "./me";
import { useIsomorphicLayoutEffect } from "@lib/hook/useIsomorphicLayoutEffect";

export interface AuthDTO {
    user: UserDTO;
    accessToken: string;
}

export class AuthService {
    static AUTH_KEY = "AUTH_KEY";

    static useInitAuth = () => {
        const { mutate } = this.useAuth(() => 0);
        // const { verifyAuthMutation } = this.useAuthAction();

        useIsomorphicLayoutEffect(() => {
            const auth = this.getAuth();
            if (auth) {
                mutate(auth);
                // verifyAuthMutation.mutate();
            }
        }, []);
    };

    static useAuth = (select?: (state: AuthDTO | null) => any) => {
        const { data, mutate } = useGlobalState<AuthDTO | null>([this.AUTH_KEY], {
            initialData: null,
            notifyOnChangeProps: ["data", "isPending"],
            select
        });

        return {
            isLogin: !!data?.user,
            user: data?.user,
            accessToken: data?.accessToken,
            mutate
        };
    };

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

    static getAuth = () => {
        if (typeof window === "undefined") return;
        const user = MeService.getLocalUser();
        const accessToken = localStorage.getItem("ACCESS_TOKEN");
        if (user && accessToken) {
            return { user, accessToken };
        } else return null;
    };

    static logout = () => {
        location.replace("/");
        localStorage.removeItem("user");
        localStorage.removeItem("ACCESS_TOKEN");
    };
}
