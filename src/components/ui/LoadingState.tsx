import Skeleton from "@/components/ui/Skeleton";

export default function LoadingState() {
    return (
        <div
            className="rounded-xl border border-border bg-surface p-4 sm:p-6"
            aria-label="Loading"
        >
            <div className="space-y-4">
                <Skeleton className="h-5 w-40" />
                <Skeleton className="h-4 w-64" />

                <div className="space-y-3 pt-3">
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                </div>
            </div>
        </div>
    );
}