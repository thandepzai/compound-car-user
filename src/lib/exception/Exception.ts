class Exception extends Error {
    message: string;
    code: number;
    statusCode: number;

    static DEFAULT_MESSAGE = "Unknown Error";

    constructor(code = 401, message = Exception.DEFAULT_MESSAGE, statusCode = 400001) {
        super(message);
        this.code = code;
        this.message = message;
        this.statusCode = statusCode;
    }
}

export default Exception;
