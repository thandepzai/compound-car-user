"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const MainHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 70) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mx-auto px-2 h-[50px] tab:h-20 flex justify-between items-center max-w-lapx">
      <div className="text-[#1FAEEB] font-bold text-2xl tab:text-4xl">Logo</div>
      <button className="w-[100px] tab:w-[118px] h-[30px] tab:h-12 rounded-full bg-[#EFF6FF] text-[#2196F3] font-semibold tab:text-lg hover:bg-[#e0ecfa] cursor-pointer active:bg-[#EFF6FF]">
        Đăng nhập
      </button>
    </div>
  );
};0

export default MainHeader;
