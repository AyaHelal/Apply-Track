import Link from "next/link";
import {
  ArrowLeft,
  BriefcaseBusiness,
  CalendarDays,
  ExternalLink,
  Pencil,
  Trash2,
} from "lucide-react";

import StatusBadge from "@/components/ui/StatusBadge";
import Button from "@/components/ui/Button";
import { applications } from "@/data/applications";


type ApplicationDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ApplicationDetailsPage({
  params,
}: ApplicationDetailsPageProps) {
  const { id } = await params;

  const application = applications.find(
    (application) => application.id === id
  );

  if (!application) {
    return (
      <div className="space-y-6">
        <Link
          href="/applications"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-primary"
        >
          <ArrowLeft size={16} />
          Back to Applications
        </Link>

        <div className="rounded-xl border border-dashed border-border bg-surface px-6 py-16 text-center">
          <h1 className="text-xl font-semibold text-text-primary">
            Application not found
          </h1>

          <p className="mt-2 text-sm text-text-secondary">
            The application that you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Back */}
      <Link
        href="/applications"
        className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-primary"
      >
        <ArrowLeft size={16} />
        Back to Applications
      </Link>

      {/* Header */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-bold text-text-primary">
              {application.company}
            </h1>

            <StatusBadge status={application.status} />
          </div>

          <p className="mt-2 text-text-secondary">
            {application.position}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button variant="secondary" className="flex-1 cursor-pointer sm:flex-none">
            <Pencil size={17} />
            Edit
          </Button>

          <Button variant="danger" className="flex-1 cursor-pointer sm:flex-none">
            <Trash2 size={17} />
            Delete
          </Button>
        </div>
      </div>

      {/* Information */}
      <section className="rounded-xl border border-border bg-surface">
        <div className="border-b border-border px-4 py-5 sm:px-6">
          <h2 className="font-semibold text-text-primary">
            Application Information
          </h2>

          <p className="mt-1 text-sm text-text-secondary">
            Details about this job application.
          </p>
        </div>

        <div className="grid gap-5 p-4 sm:grid-cols-2 sm:gap-6 sm:p-6">
          {/* Company */}
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <BriefcaseBusiness size={19} />
            </div>

            <div>
              <p className="text-xs font-medium text-text-secondary">
                Company
              </p>

              <p className="mt-1 font-medium text-text-primary">
                {application.company}
              </p>
            </div>
          </div>

          {/* Position */}
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <BriefcaseBusiness size={19} />
            </div>

            <div>
              <p className="text-xs font-medium text-text-secondary">
                Position
              </p>

              <p className="mt-1 font-medium text-text-primary">
                {application.position}
              </p>
            </div>
          </div>

          {/* Status */}
          <div>
            <p className="text-xs font-medium text-text-secondary">
              Status
            </p>

            <div className="mt-2">
              <StatusBadge status={application.status} />
            </div>
          </div>

          {/* Date */}
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <CalendarDays size={19} />
            </div>

            <div>
              <p className="text-xs font-medium text-text-secondary">
                Applied Date
              </p>

              <p className="mt-1 font-medium text-text-primary">
                {application.appliedDate}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job posting and notes */}
      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
          <p className="text-xs font-medium text-text-secondary">
            Job Posting
          </p>

          <a
            href={application.jobUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            View Job Posting
            <ExternalLink size={16} />
          </a>
        </div>

        <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
          <p className="text-xs font-medium text-text-secondary">
            Notes
          </p>

          <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-text-primary">
            {application.notes || "No notes added."}
          </p>
        </div>
      </section>
    </div>
  );
}