import SettingsForm from "@/components/settings/SettingsForm";

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-text-primary">
          Settings
        </h1>

        <p className="mt-1 text-sm text-text-secondary">
          Manage your profile and application preferences.
        </p>
      </div>

      <SettingsForm />
    </div>
  );
}