import Link from "next/link";
import Logo from "@/components/layout/Logo";
import ThemeToggle from "@/components/ui/ThemeToggle";
import ThemedSignIn from "@/components/auth/ThemedSignIn";

export default function LoginPage() {
  return (
    <div className="motion-fade-in relative flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      {/* Top Bar with Logo and Theme Toggle */}
      <div className="absolute right-4 top-4 sm:right-6 sm:top-6">
        <ThemeToggle />
      </div>

      <div className="mb-6 flex flex-col items-center">
        <Link href="/" className="transition-opacity hover:opacity-80">
          <Logo size="desktop" />
        </Link>
      </div>

      <div className="motion-rise-in flex w-full max-w-md justify-center">
        <ThemedSignIn />
      </div>
    </div>
  );
}
