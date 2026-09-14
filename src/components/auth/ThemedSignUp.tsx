"use client";

import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useIsDarkMode } from "@/hooks/useIsDarkMode";

export default function ThemedSignUp() {
  const isDark = useIsDarkMode();

  if (isDark === null) {
    return (
      <div className="h-[520px] w-full max-w-md animate-pulse rounded-2xl border border-border bg-surface" />
    );
  }

  return (
    <SignUp
      appearance={{
        theme: isDark ? dark : undefined,
        variables: {
          colorBackground: isDark ? "#1e293b" : "#ffffff",
          colorInput: isDark ? "#0f172a" : "#ffffff",
          colorInputForeground: isDark ? "#f8fafc" : "#0f172a",
          colorForeground: isDark ? "#f8fafc" : "#0f172a",
          colorMutedForeground: isDark ? "#cbd5e1" : "#64748b",
          colorNeutral: isDark ? "#94a3b8" : "#0f172a",
          colorPrimary: isDark ? "#6366f1" : "#4f46e5",
        },
        elements: {
          rootBox: "w-full",
          card: isDark
            ? "!bg-[#1e293b] !border-[#334155] border shadow-2xl rounded-2xl w-full"
            : "!bg-white !border-[#e2e8f0] border shadow-xl rounded-2xl w-full",
          headerTitle: isDark ? "!text-[#f8fafc]" : "!text-[#0f172a]",
          headerSubtitle: isDark ? "!text-[#cbd5e1]" : "!text-[#64748b]",
          formFieldLabel: isDark ? "!text-[#cbd5e1]" : "!text-[#0f172a]",
          formFieldInput: isDark
            ? "!bg-[#0f172a] !border-[#334155] !text-[#f8fafc] focus:!border-[#6366f1]"
            : "!bg-white !border-[#e2e8f0] !text-[#0f172a] focus:!border-[#4f46e5]",
          footer: isDark ? "!bg-[#1e293b]" : "!bg-white",
          footerActionLink: isDark
            ? "!text-[#818cf8] hover:underline font-medium"
            : "!text-[#4f46e5] hover:underline font-medium",
          socialButtonsBlockButton: isDark
            ? "!bg-[#0f172a] !border-[#334155] !text-[#f8fafc] hover:!bg-[#334155]"
            : "!bg-white !border-[#e2e8f0] !text-[#0f172a] hover:!bg-[#f1f5f9]",
          socialButtonsBlockButtonText: isDark
            ? "!text-[#f8fafc]"
            : "!text-[#0f172a]",
          dividerLine: isDark ? "!bg-[#334155]" : "!bg-[#e2e8f0]",
          dividerText: isDark ? "!text-[#cbd5e1]" : "!text-[#64748b]",
          formButtonPrimary: isDark
            ? "!bg-[#6366f1] hover:!bg-[#818cf8] !text-white text-sm font-semibold transition-colors"
            : "!bg-[#4f46e5] hover:!bg-[#4338ca] !text-white text-sm font-semibold transition-colors",
          identityPreview: isDark
            ? "!bg-[#0f172a] !border-[#334155]"
            : "!bg-[#f8fafc] !border-[#e2e8f0]",
          identityPreviewText: isDark ? "!text-[#f8fafc]" : "!text-[#0f172a]",
          identityPreviewEditButton: isDark
            ? "!text-[#818cf8]"
            : "!text-[#4f46e5]",
        },
      }}
    />
  );
}
