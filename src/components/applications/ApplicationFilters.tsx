"use client";

import { Search } from "lucide-react";
import Input from "@/components/ui/Input";

type ApplicationFiltersProps = {
    search: string;
    onSearchChange: (value: string) => void;
};

export default function ApplicationFilters({
    search,
    onSearchChange,
}: ApplicationFiltersProps) {
    return (
        <div className="rounded-xl border border-border bg-surface p-4">
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
        </div>
    );
}