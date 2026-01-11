import Link from "next/link";
import { FaAngleRight, FaChevronRight } from "react-icons/fa";

const PoliciesView = () => {
    return (
        <>
            <div className="bg-[#F9FAFB] py-8 px-4 w-full">
                <div className="max-w-2xl mx-auto flex flex-col gap-4">
                    <div className="flex gap-1 items-center text-sm leading-5">
                        <Link href="/" className="text-[#6B7280] hover:text-[#525763]">
                            Trang chủ
                        </Link>
                        <FaChevronRight className="text-[#D1D5DB] size-3" />
                        <div className="text-[#4B5563]">Chính sách và quyền</div>
                    </div>
                    <div className="text-3xl leading-9 font-bold text-black">Chính sách quyền riêng tư</div>
                    <div className="text-[#4B5563]">Cập nhật lần cuối: 19/10/2025</div>
                </div>
            </div>
            <div className="py-6 flex flex-col gap-6 text-[#1F2937] max-w-[704px] px-4 mx-auto">
                <div>
                    Chúng tôi, nhóm phát triển của ZBot – Hỗ trợ tài xế xe ghép, tôn trọng quyền riêng tư của người dùng
                    và cam kết bảo vệ thông tin cá nhân của bạn.
                </div>
                <div>
                    <div className="text-lg leading-7 font-bold">1. Thu thập dữ liệu</div>
                    <div>
                        Ứng dụng không thu thập, lưu trữ, chia sẻ hoặc xử lý bất kỳ dữ liệu cá nhân nào của người dùng.
                    </div>
                </div>
                <div>
                    <div className="text-lg leading-7 font-bold">2. Quyền truy cập và quyền của người dùng</div>
                    <div>
                        Vì ứng dụng không thu thập dữ liệu, nên chúng tôi không yêu cầu hoặc lưu trữ bất kỳ thông tin
                        nào liên quan đến quyền riêng tư của người dùng.
                    </div>
                </div>
                <div>
                    <div className="text-lg leading-7 font-bold">3. Dữ liệu của bên thứ ba</div>
                    <div>
                        Ứng dụng không sử dụng bất kỳ dịch vụ bên thứ ba nào (như Google Analytics, Firebase, quảng cáo,
                        hay SDK khác) có khả năng thu thập dữ liệu người dùng.
                    </div>
                </div>
                <div>
                    <div className="text-lg leading-7 font-bold">4. Bảo mật</div>
                    <div>
                        Mặc dù ứng dụng không xử lý dữ liệu cá nhân, chúng tôi vẫn áp dụng các biện pháp bảo mật tiêu
                        chuẩn để bảo vệ ứng dụng khỏi truy cập trái phép và đảm bảo trải nghiệm người dùng an toàn.
                    </div>
                </div>
                <div>
                    <div className="text-lg leading-7 font-bold">5. Thay đổi chính sách</div>
                    <div>
                        Nếu trong tương lai ứng dụng bổ sung các tính năng yêu cầu thu thập hoặc xử lý dữ liệu người
                        dùng, chúng tôi sẽ cập nhật chính sách quyền riêng tư này và thông báo rõ ràng cho người dùng
                        trước khi thay đổi có hiệu lực.
                    </div>
                </div>
                <div>
                    <div className="text-lg leading-7 font-bold">6. Liên hệ</div>
                    <div>
                        Nếu bạn có bất kỳ câu hỏi nào liên quan đến chính sách quyền riêng tư, vui lòng liên hệ với
                        chúng tôi qua email: <span className="underline">zbot.support@gmail.com</span>.
                    </div>
                </div>
            </div>
        </>
    );
};

export default PoliciesView;
