import Link from "next/link";
import {
  BriefcaseBusiness,
  CalendarCheck,
  Trophy,
  HeartHandshake,
  XCircle,
  Plus,
  ArrowRight,
} from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";

import StatCard from "@/components/dashboard/StatCard";
import StatusBadge from "@/components/ui/StatusBadge";
import ButtonLink from "@/components/ui/ButtonLink";
import type { Metadata } from "next";
import { getApplicationStats } from "@/lib/db";
import { getAuthenticatedUserId } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const clerkUser = await currentUser();
  const userId = clerkUser?.id ?? (await getAuthenticatedUserId());
  const stats = await getApplicationStats(userId);

  const displayName =
    clerkUser?.firstName ||
    clerkUser?.username ||
    clerkUser?.emailAddresses[0]?.emailAddress.split("@")[0] ||
    "there";

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-bold text-text-primary">
            Welcome back, {displayName}
            <HeartHandshake size={28} className="text-warning" />
          </h1>

          <p className="mt-1 text-text-secondary">
            Here’s an overview of your job applications.
          </p>
        </div>

        {stats.total > 0 && (
          <ButtonLink href="/applications/new">
            <Plus size={18} />
            Add Application
          </ButtonLink>
        )}
      </div>

      {/* Stats */}
      <section>
        <h2 className="sr-only">Application statistics</h2>

        <div className="motion-stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Applications"
            value={stats.total}
            description="All applications you've added"
            icon={BriefcaseBusiness}
          />

          <StatCard
            title="Interviews"
            value={stats.interviews}
            description="Applications currently in interview"
            icon={CalendarCheck}
            iconClassName="bg-info/10 text-info"
          />

          <StatCard
            title="Offers"
            value={stats.offers}
            description="Offers you've received"
            icon={Trophy}
            iconClassName="bg-success/10 text-success"
          />

          <StatCard
            title="Rejected"
            value={stats.rejected}
            description="Applications that were rejected"
            icon={XCircle}
            iconClassName="bg-danger/10 text-danger"
          />
        </div>
      </section>

      {/* Recent Applications */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-text-primary">
              Recent Applications
            </h2>

            <p className="text-sm text-text-secondary">
              Your latest job applications.
            </p>
          </div>

          {stats.recent.length > 0 && (
            <Link
              href="/applications"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-hover"
            >
              View all
              <ArrowRight size={15} />
            </Link>
          )}
        </div>

        {stats.recent.length === 0 ? (
          <div className="motion-rise-in rounded-xl border border-border bg-surface p-8 text-center">
            <p className="text-text-secondary">
              No applications yet. Start tracking your job search now!
            </p>
            <div className="mt-4 flex justify-center">
              <ButtonLink href="/applications/new">
                <Plus size={17} />
                Add Your First Application
              </ButtonLink>
            </div>
          </div>
        ) : (
          <div className="motion-rise-in divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface">
            {stats.recent.map((app) => (
              <Link
                key={app.id}
                href={`/applications/${app.id}`}
                className="flex items-center justify-between p-4 transition-colors hover:bg-surface-muted sm:px-6"
              >
                <div className="space-y-1">
                  <p className="font-semibold text-text-primary">
                    {app.company}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {app.position}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="hidden text-xs text-text-muted sm:inline-block">
                    {app.appliedDate}
                  </span>
                  <StatusBadge status={app.status} />
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}