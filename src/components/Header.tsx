"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";

// NavBarElement component
export function NavBarElement(props: any) {
  const { themeVal, pathname, pathCheck } = props;
  return (
    <Link href={`${pathname}`}>
      <div>
        <div
          className={`py-4 mx-8 mt-1 ${
            pathCheck && themeVal === "light"
              ? "text-custom-purple"
              : pathCheck && themeVal === "dark"
              ? "text-custom-blue"
              : "text-gray-500"
          }  font-medium ${
            themeVal === "dark"
              ? "hover:text-custom-blue"
              : "hover:text-custom-purple"
          }`}
        >
          {props.children}
        </div>
      </div>
    </Link>
  );
}

const HeaderComp = () => {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [toggle, setToggle] = useState(false);

  return (
    <header className="w-full top-0 right-0 left-auto pr-6 flex flex-auto shadow-headerWhite dark:shadow-headerblack">
      <div className="font-bold pl-6 py-4 text-2xl font-customFont">
        <Link href={`/`} className="no-underline">
          Chandu{" "}
          <span className=" text-custom-purple dark:text-custom-blue">
            Sadda
          </span>
        </Link>
        <ThemeToggle />
      </div>
      {/* {theme && pathname && ( */}
      <div className="mr-5 ml-auto flex header-links">
        <NavBarElement
          pathname="/"
          pathCheck={
            pathname === "/" || pathname === "/home/" || pathname === "/home"
          }
          themeVal={theme}
        >
          Home
        </NavBarElement>
        <NavBarElement
          pathname="/education"
          pathCheck={pathname === "/education" || pathname === "/education/"}
          themeVal={theme}
        >
          Education
        </NavBarElement>
        <NavBarElement
          pathname="/work"
          pathCheck={pathname === "/work" || pathname === "/work/"}
          themeVal={theme}
        >
          Work
        </NavBarElement>
        <NavBarElement
          pathname="/contact"
          pathCheck={pathname === "/contact" || pathname === "/contact/"}
          themeVal={theme}
        >
          Contact
        </NavBarElement>
      </div>
      <div className="w-8 h-8 header-hanberger absolute right-6 cursor-pointer top-4">
        <svg
          className="dark:fill-custom-blue fill-custom-purple"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"></path>
        </svg>
      </div>
      {toggle && (
        <div className=" h-[100vh] fixed z-[1200]">
          <div
            onClick={() => {
              setToggle(!toggle);
            }}
            className=" fixed flex inset-0 bg-[#00000080] -z-10"
          ></div>
          <div className=" w-80 h-[100%] bg-white flex flex-col z-[1200] top-0 left-0 shadow-workDarkCards"></div>
        </div>
      )}
      {/* )} */}
    </header>
  );
};

export default HeaderComp;
