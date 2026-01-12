import type { NextConfig } from "next";

const env = {
    production: {
        compoundCarHost: "https://phuxeghep.com/api"
    },
    development: {
        compoundCarHost: "https://phuxeghep.com/api"
    }
};

type AppEnv = "production" | "development";

const APP_ENV = process.env.APP_ENV as AppEnv ?? "production";

const nextConfig: NextConfig = {
    /* config options here */
    env: {
        APP_ENV: process.env.APP_ENV,
        RECAPTCHA_KEY: "6LewfDMsAAAAANZdQ7Tmm4kSj0r4D5904KGyCEPl",
        RECAPTCHA_PROJECT_ID: "phuxeghep",
        ...env[APP_ENV]
    }
};

export default nextConfig;
