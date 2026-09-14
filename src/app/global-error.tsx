"use client";

import { AlertCircle, RefreshCw } from "lucide-react";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-[#0f172a] text-[#f8fafc] p-4">
        <div className="w-full max-w-md rounded-2xl border border-[#334155] bg-[#1e293b] p-8 text-center shadow-2xl">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#ef4444]/15 text-[#ef4444]">
            <AlertCircle size={28} />
          </div>

          <h1 className="mt-5 text-xl font-bold text-[#f8fafc]">
            Application Error
          </h1>

          <p className="mt-2 text-sm text-[#94a3b8]">
            An unexpected error occurred. Please try refreshing or return home.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={() => reset()}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#6366f1] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#4f46e5]"
            >
              <RefreshCw size={16} />
              Try Again
            </button>

            <a
              href="/"
              className="inline-flex items-center justify-center rounded-lg border border-[#334155] bg-[#0f172a] px-5 py-2.5 text-sm font-semibold text-[#f8fafc] transition-colors hover:bg-[#1e293b]"
            >
              Go to Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
