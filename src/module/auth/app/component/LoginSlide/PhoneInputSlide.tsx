import Slide from "@module/_core/app/component/Slide";
import { forwardRef, useImperativeHandle, useState } from "react";
import PhoneInput from "../LoginForm/PhoneInput";
import { FaChevronLeft } from "react-icons/fa";

interface PhoneInputSlideHandler {
    open: () => void;
    close: () => void;
}

interface PhoneInputSlideProps {
    getOTP: (phoneNumber: string) => Promise<void>;
}
const PhoneInputSlide = forwardRef<PhoneInputSlideHandler, PhoneInputSlideProps>(({ getOTP }, ref) => {
    const [open, setOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        open: () => setOpen(true),
        close: onClose
    }));

    const onClose = () => setOpen(false);

    return (
        <Slide open={open} direction="right" duration={0.2} width="100vw" zIndex={1000} onClose={onClose}>
            <div className="min-h-screen px-4">
                <div className="py-3">
                    <div onClick={onClose} className="size-12 flex-center cursor-pointer">
                        <FaChevronLeft className="text-[#6B7280]" />
                    </div>
                </div>
                <img src="/images/logo.svg" className="h-7" alt="" />
                <PhoneInput getOTP={getOTP} />
            </div>
        </Slide>
    );
});

export default PhoneInputSlide;
