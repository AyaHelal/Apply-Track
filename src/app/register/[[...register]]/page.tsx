import ThemeToggle from "@/components/ui/ThemeToggle";
import ThemedSignUp from "@/components/auth/ThemedSignUp";

export default function RegisterPage() {
  return (
    <div className="motion-fade-in relative flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      {/* Top Bar with Theme Toggle */}
      <div className="absolute right-4 top-4 sm:right-6 sm:top-6">
        <ThemeToggle />
      </div>

      <div className="motion-rise-in flex w-full max-w-md justify-center">
        <ThemedSignUp />
      </div>
    </div>
  );
}
