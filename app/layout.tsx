"use client"

import { Nav } from '@/components';
import { useState } from 'react';
import './globals.css';

export default function RootLayout({ children }: {children: React.ReactNode }) {
  const [showNav, setShowNav] = useState<boolean>(true);
  return (
    <html lang="en">
      <body className="w-full h-screen flex flex-col items-start bg-slate-900">
        <Nav inView={showNav} setShowNav={setShowNav}/>
        {children}
      </body>
    </html>
  );
}