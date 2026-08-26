import NavLinks from "./NavLinks";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SidebarProps = {
  isCollapsed: boolean;
  onToggle: () => void;
};

export default function Sidebar({
  isCollapsed,
  onToggle,
}: SidebarProps) {
  return (
    <aside
      className={`hidden md:block min-h-[calc(100vh-4rem)] border-r border-border bg-surface p-4 transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-label={
          isCollapsed ? "Expand sidebar" : "Collapse sidebar"
        }
        className="mb-4 w-full rounded-lg p-2 text-text-secondary hover:bg-surface-muted hover:text-primary"
      >
        {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </button>

      <NavLinks isCollapsed={isCollapsed} />
    </aside>
  );
}