import type { LucideIcon } from "lucide-react";

type EmptyStateProps = {
    icon: LucideIcon;
    title: string;
    description: string;
    action?: React.ReactNode;
};

export default function EmptyState({
    icon: Icon,
    title,
    description,
    action,
}: EmptyStateProps) {
    return (
        <div className="flex min-h-80 flex-col items-center justify-center rounded-xl border border-dashed border-border bg-surface px-6 py-12 text-center">
            {/* Icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon size={26} strokeWidth={1.8} />
            </div>

            {/* Content */}
            <h2 className="mt-5 text-lg font-semibold text-text-primary">
                {title}
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-text-secondary">
                {description}
            </p>

            {/* Action */}
            {action && <div className="mt-6">{action}</div>}
        </div>
    );
}