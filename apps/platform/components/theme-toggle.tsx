"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle({
  isCollapsed = false,
}: {
  isCollapsed?: boolean;
}) {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`w-full rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-primary focus:bg-secondary focus:text-primary focus:outline-none transition-colors flex items-center ${
        isCollapsed ? "justify-center" : "text-left gap-2"
      }`}
    >
      <div className="flex-shrink-0 w-4 h-4 relative">
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute top-0 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </div>
    </button>
  );
}
