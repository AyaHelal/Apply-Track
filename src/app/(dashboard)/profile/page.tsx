import ProfileForm from "@/components/profile/ProfileForm";

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div className="motion-rise-in">
        <h1 className="text-2xl font-bold text-text-primary">
          Profile
        </h1>

        <p className="mt-1 text-sm text-text-secondary">
          Manage your personal information and application preferences.
        </p>
      </div>

      <div className="motion-rise-in">
        <ProfileForm />
      </div>
    </div>
  );
}