import { Nav } from '@/components';
import { useState } from 'react';
import './globals.css';

export default function RootLayout({ children }: {children: React.ReactNode }) {
  const [showNav, setShowNav] = useState<boolean>(false);
  return (
    <html lang="en">
      <body>
        <Nav inView={showNav}/>
        {children}
      </body>
    </html>
  );
}