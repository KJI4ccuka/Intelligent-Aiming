"use client";

import { usePathname } from "next/navigation";
import Logo from '@/components/shared/logo';
const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full lg:bg-[#141419] border-t border-background-03 py-3">
      <div className="container hidden lg:flex flex-wrap items-center justify-between mx-auto">
        <div className="w-[140px]">
          <Logo width={40} height={40} />
        </div>
        <div className="flex gap-x-8 ">

        </div>
        <div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
