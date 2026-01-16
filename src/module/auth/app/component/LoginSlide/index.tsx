import { showToast } from "@lib/component/Toast/Toast";
import { ToastType } from "@lib/component/Toast/type";
import { ActionRecaptcha } from "@module/auth/domain/config/type/actionRecaptcha";
import { AuthService } from "@module/auth/domain/service/auth";
import { ComponentRef, forwardRef, useImperativeHandle, useRef, useState } from "react";
import PhoneInputSlide from "./PhoneInputSlide";
import OtpInputSlide from "./OtpInputSlide";

interface LoginSlideHandler {
    open: (planId?: number) => void;
}

const LoginSlide = forwardRef<LoginSlideHandler>((_, ref) => {
    const [planId, setPlanId] = useState<number>();

    const phoneInputSlideRef = useRef<ComponentRef<typeof PhoneInputSlide>>(null);
    const otpInputSlideRef = useRef<ComponentRef<typeof OtpInputSlide>>(null);

    const { verifyRecaptchaMutation } = AuthService.useAuthAction();

    useImperativeHandle(ref, () => ({
        open: (planId) => {
            setPlanId(planId);
            phoneInputSlideRef.current?.open();
        }
    }));

    const getOTP = async (phoneNumber: string, onSuccess?: () => void) => {
        if (!process.env.RECAPTCHA_KEY) return;

        if (typeof window !== "undefined" && window.grecaptcha && window.grecaptcha.enterprise) {
            const captchaToken = await grecaptcha.enterprise.execute(process.env.RECAPTCHA_KEY, {
                action: ActionRecaptcha.LOGIN
            });
            verifyRecaptchaMutation.mutate(
                { phoneNumber, captchaToken, userAction: ActionRecaptcha.LOGIN },
                {
                    onSuccess: (data) => {
                        if (!onSuccess) otpInputSlideRef.current?.open(data);
                        else onSuccess();
                    },
                    onError: () => {
                        showToast({
                            type: ToastType.ERROR,
                            description: "Đã xảy ra lỗi vui lòng thử lại"
                        });
                    }
                }
            );
        }
    };

    return (
        <>
            <PhoneInputSlide ref={phoneInputSlideRef} getOTP={getOTP} />
            <OtpInputSlide
                ref={otpInputSlideRef}
                getOTP={getOTP}
                onLoginSuccess={() => phoneInputSlideRef.current?.close()}
                planId={planId}
            />
        </>
    );
});

export default LoginSlide;
