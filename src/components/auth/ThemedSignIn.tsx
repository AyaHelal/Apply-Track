"use client";

import { SignIn } from "@clerk/nextjs";

export default function ThemedSignIn() {
  return (
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
          logoBox: "mx-auto h-28 w-28",
          logoImage: "h-28 w-28 object-contain",
          card: "!bg-surface !border-border border shadow-xl rounded-2xl w-full",
          headerTitle: "!text-text-primary",
          headerSubtitle: "!text-text-secondary",
          formFieldLabel: "!text-text-primary",
          formFieldInput: "!bg-surface !border-border !text-text-primary focus:!border-primary",
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
  );
}
