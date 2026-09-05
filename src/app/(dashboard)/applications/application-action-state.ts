import type { ApplicationInput } from "@/lib/db";

export type ApplicationActionState = {
    status: "idle" | "error" | "success";
    message?: string;
    redirectTo?: string;
    fieldErrors?: Partial<Record<keyof ApplicationInput, string>>;
};

export const initialApplicationActionState: ApplicationActionState = {
    status: "idle",
};
