"use client";

import Banner from "./Banner";
import GuideSection from "./GuideSection";
import ListService from "./ListService";

const HomeView = () => {
  return (
    <div className="mx-auto max-w-[1210px]">
      <Banner />
      <ListService />
      <GuideSection />
      <div className="mt-20 max-w-lap mx-auto flex gap-16 items-center">
        <div className="size-[400px] bg-blue-400 rounded-lg"></div>
        <div className="flex flex-col gap-4 flex-1">
          <div className="text-[#1FAEEB] font-medium text-lg leading-7">
            Video Hướng Dẫn
          </div>
          <div className="font-bold text-3xl leading-9">
            Hỗ trợ tài xế tối ưu trải nghiệm ứng dụng !
          </div>
          <div className="text-[#6B7280] text-lg leading-7">
            Ứng dụng duy nhất tại Việt Nam, mang đến giải pháp hỗ trợ tài xế
            nhanh chóng, tiện lợi và tối ưu hóa năng suất, đảm bảo không bỏ lỡ
            bất kỳ khách hàng nào.
          </div>
          <div className="mt-8 flex gap-8">
            <div className="w-1/2">
              <div className="font-bold text-3xl leading-9">5 triệu +</div>
              <div className="mt-5 text-[#6B7280] leading-6">
                Tài xế dùng hàng tháng
              </div>
            </div>
            <div className="w-px h-20 bg-[#D1D5DB]" />
            <div className="w-1/2">
              <div className="font-bold text-3xl leading-9">8 triệu</div>
              <div className="mt-5 text-[#6B7280] leading-6">
                Tài khoản tài xế đã đăng ký
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-20 items-center justify-center">
        <div>
          <div className="text-6xl font-bold leading-18">Tải ứng dụng</div>
          <div className="mt-2 text-[#374151] text-lg leading-7">
            để trải nghiệm các dịch vụ của chúng tôi
          </div>
          <div className="mt-5 flex items-center gap-5">
            <img
              src="./images/home/qr.png"
              alt=""
              className="size-[150px] min-w-[150px]"
            />
            <div>
              <img
                src="./images/home/google-play-download.png"
                alt=""
                className="w-[150px] min-w-[150px]"
              />
              <div className="flex gap-3 mt-3">
                <img src="./images/home/star.png" alt="" className="size-7" />
                <img src="./images/home/star.png" alt="" className="size-7" />
                <img src="./images/home/star.png" alt="" className="size-7" />
                <img src="./images/home/star.png" alt="" className="size-7" />
                <img src="./images/home/star.png" alt="" className="size-7" />
              </div>
              <div className="mt-1 font-medium leading-6">
                Đánh giá ứng dụng
              </div>
            </div>
          </div>
        </div>
        <img src="./images/home/detail-app.png" alt="" className="w-[336px]" />
      </div>
    </div>
  );
};

export default HomeView;
