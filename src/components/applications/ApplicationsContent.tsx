"use client";

import { useMemo, useState } from "react";

import ApplicationFilters from "@/components/applications/ApplicationFilters";
import type { ApplicationSort } from "@/components/applications/ApplicationFilters";
import ApplicationCard from "@/components/applications/ApplicationCard";
import EmptyState from "@/components/ui/EmptyState";
import StatusBadge from "@/components/ui/StatusBadge";

import type { Application, ApplicationStatus } from "@/types/application";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import Link from "next/link";

type ApplicationsContentProps = {
    applications: Application[];
};

export default function ApplicationsContent({
    applications,
}: ApplicationsContentProps) {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState<ApplicationStatus | "all">("all");
    const [sort, setSort] = useState<ApplicationSort>("none");

    const filteredApplications = useMemo(() => {
        const searchTerm = search.trim().toLowerCase();

        const matchingApplications = applications.filter((application) => {
            const matchesSearch =
                searchTerm.length < 2 ||
                application.company.toLowerCase().includes(searchTerm) ||
                application.position.toLowerCase().includes(searchTerm);
            const matchesStatus = status === "all" || application.status === status;

            return matchesSearch && matchesStatus;
        });

        if (sort === "none") {
            return matchingApplications;
        }

        return [...matchingApplications].sort((firstApplication, secondApplication) => {
            switch (sort) {
                case "oldest":
                    return firstApplication.appliedDate.localeCompare(secondApplication.appliedDate);
                case "company-asc":
                    return firstApplication.company.localeCompare(secondApplication.company);
                case "company-desc":
                    return secondApplication.company.localeCompare(firstApplication.company);
                case "newest":
                default:
                    return secondApplication.appliedDate.localeCompare(firstApplication.appliedDate);
            }
        });
    }, [applications, search, sort, status]);

    const hasActiveFilters = search.trim().length >= 2 || status !== "all";

    return (
        <>
            <div className="motion-rise-in">
                <ApplicationFilters
                search={search}
                onSearchChange={setSearch}
                status={status}
                onStatusChange={setStatus}
                sort={sort}
                onSortChange={setSort}
                />
            </div>

            {filteredApplications.length === 0 ? (
                <EmptyState
                    icon={BriefcaseBusiness}
                    title={hasActiveFilters ? "No matching applications" : "No applications yet"}
                    description={
                        hasActiveFilters
                            ? "Try adjusting your search or status filter."
                            : "Start tracking your job search by adding your first application."
                    }
                />
            ) : (
                <>
                    {/* Mobile */}
                    <div className="motion-stagger space-y-4 sm:hidden">
                        {filteredApplications.map((application) => (
                            <ApplicationCard
                                key={application.id}
                                application={application}
                            />
                        ))}
                    </div>

                    {/* Desktop */}
                    <section className="motion-rise-in hidden sm:block">
                        <div className="overflow-hidden rounded-xl border border-border bg-surface">
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-175">
                                    <thead>
                                        <tr className="border-b border-border bg-surface-muted text-left">
                                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-text-secondary">
                                                Company
                                            </th>

                                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-text-secondary">
                                                Position
                                            </th>

                                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-text-secondary">
                                                Status
                                            </th>

                                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-text-secondary">
                                                Date
                                            </th>

                                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-text-secondary">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {filteredApplications.map((application) => (
                                            <tr
                                                key={application.id}
                                                className="border-b border-border last:border-b-0 transition-colors hover:bg-surface-muted/60"
                                            >
                                                <td className="px-6 py-5">
                                                    <span className="font-semibold text-text-primary">
                                                        {application.company}
                                                    </span>
                                                </td>

                                                <td className="px-6 py-5 text-sm text-text-secondary">
                                                    {application.position}
                                                </td>

                                                <td className="px-6 py-5">
                                                    <StatusBadge status={application.status} />
                                                </td>

                                                <td className="px-6 py-5 text-sm text-text-secondary">
                                                    {application.appliedDate}
                                                </td>

                                                <td className="px-6 py-5">
                                                    <Link
                                                        href={`/applications/${application.id}`}
                                                        className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-hover"
                                                    >
                                                        View
                                                        <ArrowRight size={16} />
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    );
}