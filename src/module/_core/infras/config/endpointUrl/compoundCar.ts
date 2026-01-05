import { cleanObject } from "lib/util/functions";

const BASE_URL = process.env.compoundCarHost;
// console.log("\n\nBASE_URL\n\n", BASE_URL);

export class CompoundCarEndpoint {
    static base = BASE_URL;
    static baseAdmin = BASE_URL + "/admin";

    // constructor(baseUrl: string) {
    //     this.base = baseUrl;
    //     this.baseAdmin = baseUrl + "/admin";
    // }

    static extractQuery = (query: object) => {
        const queryString = Object.entries(cleanObject(query, [undefined, ""]))
            .map(([key, value]) => key + "=" + value)
            .join("&");

        return queryString;
    };
}
