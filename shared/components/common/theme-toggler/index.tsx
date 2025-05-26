"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

import { Button } from "@/shared/components/ui/button";

type ThemeTogglerProps = {
  smallVersion?: boolean;
};

export const ThemeToggler = ({ smallVersion }: ThemeTogglerProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className="mr-2"
      variant="outline"
      size={smallVersion ? "sm" : "icon"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-[2rem] w-[2rem] scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[2rem] w-[2rem] scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
