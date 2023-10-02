"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// NavBarElement component
export function NavBarElement(props: any) {
  return (
    <Link href={`${props.pathname}`}>
      <div>
        <div className={`py-4 mx-8 mt-1 ${props.pathCheck ? "text-custom-purple" : "text-gray-500"}  font-medium hover:text-custom-purple`}>
          {props.children}
        </div>
      </div>
    </Link>
  );
}

const HeaderComp = () => {
  const pathname = usePathname();

  return (
    <header className="header-main fixed top-0 right-0 left-auto px-6 flex flex-auto">
      <div className="font-bold py-4 text-2xl font-customFont">
        Chandu <span className=" text-custom-purple">Sadda</span>
      </div>
      <div className="mr-5 ml-auto flex">
        <NavBarElement
          pathname="/"
          pathCheck={
            pathname === "/" || pathname === "/home/" || pathname === "/home"
          }
        >
          Home
        </NavBarElement>
        <NavBarElement
          pathname="/education"
          pathCheck={pathname === "/education" || pathname === "/education/"}
        >
          Education
        </NavBarElement>
        <NavBarElement
          pathname="/work"
          pathCheck={pathname === "/work" || pathname === "/work/"}
        >
          Work
        </NavBarElement>
        <NavBarElement
          pathname="/contact"
          pathCheck={pathname === "/contact" || pathname === "/contact/"}
        >
          Contact
        </NavBarElement>
      </div>
    </header>
  );
};

export default HeaderComp;
