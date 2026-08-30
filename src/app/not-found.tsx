import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-background px-4">
            <div className="w-full max-w-md text-center">
                {/* Icon */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <SearchX size={30} />
                </div>

                {/* Content */}
                <p className="mt-6 text-6xl font-bold tracking-tight text-primary">
                    404
                </p>

                <h1 className="mt-4 text-2xl font-bold text-text-primary">
                    Page not found
                </h1>

                <p className="mt-2 text-sm leading-6 text-text-secondary">
                    Sorry, we couldn&apos;t find the page you&apos;re looking for.
                    It may have been moved or no longer exists.
                </p>

                {/* Action */}
                <Link
                    href="/"
                    className="mt-7 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
                >
                    <ArrowLeft size={17} />
                    Back to Home
                </Link>
            </div>
        </main>
    );
}