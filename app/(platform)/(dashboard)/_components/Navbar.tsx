import { Logo } from '@/components/logo';
import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed top-0 z-50 w-full h-14 border-b shadow-sm bg-white flex items-center">
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex ">
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
