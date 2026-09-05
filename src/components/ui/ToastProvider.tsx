"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { CheckCircle2, X, XCircle } from "lucide-react";
import type { ReactNode } from "react";

type ToastType = "success" | "error";

type Toast = {
    id: number;
    message: string;
    type: ToastType;
};

type ToastContextValue = {
    showToast: (message: string, type?: ToastType) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error("useToast must be used within ToastProvider");
    }

    return context;
}

export default function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const removeToast = useCallback((id: number) => {
        setToasts((currentToasts) =>
            currentToasts.filter((toast) => toast.id !== id)
        );
    }, []);

    const showToast = useCallback(
        (message: string, type: ToastType = "success") => {
            const id = Date.now() + Math.random();

            setToasts((currentToasts) => {
                const isDuplicate = currentToasts.some(
                    (toast) => toast.message === message && toast.type === type
                );

                return isDuplicate
                    ? currentToasts
                    : [...currentToasts, { id, message, type }];
            });
        },
        []
    );

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}

            <div
                aria-live="polite"
                aria-atomic="true"
                className="fixed right-4 top-4 z-50 flex w-[calc(100%-2rem)] max-w-sm flex-col gap-3"
            >
                {toasts.map((toast) => (
                    <ToastItem
                        key={toast.id}
                        toast={toast}
                        onDismiss={removeToast}
                    />
                ))}
            </div>
        </ToastContext.Provider>
    );
}

function ToastItem({
    toast,
    onDismiss,
}: {
    toast: Toast;
    onDismiss: (id: number) => void;
}) {
    useEffect(() => {
        const timeoutId = window.setTimeout(() => onDismiss(toast.id), 3500);

        return () => window.clearTimeout(timeoutId);
    }, [onDismiss, toast.id]);

    const Icon = toast.type === "success" ? CheckCircle2 : XCircle;
    const colorClass = toast.type === "success" ? "text-success" : "text-danger";

    return (
        <div className="motion-rise-in flex items-start gap-3 rounded-lg border border-border bg-surface p-4 shadow-lg">
            <Icon size={20} className={`mt-0.5 shrink-0 ${colorClass}`} />

            <p className="flex-1 text-sm font-medium text-text-primary">
                {toast.message}
            </p>

            <button
                type="button"
                onClick={() => onDismiss(toast.id)}
                aria-label="Dismiss notification"
                className="rounded p-0.5 text-text-muted transition-colors hover:bg-surface-muted hover:text-text-primary"
            >
                <X size={16} />
            </button>
        </div>
    );
}
