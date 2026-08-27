import type { SelectHTMLAttributes, ReactNode } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    label: string;
    children: ReactNode;
};

export default function Select({
    label,
    id,
    children,
    className = "",
    ...props
}: SelectProps) {
    return (
        <div>
            <label
                htmlFor={id}
                className="mb-2 block text-sm font-medium text-text-primary"
            >
                {label}
            </label>

            <select
                id={id}
                className={`w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text-primary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10 ${className}`}
                {...props}
            >
                {children}
            </select>
        </div>
    );
}