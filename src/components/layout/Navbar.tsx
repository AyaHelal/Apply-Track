import Logo from "@/components/layout/Logo";
import MobileNavigation from "@/components/layout/MobileNavigation";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  return (
    <header className="h-16 border-b border-border bg-surface px-6 flex items-center justify-between">

      {/* Desktop Logo */}
      <div className="hidden md:block">
        <Logo size="desktop"/>
      </div>

      {/* Mobile Menu */}
      <MobileNavigation />

      {/* User */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:block text-right">
          <p className="text-sm font-medium text-text-primary">
            Aya
          </p>

          <p className="text-xs text-text-secondary">
            Job Seeker
          </p>
        </div>

        <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
          <span className="text-sm font-semibold text-white">
            A
          </span>
        </div>
        <ThemeToggle />
      </div>

    </header>
  );
}