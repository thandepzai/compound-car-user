import Slide from "@module/_core/app/component/Slide";
import { VerifyRecaptchaData } from "@module/auth/domain/dto/auth";
import { forwardRef, useImperativeHandle, useState } from "react";
import OtpInput from "../LoginForm/OtpInput";
import { FaChevronLeft } from "react-icons/fa";

interface LoginModalHandler {
    open: (recaptchaData: VerifyRecaptchaData) => void;
}

interface OtpInputSlideProps {
    getOTP: (phoneNumber: string) => Promise<void>;
    onLoginSuccess: () => void;
}
const OtpInputSlide = forwardRef<LoginModalHandler, OtpInputSlideProps>(({ getOTP, onLoginSuccess }, ref) => {
    const [open, setOpen] = useState(false);
    const [recaptchaData, setRecaptchaData] = useState<VerifyRecaptchaData>();

    useImperativeHandle(ref, () => ({
        open: (data) => {
            setRecaptchaData(data);
            setOpen(true);
        }
    }));

    const onClose = () => {
        setOpen(false);
        setRecaptchaData(undefined);
    };

    return (
        <Slide open={open} direction="right" duration={0.2} width="100vw" onClose={onClose} zIndex={1100}>
            <div className="min-h-screen px-4">
                <div className="py-3">
                    <div onClick={onClose} className="size-12 flex-center cursor-pointer">
                        <FaChevronLeft className="text-[#6B7280]" />
                    </div>
                </div>
                <img src="/images/logo.svg" className="h-7" alt="" />
                {recaptchaData && (
                    <OtpInput
                        recaptchaData={recaptchaData}
                        onClose={() => {
                            onClose();
                            onLoginSuccess();
                        }}
                        getOTP={getOTP}
                    />
                )}
            </div>
        </Slide>
    );
});

export default OtpInputSlide;
