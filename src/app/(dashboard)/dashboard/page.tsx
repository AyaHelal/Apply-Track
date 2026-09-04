import {
  BriefcaseBusiness,
  CalendarCheck,
  Trophy,
  HeartHandshake,
  XCircle
} from "lucide-react";

import StatCard from "@/components/dashboard/StatCard";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="flex gap-2 text-2xl font-bold text-text-primary">
          Welcome back, Aya
          <HeartHandshake size={30} className="text-warning" />
        </h1>


        <p className="mt-1 text-text-secondary">
          Here’s an overview of your job applications.
        </p>
      </div>

      {/* Stats */}
      <section>
        <h2 className="sr-only">Application statistics</h2>

        <div className="motion-stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Applications"
            value={24}
            description="All applications you've added"
            icon={BriefcaseBusiness}
          />

          <StatCard
            title="Interviews"
            value={6}
            description="Applications currently in interview"
            icon={CalendarCheck}
            iconClassName="bg-info/10 text-info"
          />

          <StatCard
            title="Offers"
            value={2}
            description="Offers you've received"
            icon={Trophy}
            iconClassName="bg-success/10 text-success"
          />

          <StatCard
            title="Rejected"
            value={8}
            description="Applications that were rejected"
            icon={XCircle}
            iconClassName="bg-danger/10 text-danger"
          />
        </div>
      </section>

      {/* Recent Applications */}
      <section>
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-text-primary">
            Recent Applications
          </h2>

          <p className="text-sm text-text-secondary">
            Your latest job applications.
          </p>
        </div>

        <div className="motion-rise-in rounded-xl border border-border bg-surface p-6">
          <p className="text-text-secondary">
            No applications yet.
          </p>
        </div>
      </section>
    </div>
  );
}