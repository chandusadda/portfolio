"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        className=" mt-0 ml-4"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
        title="change theme"
      >
        {theme === "light" ? (
          <SunIcon className="h-6 w-6 mb-[-0.25rem] text-custom-purple" />
        ) : (
          <MoonIcon className="h-6 w-6 mb-[-0.25rem] text-custom-blue" />
        )}
      </button>
    </>
  );
}

export default ThemeToggle;
