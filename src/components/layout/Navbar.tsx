import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { SignOutButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";

import Logo from "@/components/layout/Logo";
import MobileNavigation from "@/components/layout/MobileNavigation";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { getCurrentDbUser } from "@/lib/auth";

export default async function Navbar() {
  const clerkUser = await currentUser();
  const dbUser = await getCurrentDbUser();

  const displayName =
    clerkUser?.firstName ||
    clerkUser?.username ||
    clerkUser?.emailAddresses[0]?.emailAddress.split("@")[0] ||
    "User";

  const jobTitle = dbUser?.jobTitle || "Job Seeker";
  const imageUrl = clerkUser?.imageUrl || dbUser?.imageUrl;
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-surface px-4 sm:px-6">
      {/* Desktop Logo */}
      <div className="hidden md:block">
        <Logo size="desktop" />
      </div>

      {/* Mobile Menu */}
      <MobileNavigation />

      {/* User */}
      <div className="flex items-center gap-2 sm:gap-3">
        <Link
          href="/profile"
          className="group flex items-center gap-3 rounded-lg p-1.5 transition-colors hover:bg-surface-muted"
          title="View profile"
        >
          <div className="hidden text-right sm:block">
            <p className="text-sm font-medium text-text-primary transition-colors group-hover:text-primary">
              {displayName}
            </p>

            <p className="text-xs text-text-secondary">
              {jobTitle}
            </p>
          </div>

          {imageUrl ? (
            <img
              src={imageUrl}
              alt={displayName}
              className="h-9 w-9 rounded-full border border-border object-cover"
            />
          ) : (
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-semibold text-white">
              {initial}
            </div>
          )}
        </Link>

        <ThemeToggle />

        <SignOutButton redirectUrl="/">
          <button
            type="button"
            title="Sign out"
            aria-label="Sign out"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-text-secondary transition-colors hover:bg-surface-muted hover:text-danger cursor-pointer"
          >
            <LogOut size={16} />
          </button>
        </SignOutButton>
      </div>
    </header>
  );
}