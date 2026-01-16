import { PlanApi } from "../api/home";
import { IFetcherOptions, useFetcher } from "@module/_core/infras/hook/useFetcher";
import { PlanDTO } from "../dto/home";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export class HomeService {
    static PLAN_KEY = "PLANS";
    static CHECKOUT_PLAN_KEY = "CHECKOUT_PLAN";

    static usePlans = ({ fetcherOptions }: { fetcherOptions?: IFetcherOptions<{ plans: PlanDTO[] }> }) => {
        const { data, isPending, isFetching, isError, error } = useFetcher(
            [HomeService.PLAN_KEY],
            () => PlanApi.getPlans(),
            fetcherOptions
        );

        return {
            data,
            isPending,
            isFetching,
            isError,
            error
        };
    };

    static useDetailPlan = ({
        planId,
        fetcherOptions
    }: {
        planId: number;
        fetcherOptions?: IFetcherOptions<{ plan: PlanDTO }>;
    }) => {
        const { data, isPending, isFetching, isError, error } = useFetcher(
            [HomeService.PLAN_KEY, planId],
            () => PlanApi.getPlan(planId),
            fetcherOptions
        );

        return {
            data,
            isPending,
            isFetching,
            isError,
            error
        };
    };

    static useCheckoutPlan = () => {
        return useQuery<number | null>({
            queryKey: [HomeService.CHECKOUT_PLAN_KEY],
            queryFn: () => null,
            staleTime: Infinity,
            enabled: false
        });
    };

    static usePlanAction = () => {
        const queryClient = useQueryClient();

        const setCheckoutPlanId = (planId: number) => {
            queryClient.setQueryData([HomeService.CHECKOUT_PLAN_KEY], planId);
        };

        return { setCheckoutPlanId };
    };
}
