import { AlertCircle, RefreshCw } from "lucide-react";
import Button from "@/components/ui/Button";

type ErrorStateProps = {
    title?: string;
    description?: string;
    onRetry?: () => void;
};

export default function ErrorState({
    title = "Something went wrong",
    description = "We couldn't load this information. Please try again.",
    onRetry,
}: ErrorStateProps) {
    return (
        <div className="rounded-xl border border-dashed border-border bg-surface px-4 py-12 text-center sm:px-6">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-danger/10 text-danger">
                <AlertCircle size={24} />
            </div>

            <h2 className="mt-4 text-lg font-semibold text-text-primary">
                {title}
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm text-text-secondary">
                {description}
            </p>

            {onRetry && (
                <div className="mt-5">
                    <Button type="button" onClick={onRetry}>
                        <RefreshCw size={16} />
                        Try Again
                    </Button>
                </div>
            )}
        </div>
    );
}