import { Plus } from "lucide-react";

import { applications } from "@/data/applications";
import ButtonLink from "@/components/ui/ButtonLink";
import ApplicationsContent from "@/components/applications/ApplicationsContent";

export default function ApplicationsPage() {
  return (
    <div className="space-y-8">
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

      <ApplicationsContent applications={applications} />
    </div>
  );
}