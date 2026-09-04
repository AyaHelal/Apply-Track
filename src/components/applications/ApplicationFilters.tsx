"use client";

import { Search } from "lucide-react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import type { ApplicationStatus } from "@/types/application";

export type ApplicationSort =
    | "none"
    | "newest"
    | "oldest"
    | "company-asc"
    | "company-desc";

type ApplicationFiltersProps = {
    search: string;
    onSearchChange: (value: string) => void;
    status: ApplicationStatus | "all";
    onStatusChange: (value: ApplicationStatus | "all") => void;
    sort: ApplicationSort;
    onSortChange: (value: ApplicationSort) => void;
};

export default function ApplicationFilters({
    search,
    onSearchChange,
    status,
    onStatusChange,
    sort,
    onSortChange,
}: ApplicationFiltersProps) {
    return (
        <div className="grid gap-4 rounded-xl border border-border bg-surface p-4 sm:grid-cols-3">
            <div className="relative">
                <Search
                    size={18}
                    className="absolute left-3 top-12 -translate-y-1/2 text-text-muted"
                />

                <Input
                    id="application-search"
                    label="Search Applications"
                    placeholder="Search by company or position..."
                    value={search}
                    onChange={(event) => onSearchChange(event.target.value)}
                    className="pl-10"
                />
            </div>

            <Select
                id="application-status"
                label="Filter by Status"
                value={status}
                onChange={(event) =>
                    onStatusChange(event.target.value as ApplicationStatus | "all")
                }
            >
                <option value="all">All statuses</option>
                <option value="Applied">Applied</option>
                <option value="Assessment">Assessment</option>
                <option value="Interview">Interview</option>
                <option value="Offer">Offer</option>
                <option value="Rejected">Rejected</option>
            </Select>

            <Select
                id="application-sort"
                label="Sort by"
                value={sort}
                onChange={(event) => onSortChange(event.target.value as ApplicationSort)}
            >
                <option value="none">No sorting</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="company-asc">Company A-Z</option>
                <option value="company-desc">Company Z-A</option>
            </Select>
        </div>
    );
}