"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
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

  return (
    <header className="w-full top-0 right-0 left-auto px-6 flex flex-auto shadow-headerWhite dark:shadow-headerblack">
      <div className="font-bold py-4 text-2xl font-customFont">
        <Link href={`/`} className="no-underline">
          Chandu{" "}
          <span className=" text-custom-purple dark:text-custom-blue">
            Sadda
          </span>
        </Link>
        <ThemeToggle />
      </div>
      {/* {theme && pathname && ( */}
      <div className="mr-5 ml-auto flex">
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
      {/* )} */}
    </header>
  );
};

export default HeaderComp;
