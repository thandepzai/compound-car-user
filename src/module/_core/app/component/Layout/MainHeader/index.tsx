"use client";
import LoginModal from "@module/auth/app/view/LoginModal";
import { ComponentRef, useRef } from "react";

const MainHeader = () => {
  const loginModalRef = useRef<ComponentRef<typeof LoginModal>>(null);

  return (
    <header
      className={`
        sticky top-0 left-0 w-full z-50
        transition-all duration-300 bg-white border border-[#F9FAFB]
      `}
    >
      <div className="mx-auto px-[15px] tab:px-6 lap:px-12 lapx:px-[15px] h-20 flex justify-between items-center max-w-[1210px]">
        <div className="text-[#1FAEEB] font-bold text-4xl">Logo</div>

        <button
          onClick={() => loginModalRef.current?.open()}
          className="w-[118px] h-12 rounded-full bg-[#EFF6FF] text-[#2196F3] font-semibold text-lg leading-6 hover:bg-[#e0ecfa] cursor-pointer active:bg-[#EFF6FF]"
        >
          Đăng nhập
        </button>
      </div>

      <LoginModal ref={loginModalRef} />
    </header>
  );
};

export default MainHeader;
