"use client";

import Link from "next/link";
import { Pencil, Trash2, X } from "lucide-react";
import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

import {
    deleteApplication,
} from "@/app/(dashboard)/applications/actions";
import { initialApplicationActionState } from "@/app/(dashboard)/applications/application-action-state";
import Button from "@/components/ui/Button";
import { useToast } from "@/components/ui/ToastProvider";
import type { Application } from "@/types/application";

export default function ApplicationActions({
    application,
}: {
    application: Application;
}) {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const { showToast } = useToast();
    const deleteAction = deleteApplication.bind(null, application.id);
    const [state, formAction] = useActionState(
        deleteAction,
        initialApplicationActionState
    );

    useEffect(() => {
        if (state.status === "error" && state.message) {
            showToast(state.message, "error");
            return;
        }

    }, [showToast, state.message, state.status]);

    useEffect(() => {
        if (!isDeleteModalOpen) {
            return;
        }

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsDeleteModalOpen(false);
            }
        };

        document.addEventListener("keydown", handleEscape);

        return () => document.removeEventListener("keydown", handleEscape);
    }, [isDeleteModalOpen]);

    return (
        <div className="flex flex-wrap gap-3">
            <Link
                href={`/applications/${application.id}/edit`}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium text-text-primary transition-colors hover:bg-surface-muted sm:flex-none"
            >
                <Pencil size={17} />
                Edit
            </Link>

            <Button
                type="button"
                variant="danger"
                onClick={() => setIsDeleteModalOpen(true)}
                className="flex-1 cursor-pointer sm:flex-none"
            >
                <Trash2 size={17} />
                Delete
            </Button>

            {isDeleteModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4"
                    role="presentation"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            setIsDeleteModalOpen(false);
                        }
                    }}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="delete-application-title"
                        className="motion-rise-in w-full max-w-md rounded-xl border border-border bg-surface p-6 shadow-xl"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h2
                                    id="delete-application-title"
                                    className="text-lg font-semibold text-text-primary"
                                >
                                    Delete application?
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-text-secondary">
                                    Are you sure you want to delete the application for {application.company}? This action cannot be undone.
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => setIsDeleteModalOpen(false)}
                                aria-label="Close delete confirmation"
                                className="rounded-lg p-1.5 text-text-muted transition-colors hover:bg-surface-muted hover:text-text-primary"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                            <Button
                                type="button"
                                variant="secondary"
                                onClick={() => setIsDeleteModalOpen(false)}
                                className="w-full cursor-pointer sm:w-auto"
                            >
                                Cancel
                            </Button>

                            <form action={formAction}>
                                <DeleteSubmitButton />
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function DeleteSubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            variant="danger"
            disabled={pending}
            className="w-full cursor-pointer sm:w-auto"
        >
            <Trash2 size={17} />
            {pending ? "Deleting..." : "Confirm Delete"}
        </Button>
    );
}
