"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SidebarToggle() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
            className="rounded-lg p-2 text-text-secondary hover:bg-surface-muted hover:text-primary transition-colors"
        >
            {isOpen ?<ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
    );
}