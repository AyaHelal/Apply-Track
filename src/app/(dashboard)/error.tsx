"use client";

import { AlertCircle, RefreshCw } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Error({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="flex min-h-100 items-center justify-center">
            <div className="w-full max-w-md rounded-xl border border-dashed border-border bg-surface px-4 py-12 text-center sm:px-6">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-danger/10 text-danger">
                    <AlertCircle size={24} />
                </div>

                <h2 className="mt-4 text-lg font-semibold text-text-primary">
                    Something went wrong
                </h2>

                <p className="mt-2 text-sm text-text-secondary">
                    We were unable to load this page. Please try again.
                </p>

                <div className="mt-5">
                    <Button type="button" onClick={() => reset()}>
                        <RefreshCw size={16} />
                        Try Again
                    </Button>
                </div>
            </div>
        </div>
    );
}