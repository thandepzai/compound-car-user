import Modal from "@module/_core/app/component/Modal";
import { forwardRef, useImperativeHandle, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import PhoneInput from "../LoginForm/PhoneInput";
import OtpInput from "../LoginForm/OtpInput";
import { VerifyRecaptchaData } from "@module/auth/domain/dto/auth";
import { ActionRecaptcha } from "@module/auth/domain/config/type/actionRecaptcha";
import { AuthService } from "@module/auth/domain/service/auth";
import { showToast } from "@lib/component/Toast/Toast";
import { ToastType } from "@lib/component/Toast/type";

interface LoginModalHandler {
    open: () => void;
}

const LoginModal = forwardRef<LoginModalHandler>((_, ref) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [recaptchaData, setRecaptchaData] = useState<VerifyRecaptchaData>();

    const { verifyRecaptchaMutation } = AuthService.useAuthAction();

    useImperativeHandle(ref, () => ({
        open: () => setIsModalOpen(true)
    }));

    const onClose = () => {
        setIsModalOpen(false);
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
        <Modal open={isModalOpen} className="w-[700px] mx-4">
            <div className="flex justify-between">
                <div className="font-bold text-lg text-[#1FAEEB]">Logo</div>
                <div
                    onClick={onClose}
                    className="size-6 rounded hover:bg-gray-100 active:bg-gray-200 flex-center cursor-pointer"
                >
                    <IoCloseSharp className="size-6" />
                </div>
            </div>
            {!recaptchaData ? (
                <PhoneInput getOTP={getOTP} />
            ) : (
                <OtpInput recaptchaData={recaptchaData} onClose={onClose} getOTP={getOTP} />
            )}
        </Modal>
    );
});

export default LoginModal;
