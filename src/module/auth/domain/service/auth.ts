import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { UserDTO, UserSubscriptionDTO, VerifyOTPDTO, VerifyRecaptchaDTO } from "../dto/auth";
import { AuthApi } from "../api/auth";

export class AuthService {
    static USER_KEY = "USER";
    static USER_SUBSCRIPTION_KEY = "USER_SUBSCRIPTION";

    // Local Storage
    static storage = {
        getUser(): UserDTO | undefined {
            if (typeof window === "undefined") return;
            const raw = localStorage.getItem("user");
            return raw ? (JSON.parse(raw) as UserDTO) : undefined;
        },

        getUserSubscription(): UserSubscriptionDTO | undefined {
            if (typeof window === "undefined") return;
            const raw = localStorage.getItem("userSubscription");
            return raw ? (JSON.parse(raw) as UserSubscriptionDTO) : undefined;
        },

        setUser(user: UserDTO) {
            localStorage.setItem("user", JSON.stringify(user));
        },

        setUserSubscription(userSubscription: UserSubscriptionDTO) {
            localStorage.setItem("userSubscription", JSON.stringify(userSubscription));
        },

        setToken(token: string) {
            localStorage.setItem("ACCESS_TOKEN", token);
        },

        clear() {
            localStorage.removeItem("user");
            localStorage.removeItem("userSubscription");
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };

    // Hook get User
    static useUser = () => {
        const userData = AuthService.storage.getUser() ?? null;

        const { data: user, isFetching } = useQuery<UserDTO | null>({
            queryKey: [AuthService.USER_KEY],
            queryFn: () => userData,
            staleTime: Infinity
        });

        return {
            user: user,
            isLogin: !!user,
            isFetching
        };
    };

    static useUserSubscription = () => {
        const userSubscriptionData = AuthService.storage.getUserSubscription() ?? null;

        const { data: userSubscription, isFetching } = useQuery<UserSubscriptionDTO | null>({
            queryKey: [AuthService.USER_SUBSCRIPTION_KEY],
            queryFn: () => userSubscriptionData,
            staleTime: Infinity
        });

        return {
            userSubscription,
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
                AuthService.storage.setUser(data.user);
                AuthService.storage.setUserSubscription(data);
                AuthService.storage.setToken(data.accessToken);

                queryClient.setQueryData([AuthService.USER_KEY], data.user);
                queryClient.setQueryData([AuthService.USER_SUBSCRIPTION_KEY], data);
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
