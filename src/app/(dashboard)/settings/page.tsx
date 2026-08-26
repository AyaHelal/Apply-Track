export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-text-primary">
          Settings
        </h1>

        <p className="mt-1 text-text-secondary">
          Manage your account and application preferences.
        </p>
      </div>

      {/* Profile */}
      <section className="rounded-xl border border-border bg-surface p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-text-primary">
            Profile
          </h2>

          <p className="mt-1 text-sm text-text-secondary">
            Update your personal information.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-text-primary"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              defaultValue="Aya"
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-text-primary outline-none focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-text-primary"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              defaultValue="aya@example.com"
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-text-primary outline-none focus:border-primary"
            />
          </div>
        </div>
      </section>

      {/* Preferences */}
      <section className="rounded-xl border border-border bg-surface p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-text-primary">
            Preferences
          </h2>

          <p className="mt-1 text-sm text-text-secondary">
            Customize your application tracker.
          </p>
        </div>

        <div className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-medium text-text-primary">
                Email Notifications
              </p>

              <p className="text-sm text-text-secondary">
                Receive updates about your applications.
              </p>
            </div>

            <input
              type="checkbox"
              defaultChecked
              aria-label="Enable email notifications"
              className="h-5 w-5"
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-medium text-text-primary">
                Weekly Summary
              </p>

              <p className="text-sm text-text-secondary">
                Receive a weekly summary of your applications.
              </p>
            </div>

            <input
              type="checkbox"
              aria-label="Enable weekly summary"
              className="h-5 w-5"
            />
          </div>
        </div>
      </section>

      {/* Save */}
      <div className="flex justify-end">
        <button
          type="button"
          className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}