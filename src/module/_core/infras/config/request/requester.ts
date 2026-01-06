import { delay } from "lib/util/functions";
import Exception from "lib/exception/Exception";
import { AxiosError } from "axios";
import { IFailResponse, IResponseData, ISuccessResponse } from "../type/apiReponse";
import { appRequest } from "./axios";

interface RequesterOptions<Model> {
    requestFunc?: (url: string) => Promise<{ data: IResponseData }>;
    boundedTime?: number;
    ignoreStatus?: boolean;
    handleData?: (data: ISuccessResponse) => Model;
}

// API REQUESTER
// requester(config)(url)
export const requester =
    <Model>({
        requestFunc = (url = "") => appRequest.mapServer.get(url),
        boundedTime = 0,
        ignoreStatus = false,
        handleData = (data: ISuccessResponse) => data as Model
    }: RequesterOptions<Model> = {}) =>
    async (url = "") => {
        const beforeTime = Date.now();
        try {
            const { data } = await requestFunc(url);

            if (Date.now() - beforeTime < 300) await delay(boundedTime);

            if (data?.meta.statusCode === 200 || ignoreStatus) return await handleData(data as ISuccessResponse);
            else {
                const { code, message, statusCode } = (data as IFailResponse).meta;
                throw new Exception(code, message, statusCode);
            }
        } catch (error) {
            if (Date.now() - beforeTime < 300) await delay(boundedTime);
            if (error instanceof AxiosError) {
                // console.log("ERROR", url, JSON.stringify(error.response?.data, null, 4));
                const data: IFailResponse = error.response?.data;
                if (data) throw new Exception(data?.meta?.code, data?.meta?.message, data?.meta?.statusCode);
                else throw new Exception(error.response?.status, error.message, undefined);
            } else if (error instanceof Exception) {
                throw new Exception(error.code, error.message);
            } else throw error;
        }
    };

export const fetcher = requester({
    requestFunc: (url) => appRequest.mapServer.get(url),
    boundedTime: 200
});
