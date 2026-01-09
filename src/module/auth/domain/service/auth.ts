import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { UserDTO, VerifyOTPDTO, VerifyRecaptchaDTO } from "../dto/auth";
import { AuthApi } from "../api/auth";

export class AuthService {
    static USER_KEY = "USER";

    // Local Storage
    static storage = {
        getUser(): UserDTO | undefined {
            if (typeof window === "undefined") return;
            const raw = localStorage.getItem("user");
            return raw ? (JSON.parse(raw) as UserDTO) : undefined;
        },

        setUser(user: UserDTO) {
            localStorage.setItem("user", JSON.stringify(user));
        },

        setToken(token: string) {
            localStorage.setItem("ACCESS_TOKEN", token);
        },

        clear() {
            localStorage.removeItem("user");
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };

    // Hook get User
    static useUser = () => {
        const { data: user, isFetching } = useQuery<UserDTO | undefined>({
            queryKey: [AuthService.USER_KEY],
            queryFn: () => AuthService.storage.getUser(),
            staleTime: Infinity
        });

        return {
            user,
            isLogin: !!user,
            isFetching
        };
    };

    // Auth Actions
    static useAuthAction = () => {
        const queryClient = useQueryClient();

        const verifyRecaptchaMutation = useMutation({
            mutationFn: (payload: VerifyRecaptchaDTO) => AuthApi.verifyRecaptcha(payload)
        });

        const verifyOTPMutation = useMutation({
            mutationFn: (payload: VerifyOTPDTO) => AuthApi.verifyOTP(payload),

            onSuccess: (data) => {
                AuthService.storage.setToken(data.accessToken);
                AuthService.storage.setUser(data.user);
                queryClient.setQueryData([AuthService.USER_KEY], data.user);
            }
        });

        return {
            verifyRecaptchaMutation,
            verifyOTPMutation
        };
    };

    // Logout
    static logout = () => {
        location.replace("/");
        AuthService.storage.clear();
    };
}
