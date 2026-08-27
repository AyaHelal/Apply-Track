import type { LucideIcon } from "lucide-react";

type StatCardProps = {
    title: string;
    value: number;
    description: string;
    icon: LucideIcon;
    iconClassName?: string;
};

export default function StatCard({
    title,
    value,
    description,
    icon: Icon,
    iconClassName = "bg-primary/10 text-primary",
}: StatCardProps) {
    return (
        <div className="group rounded-xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm font-medium text-text-secondary">
                        {title}
                    </p>

                    <p className="mt-2 text-3xl font-bold tracking-tight text-text-primary">
                        {value}
                    </p>
                </div>

                <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${iconClassName}`}
                >
                    <Icon size={22} />
                </div>
            </div>

            <p className="mt-4 text-xs text-text-muted">
                {description}
            </p>
        </div>
    );
}