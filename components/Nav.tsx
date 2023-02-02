import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface NavBar {
  inView: boolean;
  setShowNav:  Dispatch<SetStateAction<boolean>>
}

const Nav: React.FC<NavBar> = ({ inView, setShowNav }): JSX.Element | null => {
  if (!inView) return null;
  return (
    <>
      <div className="w-full h-screen fixed flex justify-center items-center bg-transparent opacity-75 blur-xl"></div>
      <div className="w-full h-screen fixed flex flex-col justify-center items-center bg-transparent p-96">
        <button className="text-2xl text-slate-100 place-self-end" onClick={()=>setShowNav(false)}>X</button>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/categorys">Categorys</Link>
          <Link href="/carts">Carts</Link>
          <Link href="/users">Users</Link>
          <Link href={`/users/${1}`}>Profile</Link>
        </nav>
      </div>
    </>
  );
};

export default Nav;
