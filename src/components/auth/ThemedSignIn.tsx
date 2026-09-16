"use client";

import { SignIn } from "@clerk/nextjs";
import Logo from "@/components/layout/Logo";

export default function ThemedSignIn() {
  return (
    <div className="flex w-full flex-col items-center gap-5">
      <Logo size="auth" />
      <SignIn
        appearance={{
          variables: {
            colorBackground: "var(--surface)",
            colorInput: "var(--surface)",
            colorInputForeground: "var(--text-primary)",
            colorForeground: "var(--text-primary)",
            colorMutedForeground: "var(--text-secondary)",
            colorNeutral: "var(--text-primary)",
            colorPrimary: "var(--primary)",
          },
          elements: {
            rootBox: "w-full",
            logoBox: "!hidden !h-0 !w-0 !overflow-hidden !m-0 !p-0",
            logoImage: "!hidden !h-0 !w-0",
            card: "!bg-surface !border-border border shadow-xl rounded-2xl w-full",
            headerTitle: "!text-text-primary",
            headerSubtitle: "!text-text-secondary",
            formFieldLabel: "!text-text-primary",
            formFieldInput: "!bg-surface !border-border !text-text-primary focus:!border-primary",
            formFieldInputShowPasswordButton: "!text-slate-700 dark:!text-slate-950",
            formFieldInputShowPasswordIcon: "!text-slate-700 dark:!text-slate-950",
            footer: "!bg-surface",
            footerActionLink: "!text-primary hover:underline font-medium",
            socialButtonsBlockButton: "!bg-surface !border-border !text-text-primary hover:!bg-surface-muted",
            socialButtonsBlockButtonText: "!text-text-primary",
            dividerLine: "!bg-border",
            dividerText: "!text-text-secondary",
            formButtonPrimary: "!bg-primary hover:!bg-primary-hover !text-white text-sm font-semibold transition-colors",
            identityPreview: "!bg-surface-muted !border-border",
            identityPreviewText: "!text-text-primary",
            identityPreviewEditButton: "!text-primary",
          },
        }}
      />
    </div>
  );
}
