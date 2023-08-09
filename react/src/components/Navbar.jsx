import { Link } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50">
      <nav className="sticky flex flex-row top-0 w-full bg-white/70 backdrop-blur-sm ring-1 ring-slate-100 shadow-sm py-4 px-6 justify-center items-center">
        <Link to='/' className="basis-1/4">
          <h1 className="text-lg font-bold">로고</h1>
        </Link>
        <ul className="flex flex-row gap-4 basis-2/4 justify-center text-slate-400 transition-all">
          {/* <li>
            <Link to="/" className="hover:text-slate-800  transition-all p-3">
              홈
            </Link>
          </li> */}
          <li>
            <Link to="#" className="hover:text-slate-800  transition-all p-3">
              행사 정보
            </Link>
          </li>
          <li>
            <Link to="board" className="hover:text-slate-800  transition-all p-3">
              게시판
            </Link>
          </li>
        </ul> 
        <Link to='mypage' className="text-slate-500 justify-end flex basis-1/4 items-center gap-2">
          <UserCircleIcon className="w-5 h-5"/>
          <span>홍길동님</span>
        </Link>
      </nav>
    </div>
  );
}
