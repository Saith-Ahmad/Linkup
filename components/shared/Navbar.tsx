import React from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { SignedIn, SignOutButton, UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <div className="flex justify-center px-2">
      <nav className="flex justify-between  z-50 w-full max-w-3xl nav_top ">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/icons/logo.png"
            width={32}
            height={32}
            alt="yoom logo"
            unoptimized
            className="max-sm:size-10"
          />
          <p className="text-[26px] font-extrabold text-white max-sm:hidden">
            LoopCall
          </p>
        </Link>
        <div className="flex justify-center items-center gap-5 ">
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: {
                    width: "40px",
                    height: "40px",
                  },
                },
              }}
            />
          </SignedIn>

          <MobileNav />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
