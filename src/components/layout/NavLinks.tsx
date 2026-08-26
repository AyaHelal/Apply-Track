"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  Settings,
} from "lucide-react";

const links = [
    {
        href: "/dashboard",
        label: "Dashboard",
        icon: LayoutDashboard,
    },
    {
        href: "/applications",
        label: "Applications",
        icon: BriefcaseBusiness,
    },
    {
        href: "/settings",
        label: "Settings",
        icon: Settings,
    },
];

type NavLinksProps = {
    isCollapsed: boolean;
};

export default function NavLinks({ isCollapsed }: NavLinksProps) {
    const pathname = usePathname();

    return (
        <nav aria-label="Main navigation" className="space-y-2">
            {links.map((link) => {
                const isActive = pathname === link.href;

                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        title={isCollapsed ? link.label : undefined}
                        className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${isActive
                                ? "bg-primary text-white"
                                : "text-text-secondary hover:bg-surface-muted hover:text-primary"
                            } ${isCollapsed ? "justify-center px-2" : ""}`}
                    >
                        <link.icon size={20} />

                        {!isCollapsed && <span>{link.label}</span>}
                    </Link>
                );
            })}
        </nav>
    );
}