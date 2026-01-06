import Modal from "@module/_core/app/component/Modal";
import { forwardRef, useImperativeHandle, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import PhoneInput from "./PhoneInput";
import OtpInput from "./OtpInput";
import { VerifyRecaptchaData } from "@module/auth/domain/dto/auth";

interface LoginModalHandler {
    open: () => void;
}

const LoginModal = forwardRef<LoginModalHandler>((_, ref) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [recaptchaData, setRecaptchaData] = useState<VerifyRecaptchaData>();

    useImperativeHandle(ref, () => ({
        open: () => setIsModalOpen(true)
    }));

    const onClose = () => {
        setIsModalOpen(false);
        setRecaptchaData(undefined);
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
                <PhoneInput setRecaptchaData={setRecaptchaData} />
            ) : (
                <OtpInput recaptchaData={recaptchaData} onClose={onClose}/>
            )}
        </Modal>
    );
});

export default LoginModal;
