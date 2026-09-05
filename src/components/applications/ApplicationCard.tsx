import Link from "next/link";
import { ArrowRight } from "lucide-react";

import StatusBadge from "@/components/ui/StatusBadge";
import type { Application } from "@/types/application";

type ApplicationCardProps = {
    application: Application;
};

export default function ApplicationCard({
    application,
}: ApplicationCardProps) {
    return (
        <article className="rounded-xl border border-border bg-surface p-5 transition-shadow hover:shadow-sm">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                    <h3 className="truncate font-semibold text-text-primary">
                        {application.company}
                    </h3>

                    <p className="mt-1 truncate text-sm text-text-secondary">
                        {application.position}
                    </p>
                </div>

                <StatusBadge status={application.status} />
            </div>

            {/* Footer */}
            <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <span className="text-sm text-text-secondary">
                    {application.appliedDate}
                </span>

                <Link
                    href={`/applications/${application.id}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-hover"
                >
                    View
                    <ArrowRight size={16} />
                </Link>
            </div>
        </article>
    );
}