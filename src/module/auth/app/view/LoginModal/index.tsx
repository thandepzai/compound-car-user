import Modal from "@module/_core/app/component/Modal";
import clsx from "clsx";
import { forwardRef, useImperativeHandle, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

interface LoginModalHandler {
    open: () => void;
}

const LoginModal = forwardRef<LoginModalHandler>((_, ref) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [phone, setPhone] = useState("");
    const [focus, setFocus] = useState(false);
    const [error, setError] = useState("");

    useImperativeHandle(ref, () => ({
        open: () => setIsModalOpen(true)
    }));

    const onClose = () => {
        setIsModalOpen(false);
        setPhone("");
    };

    const onSubmit = () => {
        const phoneRegex = /^[0-9]{9,11}$/;

        if (!phoneRegex.test(phone)) {
            setError("Số điện thoại không hợp lệ");
            return;
        }

        setError("");
        console.log("Submit OK:", phone);
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
            <div className="grid tab:grid-cols-2 max-tab:gap-3 mt-4">
                <div>
                    <div className="font-medium text-2xl leading-8 text-[#1FAEEB]">Đăng nhập tài khoản</div>
                    <div className="mt-3 text-[#4B5563]">Sử dụng tài khoản hỗ trợ tài xế </div>
                </div>
                <div>
                    <div
                        className={clsx(
                            "flex h-12 rounded-lg border  overflow-hidden",
                            !!error ? "border-red-500" : focus ? "border-[#1FAEEB]" : "border-[#D1D5DB]"
                        )}
                    >
                        <div className="border-r border-[#D1D5DB] bg-[#F9FAFB] p-3 flex gap-2 items-center">
                            <img src="/images/vietnamphone.svg" alt="" className="w-8" />
                            <span className="text-sm text-[#1F2937]">(+84)</span>
                        </div>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value ?? "");
                                setError("");
                            }}
                            onFocus={() => setFocus(true)}
                            onBlur={() => setFocus(false)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") onSubmit();
                            }}
                            className="flex-1 p-4 border-none! outline-none!"
                            placeholder="Số điện thoại"
                        />
                    </div>
                    {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
                    <div className="my-4 h-px w-full bg-[#D1D5DB]" />
                    <div className="h-20 bg-gray-200"></div>
                    <button
                        onClick={onSubmit}
                        className={clsx(
                            "h-12 flex-center text-white text-lg font-semibold w-full mt-8 rounded-lg",
                            !phone
                                ? "bg-[#D4D4D4] pointer-events-none"
                                : "bg-[#1FAEEB] cursor-pointer hover:opacity-90 active:opacity-85"
                        )}
                    >
                        Tiếp tục
                    </button>
                </div>
            </div>
        </Modal>
    );
});

export default LoginModal;
