import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import {FaHome, FaShoppingBag, FaFolder, FaShoppingCart, FaUserCircle, FaUserFriends} from 'react-icons/fa'

interface NavBar {
  inView: boolean;
  setShowNav:  Dispatch<SetStateAction<boolean>>
}

const Nav: React.FC<NavBar> = ({ inView, setShowNav }): JSX.Element | null => {
  if (!inView) return null;
  return (
    <>
      <div className="w-full h-screen fixed flex z-20 flex-col justify-start items-end backdrop-blur-sm inset-0 pr-6 pt-4">
        <nav className="bg-slate-700 h-3/5 w-5/6 flex flex-col items-start gap-5 pt-4 pl-4 rounded-xl sm:w-3/5 md:w-2/4 lg:w-1/4">
          <div className="h-[10%] w-full flex items-center">
            <Link className="h-[10%] w-11/12 flex items-center gap-2 text-slate-100 text-xl py-4 pl-2" href="/"><FaHome /> Home</Link>
            <button className="text-2xl text-slate-100 place-self-end mb-4" onClick={()=>setShowNav(false)}>X</button>
          </div>
          <Link className="h-[10%] w-11/12 flex items-center gap-2 text-slate-100 text-xl py-4 pl-2" href="/products"><FaShoppingBag /> Products</Link>
          <Link className="h-[10%] w-11/12 flex items-center gap-2 text-slate-100 text-xl py-4 pl-2" href="/categorys"><FaFolder />Categorys</Link>
          <Link className="h-[10%] w-11/12 flex items-center gap-2 text-slate-100 text-xl py-4 pl-2" href="/carts"><FaShoppingCart />Carts</Link>
          <Link className="h-[10%] w-11/12 flex items-center gap-2 text-slate-100 text-xl py-4 pl-2" href="/users"><FaUserFriends />Users</Link>
          <Link className="h-[10%] w-11/12 flex items-center gap-2 text-slate-100 text-xl py-4 pl-2" href={`/users/${1}`}><FaUserCircle />Profile</Link>
        </nav>
      </div>
    </>
  );
};

export default Nav;
