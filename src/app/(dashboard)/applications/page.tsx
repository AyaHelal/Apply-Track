import Link from "next/link";

const applications = [
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

        <Link
          href="/applications/new"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90"
        >
          + Add Application
        </Link>
      </div>

      {/* Applications List */}
      <section>
        <div className="overflow-hidden rounded-xl border border-border bg-surface">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="px-6 py-4 text-sm font-medium text-text-secondary">
                    Company
                  </th>

                  <th className="px-6 py-4 text-sm font-medium text-text-secondary">
                    Position
                  </th>

                  <th className="px-6 py-4 text-sm font-medium text-text-secondary">
                    Status
                  </th>

                  <th className="px-6 py-4 text-sm font-medium text-text-secondary">
                    Date
                  </th>

                  <th className="px-6 py-4 text-sm font-medium text-text-secondary">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {applications.map((application) => (
                  <tr
                    key={application.id}
                    className="border-b border-border last:border-b-0 hover:bg-surface-muted"
                  >
                    <td className="px-6 py-4 font-medium text-text-primary">
                      {application.company}
                    </td>

                    <td className="px-6 py-4 text-text-secondary">
                      {application.position}
                    </td>

                    <td className="px-6 py-4">
                      <span className="text-sm text-text-secondary">
                        {application.status}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-sm text-text-secondary">
                      {application.date}
                    </td>

                    <td className="px-6 py-4">
                      <Link
                        href={`/applications/${application.id}`}
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}