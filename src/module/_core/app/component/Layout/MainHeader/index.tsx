import Link from "next/link";

const MainHeader = () => {
  return (
    <div className="h-20 w-full bg-white">
      <div className="mx-auto h-full max-w-lapx px-4 flex items-center gap-3">
        <div className="flex-1">
          <img
            src="https://carback.vn/wp-content/uploads/2024/09/logo-3carback.png"
            alt="logo"
            className="max-w-52"
          />
        </div>
        <Link href="" className="font-bold text-lg hover:text-gray-700">Về Carback</Link>
        <Link href="" className="font-bold text-lg hover:text-gray-700">Đi xe ghép</Link>
        <Link href="" className="font-bold text-lg hover:text-gray-700">Trở thành đối tác Carback</Link>
        <Link href="" className="font-bold text-lg hover:text-gray-700">Trung tâm hỗ trợ</Link>
        <Link href="" className="font-bold text-lg hover:text-gray-700">Liên hệ</Link>
        <button className="bg-red-600 text-white font-bold px-4 shadow rounded-xl hover:shadow-slate-400 cursor-pointer py-1.5 text-[13px] active:opacity-90">Liên hệ</button>
      </div>
    </div>
  );
};

export default MainHeader;
