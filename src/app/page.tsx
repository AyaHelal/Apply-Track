import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, CheckCircle2, BarChart3, LogIn } from "lucide-react";
import Logo from "@/components/layout/Logo";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function LandingPage() {
  return (
    <main className="motion-fade-in min-h-screen bg-background text-text-primary">
      {/* Header */}
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2"
          >
          <Logo/>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-primary"
            >
              Login
              <LogIn size={17} />
            </Link>

            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="motion-rise-in mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <BriefcaseBusiness size={28} />
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Track your job applications
            <span className="block text-primary">
              in one simple place.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
            Keep your applications organized, track interviews and offers,
            and stay focused throughout your job search.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              Get Started
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-surface px-5 py-3 text-sm font-semibold text-text-primary transition-colors hover:bg-surface-muted"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-surface-muted px-4 py-16 sm:px-6 lg:px-8">
        <div className="motion-stagger mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
          <FeatureCard
            icon={BriefcaseBusiness}
            title="Track Applications"
            description="Keep all your job applications organized in one place."
          />

          <FeatureCard
            icon={CheckCircle2}
            title="Track Your Status"
            description="Know which applications are applied, in interview, offered, or rejected."
          />

          <FeatureCard
            icon={BarChart3}
            title="See Your Progress"
            description="Get a clear overview of your job search and application activity."
          />
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof BriefcaseBusiness;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon size={22} />
      </div>

      <h2 className="mt-5 font-semibold text-text-primary">
        {title}
      </h2>

      <p className="mt-2 text-sm leading-6 text-text-secondary">
        {description}
      </p>
    </div>
  );
}