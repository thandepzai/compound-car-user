import clsx from "clsx";
import { ChangeEvent, useRef, useState } from "react";
import { IoMdRemove } from "react-icons/io";

interface OtpInputProps {
    phone: string;
}
const OtpInput = ({ phone }: OtpInputProps) => {
    const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    const onChange = (index: number, value: string) => {
        const digit = value.slice(-1);

        if (!/^\d?$/.test(digit)) return;

        setOtp((prev) => {
            const next = [...prev];
            next[index] = digit;
            return next;
        });

        if (digit && index < inputsRef.current.length - 1) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const onKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace") {
            e.preventDefault();

            setOtp((prev) => {
                const next = [...prev];

                if (next[index]) {
                    next[index] = "";
                } else if (index > 0) {
                    next[index - 1] = "";
                    inputsRef.current[index - 1]?.focus();
                }

                return next;
            });
        }
    };

    const onSubmit = () => {};

    return (
        <div className="grid tab:grid-cols-2 max-tab:gap-3 mt-4">
            <div>
                <div className="font-bold text-2xl leading-8 text-[#1FAEEB]">Nhập mã OTP</div>
                <div className="mt-3 text-[#4B5563]">Để giữ an toàn cho tài khoản của bạn.</div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="text-[#4B5563]">
                    Chúng tôi vừa gửi 1 tin nhắn văn bản gồm mã xác thực 6 chữ số đến {"*".repeat(phone.length - 3)}
                    {phone.slice(-3)} .
                </div>
                <div className="h-10 flex items-center gap-4">
                    <div className="w-20.5 h-10.5 grid grid-cols-2 border rounded-lg border-[#E5E7EB]">
                        <input
                            ref={(el) => {
                                inputsRef.current[0] = el;
                            }}
                            onChange={(e) => onChange(0, e.target.value)}
                            onKeyDown={(e) => onKeyDown(0, e)}
                            value={otp[0]}
                            type="text"
                            name="input-1"
                            id="input-1"
                            className="text-xs leading-4 border-r border-[#E5E7EB] outline-none!"
                            style={{ paddingLeft: otp[0] === "" ? "18px" : "16px" }}
                        />
                        <input
                            ref={(el) => {
                                inputsRef.current[1] = el;
                            }}
                            onChange={(e) => onChange(1, e.target.value)}
                            onKeyDown={(e) => onKeyDown(1, e)}
                            value={otp[1]}
                            type="text"
                            name="input-2"
                            id="input-2"
                            className="text-xs leading-4 outline-none!"
                            style={{ paddingLeft: otp[1] === "" ? "18px" : "16px" }}
                        />
                    </div>
                    <IoMdRemove className="w-3 h-px bg-[#D1D5DB]" />
                    <div className="w-20.5 h-10.5 grid grid-cols-2 border rounded-lg border-[#E5E7EB]">
                        <input
                            ref={(el) => {
                                inputsRef.current[2] = el;
                            }}
                            onChange={(e) => onChange(2, e.target.value)}
                            onKeyDown={(e) => onKeyDown(2, e)}
                            value={otp[2]}
                            type="text"
                            name="input-3"
                            id="input-3"
                            className="text-xs leading-4 border-r border-[#E5E7EB] outline-none!"
                            style={{ paddingLeft: otp[2] === "" ? "18px" : "16px" }}
                        />
                        <input
                            ref={(el) => {
                                inputsRef.current[3] = el;
                            }}
                            onChange={(e) => onChange(3, e.target.value)}
                            onKeyDown={(e) => onKeyDown(3, e)}
                            value={otp[3]}
                            type="text"
                            name="input-4"
                            id="input-4"
                            className="text-xs leading-4 outline-none!"
                            style={{ paddingLeft: otp[3] === "" ? "18px" : "16px" }}
                        />
                    </div>
                    <IoMdRemove className="w-3 h-px bg-[#D1D5DB]" />
                    <div className="w-20.5 h-10.5 grid grid-cols-2 border rounded-lg border-[#E5E7EB]">
                        <input
                            ref={(el) => {
                                inputsRef.current[4] = el;
                            }}
                            onChange={(e) => onChange(4, e.target.value)}
                            onKeyDown={(e) => onKeyDown(4, e)}
                            value={otp[4]}
                            type="text"
                            name="input-5"
                            id="input-5"
                            className="text-xs leading-4 border-r border-[#E5E7EB] outline-none!"
                            style={{ paddingLeft: otp[4] === "" ? "18px" : "16px" }}
                        />
                        <input
                            ref={(el) => {
                                inputsRef.current[5] = el;
                            }}
                            onChange={(e) => onChange(5, e.target.value)}
                            onKeyDown={(e) => onKeyDown(5, e)}
                            value={otp[5]}
                            type="text"
                            name="input-6"
                            id="input-6"
                            className="text-xs leading-4 outline-none! pl-4"
                            style={{ paddingLeft: otp[5] === "" ? "18px" : "16px" }}
                        />
                    </div>
                </div>
                <div className="font-semibold text-[#2196F3] leading-6 text-center cursor-pointer select-none hover:underline active:opacity-85">
                    Gửi lại mã (0s)
                </div>
                <button
                    onClick={onSubmit}
                    className={clsx(
                        "h-12 flex-center text-white text-lg font-semibold w-full mt-8 rounded-lg",
                        !true
                            ? "bg-[#D4D4D4] pointer-events-none"
                            : "bg-[#1FAEEB] cursor-pointer hover:opacity-90 active:opacity-85"
                    )}
                >
                    Đăng nhập
                </button>
            </div>
        </div>
    );
};

export default OtpInput;
