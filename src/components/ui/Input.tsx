import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
};

export default function Input({
    label,
    id,
    className = "",
    ...props
}: InputProps) {
    return (
        <div>
            <label
                htmlFor={id}
                className="mb-2 block text-sm font-medium text-text-primary"
            >
                {label}
            </label>

            <input
                id={id}
                className={`w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text-primary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10 ${className}`}
                {...props}
            />
        </div>
    );
}