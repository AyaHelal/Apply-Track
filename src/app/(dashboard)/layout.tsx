import { cookies } from "next/headers";

import Navbar from "@/components/layout/Navbar";
import SidebarShell from "@/components/layout/SidebarShell";
import { syncUser } from "@/lib/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await syncUser();

  const cookieStore = await cookies();

  const sidebarCollapsed =
    cookieStore.get("sidebar-collapsed")?.value === "true";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="flex">
        <SidebarShell initialCollapsed={sidebarCollapsed} />

        <main className="motion-fade-in min-w-0 flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}