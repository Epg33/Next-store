"use client"

import { Nav } from '@/components';
import { useState } from 'react';
import { HiMenu } from 'react-icons/hi'
import './globals.css';

export default function RootLayout({ children }: {children: React.ReactNode }) {
  const [showNav, setShowNav] = useState<boolean>(false);
  return (
    <html lang="en">
      <body className="w-full h-screen flex flex-col items-start bg-slate-900">
        <header className="fixed w-full flex justify-between items-center text-slate-100 py-4 px-4 bg-slate-900">
          <h1 className="text-2xl">Next Store</h1>
          <button onClick={()=>setShowNav(true)}><HiMenu /></button>
        </header>
        <Nav inView={showNav} setShowNav={setShowNav}/>
        {children}
      </body>
    </html>
  );
}