"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const isDarkMode = savedTheme === "dark";

        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        // Defer state update to avoid effect warnings
        Promise.resolve().then(() => setIsDark(isDarkMode));
    }, []);

    const toggleTheme = () => {
        const html = document.documentElement;
        const nextIsDark = !html.classList.contains("dark");

        html.classList.toggle("dark");

        localStorage.setItem(
            "theme",
            nextIsDark ? "dark" : "light"
        );

        setIsDark(nextIsDark);
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={
                isDark
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            }
            className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-surface-muted hover:text-text-primary cursor-pointer"
        >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
}