export type ISuccessResponse<T = any> = {
    data: T;
    meta: {
        code: number;
        message: string;
        statusCode: number;
    };
};

export type IFailResponse = {
    errorMessage: string;
    meta: {
        code: number;
        message: string;
        statusCode: number;
    };
};

export type IResponseData = ISuccessResponse | IFailResponse;
