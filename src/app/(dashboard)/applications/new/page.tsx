
import ApplicationForm from "@/components/applications/ApplicationForm";

export default function NewApplicationPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div>

        <h1 className="text-2xl font-bold text-text-primary">
          Add Application
        </h1>

        <p className="mt-1 text-text-secondary">
          Add a new job application to your tracker.
        </p>
      </div>

      <ApplicationForm />
    </div>
  );
}