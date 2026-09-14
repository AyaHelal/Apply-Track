import type { Metadata } from "next";
import ProfileForm from "@/components/profile/ProfileForm";
import { getCurrentDbUser } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Profile",
};

export default async function ProfilePage() {
  const dbUser = await getCurrentDbUser();

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div className="motion-rise-in">
        <h1 className="text-2xl font-bold text-text-primary">
          Profile
        </h1>

        <p className="mt-1 text-sm text-text-secondary">
          Manage your personal information, photo, and job title.
        </p>
      </div>

      <div className="motion-rise-in">
        <ProfileForm initialJobTitle={dbUser?.jobTitle ?? ""} />
      </div>
    </div>
  );
}