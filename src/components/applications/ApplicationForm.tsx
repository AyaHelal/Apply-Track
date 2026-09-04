"use client";

import { FormEvent, useState } from "react";
import { Save } from "lucide-react";
import Button from "@/components/ui/Button";
import ButtonLink from "@/components/ui/ButtonLink";
import type { ApplicationStatus } from "@/types/application";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

export default function ApplicationForm() {
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [status, setStatus] =
        useState<ApplicationStatus>("Applied");
    const [appliedDate, setAppliedDate] = useState("");
    const [notes, setNotes] = useState("");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

    }

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-xl border border-border bg-surface p-4 sm:p-6"
        >
            {/* Company */}
            <div>
                <Input
                    id="company"
                    label="Company Name"
                    type="text"
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                    placeholder="e.g. Google"
                    required
                />
            </div>

            {/* Position */}
            <div className="sm:col-span-2">
                <Input
                    id="position"
                    label="Position"
                    type="text"
                    value={position}
                    onChange={(event) => setPosition(event.target.value)}
                    placeholder="e.g. Frontend Developer"
                    required
                />
            </div>

            {/* Status */}
            <div className="space-y-2">
                <Select
                    id="status"
                    label="Status"
                    value={status}
                    onChange={(event) =>
                        setStatus(event.target.value as ApplicationStatus)
                    }
                >
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Offer">Offer</option>
                    <option value="Rejected">Rejected</option>
                </Select>
            </div>

            {/* Date */}
            <div className="space-y-2">
                <Input
                    id="appliedDate"
                    label="Applied Date"
                    type="date"
                    value={appliedDate}
                    onChange={(event) => setAppliedDate(event.target.value)}
                />
            </div>

            {/* Notes */}
            <div className="space-y-2">
                <label
                    htmlFor="notes"
                    className="text-sm font-medium text-text-primary"
                >
                    Notes
                </label>

                <textarea
                    id="notes"
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                    placeholder="Add some notes..."
                    rows={4}
                    className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-text-primary outline-none focus:border-primary"
                />
            </div>

            {/* Actions */}
            <div className="flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:justify-end">
                <ButtonLink href="/applications" variant="secondary" className="w-full sm:w-auto">
                    Cancel
                </ButtonLink>

                <Button type="submit" className="w-full cursor-pointer sm:w-auto">
                    <Save size={17} />
                    Save Application
                </Button>
            </div>
        </form>
    );
}