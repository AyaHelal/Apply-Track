import Link from "next/link";
import StatusBadge from "@/components/ui/StatusBadge";
import type { Application } from "@/types/application";
import { Plus, ArrowRight, BriefcaseBusiness } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import EmptyState from "@/components/ui/EmptyState";

const applications: Application[] = [
  {
    id: "1",
    company: "Google",
    position: "Frontend Developer",
    status: "Interview",
    date: "Aug 20, 2026",
  },
  {
    id: "2",
    company: "Microsoft",
    position: "React Developer",
    status: "Applied",
    date: "Aug 18, 2026",
  },
  {
    id: "3",
    company: "Amazon",
    position: "Frontend Engineer",
    status: "Rejected",
    date: "Aug 15, 2026",
  },
];

export default function ApplicationsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">
            Applications
          </h1>

          <p className="mt-1 text-text-secondary">
            Track and manage your job applications.
          </p>
        </div>

        {applications.length > 0 && (
          <ButtonLink href="/applications/new">
            <Plus size={18} />
            Add Application
          </ButtonLink>
        )}
      </div>

      {/* Applications List */}
      <section>
        {applications.length === 0 ? (
          <EmptyState
            icon={BriefcaseBusiness}
            title="No applications yet"
            description="Start tracking your job search by adding your first application."
            action={
              <ButtonLink href="/applications/new">
                <Plus size={18} />
                Add Application
              </ButtonLink>
            }
          />
        ) : (
          <div className="overflow-hidden rounded-xl border border-border bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full min-w-175">
                <thead>
                  <tr className="border-b border-border bg-surface-muted text-left">
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-text-secondary">
                      Company
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-text-secondary">
                      Position
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-text-secondary">
                      Status
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-text-secondary">
                      Date
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-text-secondary">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {applications.map((application) => (
                    <tr
                      key={application.id}
                      className="border-b border-border last:border-b-0 transition-colors hover:bg-surface-muted/60"
                    >
                      <td className="px-6 py-5">
                        <span className="font-semibold text-text-primary">
                          {application.company}
                        </span>
                      </td>

                      <td className="px-6 py-5 text-sm text-text-secondary">
                        {application.position}
                      </td>

                      <td className="px-6 py-5">
                        <StatusBadge status={application.status} />
                      </td>

                      <td className="px-6 py-5 text-sm text-text-secondary">
                        {application.date}
                      </td>

                      <td className="px-6 py-5">
                        <Link
                          href={`/applications/${application.id}`}
                          className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-hover"
                        >
                          View
                          <ArrowRight size={16} />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}