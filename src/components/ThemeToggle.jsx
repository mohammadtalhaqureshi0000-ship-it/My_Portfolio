import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      type="button"
      onClick={() => setDarkMode((prev) => !prev)}
      aria-label={
        darkMode
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      title={
        darkMode
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl

        border
        border-slate-200
        bg-white
        text-slate-700

        shadow-sm

        transition-all
        duration-300

        hover:-translate-y-0.5
        hover:border-blue-400
        hover:text-blue-600
        hover:shadow-md

        dark:border-slate-700
        dark:bg-slate-800
        dark:text-slate-200
        dark:hover:border-blue-500
        dark:hover:text-blue-400
      "
    >
      <span className="text-lg">
        {darkMode ? "☀️" : "🌙"}
      </span>
    </button>
  );
};

export default ThemeToggle;