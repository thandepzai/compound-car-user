"use client";

import Script from "next/script";

type RecaptchaProviderProps = {
    siteKey: string;
    strategy?: "beforeInteractive" | "afterInteractive" | "lazyOnload";
    enterprise?: boolean; // true = enterprise, false = classic
};

const RecaptchaProvider = ({ siteKey, strategy = "afterInteractive", enterprise = true }: RecaptchaProviderProps) => {
    const baseUrl = enterprise
        ? "https://www.google.com/recaptcha/enterprise.js"
        : "https://www.google.com/recaptcha/api.js";

    return <Script id="recaptcha-script" src={`${baseUrl}?render=${siteKey}`} strategy={strategy} />;
};

export default RecaptchaProvider;
