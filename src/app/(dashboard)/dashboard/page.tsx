export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-text-primary">
          Welcome back, Aya 👋
        </h1>

        <p className="mt-1 text-text-secondary">
          Here’s an overview of your job applications.
        </p>
      </div>

      {/* Stats */}
      <section>
        <h2 className="sr-only">Application statistics</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface p-6">
            <p className="text-sm text-text-secondary">
              Total Applications
            </p>

            <p className="mt-2 text-3xl font-bold text-text-primary">
              24
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6">
            <p className="text-sm text-text-secondary">
              Interviews
            </p>

            <p className="mt-2 text-3xl font-bold text-text-primary">
              6
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6">
            <p className="text-sm text-text-secondary">
              Offers
            </p>

            <p className="mt-2 text-3xl font-bold text-text-primary">
              2
            </p>
          </div>
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

        <div className="rounded-xl border border-border bg-surface p-6">
          <p className="text-text-secondary">
            No applications yet.
          </p>
        </div>
      </section>
    </div>
  );
}