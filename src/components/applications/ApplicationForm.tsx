"use client";

import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { Save } from "lucide-react";
import Button from "@/components/ui/Button";
import ButtonLink from "@/components/ui/ButtonLink";
import type { ApplicationStatus } from "@/types/application";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { useToast } from "@/components/ui/ToastProvider";
import {
    createApplication,
    updateApplication,
} from "@/app/(dashboard)/applications/actions";
import { initialApplicationActionState } from "@/app/(dashboard)/applications/application-action-state";
import type { Application } from "@/types/application";

export default function ApplicationForm({
    application,
}: {
    application?: Application;
}) {
    const { showToast } = useToast();
    const router = useRouter();
    const [company, setCompany] = useState(application?.company ?? "");
    const [position, setPosition] = useState(application?.position ?? "");
    const [status, setStatus] = useState<ApplicationStatus>(
        application?.status ?? "Applied"
    );
    const [appliedDate, setAppliedDate] = useState(application?.appliedDate ?? "");
    const [jobUrl, setJobUrl] = useState(application?.jobUrl ?? "");
    const [notes, setNotes] = useState(application?.notes ?? "");
    const action = application
        ? updateApplication.bind(null, application.id)
        : createApplication;
    const [state, formAction] = useActionState(
        action,
        initialApplicationActionState
    );

    useEffect(() => {
        if (state.status === "error" && state.message) {
            showToast(state.message, "error");
            return;
        }

        if (state.status !== "success" || !state.redirectTo) {
            return;
        }

        router.push(`${state.redirectTo}?saved=1`);
    }, [router, showToast, state]);

    return (
        <form
            action={formAction}
            className="motion-stagger space-y-6 rounded-xl border border-border bg-surface p-4 sm:p-6"
        >
            {/* Company */}
            <div>
                <Input
                    id="company"
                    name="company"
                    label="Company Name"
                    type="text"
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                    placeholder="e.g. Google"
                    aria-invalid={Boolean(state.fieldErrors?.company)}
                    aria-describedby={state.fieldErrors?.company ? "company-error" : undefined}
                    required
                />
                <FieldError id="company-error" message={state.fieldErrors?.company} />
            </div>

            {/* Position */}
            <div className="sm:col-span-2">
                <Input
                    id="position"
                    name="position"
                    label="Position"
                    type="text"
                    value={position}
                    onChange={(event) => setPosition(event.target.value)}
                    placeholder="e.g. Frontend Developer"
                    aria-invalid={Boolean(state.fieldErrors?.position)}
                    aria-describedby={state.fieldErrors?.position ? "position-error" : undefined}
                    required
                />
                <FieldError id="position-error" message={state.fieldErrors?.position} />
            </div>

            {/* Status */}
            <div className="space-y-2">
                <Select
                    id="status"
                    name="status"
                    label="Status"
                    value={status}
                    onChange={(event) =>
                        setStatus(event.target.value as ApplicationStatus)
                    }
                >
                    <option value="Applied">Applied</option>
                    <option value="Assessment">Assessment</option>
                    <option value="Interview">Interview</option>
                    <option value="Offer">Offer</option>
                    <option value="Rejected">Rejected</option>
                </Select>
                <FieldError id="status-error" message={state.fieldErrors?.status} />
            </div>

            {/* Date */}
            <div className="space-y-2">
                <Input
                    id="appliedDate"
                    name="appliedDate"
                    label="Applied Date"
                    type="date"
                    value={appliedDate}
                    onChange={(event) => setAppliedDate(event.target.value)}
                    aria-invalid={Boolean(state.fieldErrors?.appliedDate)}
                    aria-describedby={state.fieldErrors?.appliedDate ? "applied-date-error" : undefined}
                />
                <FieldError id="applied-date-error" message={state.fieldErrors?.appliedDate} />
            </div>

            {/* Job posting */}
            <div>
                <Input
                    id="jobUrl"
                    name="jobUrl"
                    label="Job Posting URL"
                    type="url"
                    value={jobUrl}
                    onChange={(event) => setJobUrl(event.target.value)}
                    placeholder="https://example.com/job"
                    aria-invalid={Boolean(state.fieldErrors?.jobUrl)}
                    aria-describedby={state.fieldErrors?.jobUrl ? "job-url-error" : undefined}
                />
                <FieldError id="job-url-error" message={state.fieldErrors?.jobUrl} />
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
                    name="notes"
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

                <SubmitButton />
            </div>
        </form>
    );
}

function FieldError({ id, message }: { id: string; message?: string }) {
    if (!message) {
        return null;
    }

    return (
        <p id={id} className="mt-2 text-sm text-danger">
            {message}
        </p>
    );
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            disabled={pending}
            className="w-full cursor-pointer sm:w-auto"
        >
            <Save size={17} />
            {pending ? "Saving..." : "Save Application"}
        </Button>
    );
}