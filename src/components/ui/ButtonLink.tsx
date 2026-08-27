import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "danger" | "ghost";

type ButtonLinkProps = {
    href: string;
    children: ReactNode;
    variant?: ButtonVariant;
    className?: string;
};

const variants: Record<ButtonVariant, string> = {
    primary:
        "bg-primary text-white hover:bg-primary-hover",
    secondary:
        "border border-border bg-surface text-text-primary hover:bg-surface-muted",
    danger:
        "bg-danger text-white hover:opacity-90",
    ghost:
        "bg-transparent text-text-secondary hover:bg-surface-muted hover:text-text-primary",
};

export default function ButtonLink({
    href,
    children,
    variant = "primary",
    className = "",
}: ButtonLinkProps) {
    return (
        <Link
            href={href}
            className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${variants[variant]} ${className}`}
        >
            {children}
        </Link>
    );
}