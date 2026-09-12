"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import {
    createApplication as createApplicationRecord,
    deleteApplication as deleteApplicationRecord,
    updateApplication as updateApplicationRecord,
    type ApplicationInput,
} from "@/lib/db";
import type { ApplicationStatus } from "@/types/application";
import type { ApplicationActionState } from "./application-action-state";

const applicationStatuses: ApplicationStatus[] = [
    "Applied",
    "Assessment",
    "Interview",
    "Offer",
    "Rejected",
];

function normalizeInput(formData: FormData): ApplicationInput {
    return {
        company: String(formData.get("company") ?? "").trim(),
        position: String(formData.get("position") ?? "").trim(),
        status: String(formData.get("status") ?? "Applied") as ApplicationInput["status"],
        appliedDate: String(formData.get("appliedDate") ?? ""),
        jobUrl: String(formData.get("jobUrl") ?? "").trim(),
        notes: String(formData.get("notes") ?? "").trim(),
    };
}

function validateInput(input: ApplicationInput): ApplicationActionState | null {
    const fieldErrors: ApplicationActionState["fieldErrors"] = {};

    if (!input.company) {
        fieldErrors.company = "Company is required.";
    }

    if (!input.position) {
        fieldErrors.position = "Position is required.";
    }

    if (!applicationStatuses.includes(input.status)) {
        fieldErrors.status = "Select a valid status.";
    }

    if (!input.appliedDate) {
        fieldErrors.appliedDate = "Applied date is required.";
    } else {
        const date = new Date(`${input.appliedDate}T00:00:00Z`);

        if (
            !/^\d{4}-\d{2}-\d{2}$/.test(input.appliedDate) ||
            Number.isNaN(date.getTime()) ||
            date.toISOString().slice(0, 10) !== input.appliedDate
        ) {
            fieldErrors.appliedDate = "Enter a valid applied date.";
        }
    }

    if (input.jobUrl) {
        try {
            const url = new URL(input.jobUrl);

            if (url.protocol !== "http:" && url.protocol !== "https:") {
                fieldErrors.jobUrl = "Job URL must start with http:// or https://.";
            }
        } catch {
            fieldErrors.jobUrl = "Enter a valid job URL.";
        }
    }

    if (Object.keys(fieldErrors).length > 0) {
        return {
            status: "error",
            message: "Please fix the highlighted fields.",
            fieldErrors,
        };
    }

    return null;
}

export async function createApplication(
    _previousState: ApplicationActionState,
    formData: FormData
): Promise<ApplicationActionState> {
    const input = normalizeInput(formData);
    const validationError = validateInput(input);

    if (validationError) {
        return validationError;
    }

    try {
		const application = await createApplicationRecord(input);

        revalidatePath("/applications");
        revalidatePath("/dashboard");

        return {
            status: "success" as const,
            message: "Application created.",
            redirectTo: `/applications/${application.id}`,
        };
    } catch {
        return {
            status: "error" as const,
            message: "Something went wrong while creating the application.",
        };
    }
}

export async function updateApplication(
    id: string,
    _previousState: ApplicationActionState,
    formData: FormData
): Promise<ApplicationActionState> {
    const input = normalizeInput(formData);
    const validationError = validateInput(input);

    if (validationError) {
        return validationError;
    }

    let application;

    try {
		application = await updateApplicationRecord(id, input);
    } catch {
        return {
            status: "error" as const,
            message: "Something went wrong while updating the application.",
        };
    }

    if (!application) {
        return {
            status: "error" as const,
            message: "Application not found.",
        };
    }

    revalidatePath("/applications");
    revalidatePath(`/applications/${id}`);
    revalidatePath("/dashboard");

    return {
        status: "success" as const,
        message: "Application updated.",
        redirectTo: `/applications/${id}`,
    };
}

export async function deleteApplication(
    id: string,
    _previousState: ApplicationActionState,
    _formData: FormData
): Promise<ApplicationActionState> {
    void _previousState;
    void _formData;

    let deleted;

    try {
		deleted = await deleteApplicationRecord(id);
    } catch {
        return {
            status: "error" as const,
            message: "Something went wrong while deleting the application.",
        };
    }

    if (!deleted) {
        return {
            status: "error" as const,
            message: "Application could not be deleted because it was not found.",
        };
    }

    revalidatePath("/applications");
    revalidatePath("/dashboard");

    redirect("/applications?deleted=1");
}
