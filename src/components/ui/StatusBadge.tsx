import type { ApplicationStatus } from "@/types/application";

type StatusBadgeProps = {
    status: ApplicationStatus;
};

const statusStyles: Record<ApplicationStatus, string> = {
    Applied: "bg-info/10 text-info",
    Interview: "bg-warning/10 text-warning",
    Offer: "bg-success/10 text-success",
    Rejected: "bg-danger/10 text-danger",
};

export default function StatusBadge({
    status,
}: StatusBadgeProps) {
    return (
        <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[status]}`}
        >
            {status}
        </span>
    );
}