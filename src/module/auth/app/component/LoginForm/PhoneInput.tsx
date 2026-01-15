import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

interface PhoneInputProps {
    getOTP: (phoneNumber: string) => Promise<void>;
}
const PhoneInput = ({ getOTP }: PhoneInputProps) => {
    const [phone, setPhone] = useState("");
    const [focus, setFocus] = useState(false);
    const [error, setError] = useState("");

    const onSubmit = () => {
        const phoneRegex = /^[0-9]{9,11}$/;

        if (!phoneRegex.test(phone)) {
            setError("Số điện thoại không hợp lệ");
            return;
        }

        getOTP(phone);
    };

    return (
        <div className="grid tab:grid-cols-2 max-tab:gap-3 mt-4">
            <div>
                <div className="font-bold text-2xl leading-8 text-[#1FAEEB]">Đăng nhập tài khoản</div>
                <div className="mt-3 text-[#4B5563]">Sử dụng tài khoản hỗ trợ tài xế </div>
            </div>
            <div>
                <div
                    className={clsx(
                        "flex h-12 rounded-lg border overflow-hidden",
                        !!error ? "border-red-500" : focus ? "border-[#1FAEEB]" : "border-[#D1D5DB]"
                    )}
                >
                    <div className="border-r border-[#D1D5DB] bg-[#F9FAFB] p-3 flex gap-2 items-center">
                        <img src="/images/vietnamphone.svg" alt="" className="w-8" />
                        <span className="text-sm text-[#1F2937]">(+84)</span>
                    </div>
                    <input
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]*"
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
                <div className="text-sm leading-5 text-[#4B5563]">
                    Trang web này được bảo vệ bởi reCAPTCHA và{" "}
                    <Link href="https://policies.google.com/privacy" className="text-[#1FAEEB] hover:opacity-85">
                        Chính sách quyền riêng tư
                    </Link>{" "}
                    và{" "}
                    <Link href="https://policies.google.com/terms" className="text-[#1FAEEB] hover:opacity-85">
                        Điều khoản dịch vụ
                    </Link>{" "}
                    của Google được áp dụng.
                </div>
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
    );
};

export default PhoneInput;
