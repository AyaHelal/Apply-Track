"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";

type SidebarShellProps = {
    initialCollapsed: boolean;
};

export default function SidebarShell({
    initialCollapsed,
}: SidebarShellProps) {
    const [isCollapsed, setIsCollapsed] = useState(initialCollapsed);

    const toggleSidebar = () => {
        setIsCollapsed((current) => {
            const newValue = !current;

            document.cookie = `sidebar-collapsed=${newValue}; path=/; max-age=31536000; samesite=lax`;

            return newValue;
        });
    };

    return (
        <Sidebar
            isCollapsed={isCollapsed}
            onToggle={toggleSidebar}
        />
    );
}