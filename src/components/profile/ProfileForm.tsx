"use client";

import { useState, useRef, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Camera, Save, CheckCircle, ShieldCheck, Loader2 } from "lucide-react";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useToast } from "@/components/ui/ToastProvider";
import { updateProfileTitle } from "@/app/(dashboard)/profile/actions";

type ProfileFormProps = {
  initialJobTitle?: string;
};

export default function ProfileForm({ initialJobTitle = "" }: ProfileFormProps) {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const { showToast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState(initialJobTitle);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false);

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setEmail(user.primaryEmailAddress?.emailAddress || user.emailAddresses[0]?.emailAddress || "");
    }
  }, [user]);

  useEffect(() => {
    if (initialJobTitle) {
      setJobTitle(initialJobTitle);
    }
  }, [initialJobTitle]);

  const handleAvatarChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !user) return;

    try {
      setIsUploadingPhoto(true);
      await user.setProfileImage({ file });
      router.refresh();
      showToast("Profile photo updated.");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to update profile photo.";
      showToast(message);
    } finally {
      setIsUploadingPhoto(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!user) return;

    try {
      setIsSaving(true);

      // 1. Update Clerk user name
      await user.update({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
      });

      // 2. Update DB job title
      await updateProfileTitle(jobTitle);

      router.refresh();
      showToast("Profile updated successfully.");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to update profile.";
      showToast(message);
    } finally {
      setIsSaving(false);
    }
  };

  if (!isLoaded) {
    return (
      <div className="flex h-64 items-center justify-center rounded-xl border border-border bg-surface">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const displayName = [firstName, lastName].filter(Boolean).join(" ") || "User";
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <div className="space-y-6">
      {/* Active Profile Header Card */}
      <section className="rounded-xl border border-border bg-surface p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              {user?.imageUrl ? (
                <img
                  src={user.imageUrl}
                  alt={displayName}
                  className="h-20 w-20 rounded-full border-2 border-primary/20 object-cover"
                />
              ) : (
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                  {initial}
                </div>
              )}

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploadingPhoto}
                title="Change photo"
                className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white shadow transition-transform hover:scale-110 disabled:opacity-50"
              >
                {isUploadingPhoto ? (
                  <Loader2 size={13} className="animate-spin" />
                ) : (
                  <Camera size={13} />
                )}
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-text-primary">
                  {displayName}
                </h2>
                <span className="inline-flex items-center gap-1 rounded-full bg-success/15 px-2.5 py-0.5 text-xs font-semibold text-success">
                  <CheckCircle size={12} />
                  Active Profile
                </span>
              </div>

              <p className="text-sm text-text-secondary">
                {jobTitle || "Job Seeker"}
              </p>

              <p className="mt-1 text-xs text-text-muted">
                {email}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploadingPhoto}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-3 py-2 text-xs font-medium text-text-primary transition-colors hover:bg-surface-muted"
          >
            <Camera size={14} />
            {isUploadingPhoto ? "Uploading..." : "Change Photo"}
          </button>
        </div>
      </section>

      {/* Edit Profile Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <section className="rounded-xl border border-border bg-surface">
          <div className="border-b border-border px-6 py-4">
            <h2 className="font-semibold text-text-primary">
              Personal Information
            </h2>
            <p className="mt-0.5 text-xs text-text-secondary">
              Update your name and job title visible across ApplyTrack.
            </p>
          </div>

          <div className="grid gap-5 p-6 sm:grid-cols-2">
            <Input
              id="firstName"
              label="First Name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />

            <Input
              id="lastName"
              label="Last Name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <div className="sm:col-span-2">
              <Input
                id="jobTitle"
                label="Job Title / Role"
                type="text"
                placeholder="e.g. Frontend Developer, Product Designer"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-text-primary">
                Email Address
              </label>
              <div className="relative mt-1">
                <input
                  id="email"
                  type="email"
                  value={email}
                  disabled
                  className="w-full rounded-lg border border-border bg-surface-muted px-3 py-2 text-sm text-text-muted cursor-not-allowed"
                />
                <span className="absolute right-3 top-2.5 flex items-center gap-1 text-xs text-text-muted">
                  <ShieldCheck size={14} className="text-success" />
                  Verified by Clerk
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={isSaving}
            className="w-full cursor-pointer sm:w-auto"
          >
            {isSaving ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save size={16} />
                Save Profile
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}