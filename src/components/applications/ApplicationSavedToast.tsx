"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useToast } from "@/components/ui/ToastProvider";

export default function ApplicationSavedToast({
    saved,
}: {
    saved?: string;
}) {
    const { showToast } = useToast();
    const router = useRouter();

    useEffect(() => {
        if (saved !== "1") {
            return;
        }

        showToast("Application saved.");
        router.replace(window.location.pathname);
    }, [router, saved, showToast]);

    return null;
}