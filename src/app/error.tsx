"use client";

import { AlertCircle, RefreshCw } from "lucide-react";
import Button from "@/components/ui/Button";

export default function RootError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-8 text-center shadow-xl">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-danger/15 text-danger">
          <AlertCircle size={28} />
        </div>

        <h2 className="mt-5 text-xl font-bold text-text-primary">
          Something went wrong
        </h2>

        <p className="mt-2 text-sm text-text-secondary">
          An unexpected error occurred. Please try again.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <Button type="button" onClick={() => reset()}>
            <RefreshCw size={16} />
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
}
