"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/layout/Logo";
import { Menu, X } from "lucide-react";

export default function MobileNavigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Menu Button */}
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                aria-label="Open navigation menu"
                className="md:hidden rounded-lg p-2 text-text-secondary hover:bg-surface-muted"
            >
                <Menu size={24} />
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/40 md:hidden"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Drawer */}
            <aside
                className={`fixed left-0 top-0 z-50 h-full w-72 bg-surface shadow-xl transform transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between border-b border-border p-4">
                    <Logo size="mobile"/>

                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close navigation menu"
                        className="rounded-lg p-2 text-text-secondary hover:bg-surface-muted"
                    >
                    <X size={24} />
                    </button>
                </div>

                <nav className="space-y-2 p-4">
                    <Link
                        href="/dashboard"
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg px-4 py-3 text-text-secondary hover:bg-surface-muted hover:text-primary"
                    >
                        Dashboard
                    </Link>

                    <Link
                        href="/applications"
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg px-4 py-3 text-text-secondary hover:bg-surface-muted hover:text-primary"
                    >
                        Applications
                    </Link>

                    <Link
                        href="/profile"
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg px-4 py-3 text-text-secondary hover:bg-surface-muted hover:text-primary"
                    >
                        Profile
                    </Link>
                </nav>
            </aside>
        </>
    );
}