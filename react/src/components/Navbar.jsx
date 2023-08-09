import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50">
      <nav className="sticky top-0 w-full bg-white/70 backdrop-blur-sm ring-1 ring-slate-100 shadow-sm py-4 px-6 justify-center items-center  ">
        <ul className="flex gap-4 justify-center text-slate-400 transition-all">
          <li>
            <Link to="/" className="hover:text-slate-800  transition-all p-3">
              홈
            </Link>
          </li>
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
        <Outlet />
      </nav>
    </div>
  );
}
