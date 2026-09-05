"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useToast } from "@/components/ui/ToastProvider";

export default function ApplicationDeletedToast({
    deleted,
}: {
    deleted?: string;
}) {
    const { showToast } = useToast();
    const router = useRouter();

    useEffect(() => {
        if (deleted !== "1") {
            return;
        }

        showToast("Application deleted.");
        router.replace("/applications");
    }, [deleted, router, showToast]);

    return null;
}