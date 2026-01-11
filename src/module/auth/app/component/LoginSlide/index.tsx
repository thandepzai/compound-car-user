import { showToast } from "@lib/component/Toast/Toast";
import { ToastType } from "@lib/component/Toast/type";
import Slide from "@module/_core/app/component/Slide";
import { ActionRecaptcha } from "@module/auth/domain/config/type/actionRecaptcha";
import { VerifyRecaptchaData } from "@module/auth/domain/dto/auth";
import { AuthService } from "@module/auth/domain/service/auth";
import { forwardRef, useImperativeHandle, useState } from "react";
import PhoneInput from "../LoginForm/PhoneInput";
import OtpInput from "../LoginForm/OtpInput";
import { FaChevronLeft } from "react-icons/fa";

interface LoginModalHandler {
    open: () => void;
}

const LoginSlide = forwardRef<LoginModalHandler>((_, ref) => {
    const [open, setOpen] = useState(false);
    const [recaptchaData, setRecaptchaData] = useState<VerifyRecaptchaData>();

    const { verifyRecaptchaMutation } = AuthService.useAuthAction();

    useImperativeHandle(ref, () => ({
        open: () => setOpen(true)
    }));

    const onClose = () => {
        setOpen(false);
        setRecaptchaData(undefined);
    };

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
                        setRecaptchaData(data);
                        onSuccess?.();
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
        <Slide open={open} direction="right" duration={0.2} width="100vw">
            <div className="min-h-screen px-4">
                <div className="py-3">
                    <div onClick={onClose} className="size-12 flex-center cursor-pointer">
                        <FaChevronLeft className="text-[#6B7280]" />
                    </div>
                </div>
                <img src="/images/logo.svg" className="h-7" alt="" />
                {!recaptchaData ? (
                    <PhoneInput getOTP={getOTP} />
                ) : (
                    <OtpInput recaptchaData={recaptchaData} onClose={onClose} getOTP={getOTP} />
                )}
            </div>
        </Slide>
    );
});

export default LoginSlide;
