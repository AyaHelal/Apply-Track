import { Plus } from "lucide-react";

import ButtonLink from "@/components/ui/ButtonLink";
import ApplicationsContent from "@/components/applications/ApplicationsContent";
import ApplicationDeletedToast from "@/components/applications/ApplicationDeletedToast";
import { getApplications } from "@/lib/db";

export default async function ApplicationsPage({
  searchParams,
}: {
  searchParams: Promise<{ deleted?: string }>;
}) {
  const { deleted } = await searchParams;
  const applications = await getApplications();
  return (
    <div className="space-y-8">
      <ApplicationDeletedToast deleted={deleted} />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">
            Applications
          </h1>

          <p className="mt-1 text-text-secondary">
            Track and manage your job applications.
          </p>
        </div>

        <ButtonLink href="/applications/new">
          <Plus size={18} />
          Add Application
        </ButtonLink>
      </div>

      <ApplicationsContent applications={applications} />
    </div>
  );
}
