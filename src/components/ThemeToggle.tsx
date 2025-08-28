"use client";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  },[])
  if(!mounted) {
    return "loading..."
  }
  
  return (
    <>
      <button
        className=" mt-0 ml-4"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
        title={`change to ${theme === "light" ? "dark" : "light"} theme`}
      >
        {theme === "dark" ? (
          <FontAwesomeIcon
            icon={faMoon}
            className="h-6 w-6 text-blue-500"
          />
        ) : (
          <FontAwesomeIcon
            icon={faSun}
            className="h-6 w-6 text-purple-900"
          />
        )}
      </button>
    </>
  );
}

export default ThemeToggle;
