"use client";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        title={`change to ${theme === "light" ? "dark" : "light"} theme`}
      >
        {theme === "dark" ? (
          <FontAwesomeIcon
            icon={faMoon}
            className="h-6 w-6 text-custom-blue"
          />
        ) : (
          <FontAwesomeIcon
            icon={faSun}
            className="h-6 w-6 text-custom-purple"
          />
        )}
      </button>
    </>
  );
}

export default ThemeToggle;
