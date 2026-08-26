import { cookies } from "next/headers";

import Navbar from "@/components/layout/Navbar";
import SidebarShell from "@/components/layout/SidebarShell";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();

  const sidebarCollapsed =
    cookieStore.get("sidebar-collapsed")?.value === "true";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="flex">
        <SidebarShell initialCollapsed={sidebarCollapsed} />

        <main className="flex-1 min-w-0 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}