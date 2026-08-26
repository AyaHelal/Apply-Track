type ApplicationDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ApplicationDetailsPage({
  params,
}: ApplicationDetailsPageProps) {
  const { id } = await params;

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-text-secondary">
          Application ID: {id}
        </p>

        <h1 className="mt-2 text-2xl font-bold text-text-primary">
          Application Details
        </h1>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <p className="text-text-secondary">
          Details for application #{id}
        </p>
      </div>
    </div>
  );
}