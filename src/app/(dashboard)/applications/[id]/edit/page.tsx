import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import ApplicationForm from "@/components/applications/ApplicationForm";
import { getApplicationById } from "@/lib/db";

type EditApplicationPageProps = {
    params: Promise<{ id: string }>;
};

export default async function EditApplicationPage({
    params,
}: EditApplicationPageProps) {
    const { id } = await params;
    const application = await getApplicationById(id);

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

                <h1 className="text-xl font-semibold text-text-primary">
                    Application not found
                </h1>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-2xl space-y-8">
            <div className="motion-rise-in">
                <Link
                    href={`/applications/${id}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-primary"
                >
                    <ArrowLeft size={16} />
                    Back to Application
                </Link>

                <h1 className="mt-6 text-2xl font-bold text-text-primary">
                    Edit Application
                </h1>
            </div>

            <div className="motion-rise-in">
                <ApplicationForm application={application} />
            </div>
        </div>
    );
}
