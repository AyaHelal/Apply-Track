"use client";

import Image from "next/image";
import { useState } from "react";

type LogoProps = {
    size?: "desktop" | "mobile";
};

export default function Logo({ size = "desktop" }: LogoProps) {
    const [imageError, setImageError] = useState(false);

    const logoSize = size === "mobile"
        ? { width: 120, height: 120 }
        : { width: 130, height: 130 };

    if (imageError) {
        return (
            <div className="flex items-center gap-2">
                <div
                    className={`rounded-lg bg-primary flex items-center justify-center ${
                        size === "mobile" ? "w-11 h-11" : "w-9 h-9"
                    }`}
                >
                    <span className="text-white font-bold">A</span>
                </div>

                <span
                    className={`font-bold text-text-primary ${
                        size === "mobile" ? "text-xl" : "text-lg"
                    }`}
                >
                    ApplyTrack
                </span>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-3">
            {/* Light Mode Logo */}
            <div className="flex items-center dark:hidden">
                <Image
                    src="/ApplyLogo.jpg"
                    alt="ApplyTrack logo"
                    width={logoSize.width}
                    height={logoSize.height}
                    onError={() => setImageError(true)}
                    className={`w-auto object-contain ${
                        size === "mobile" ? "h-9" : "h-11"
                    }`}
                    priority
                />
            </div>

            {/* Dark Mode Logo */}
            <div className="hidden items-center gap-3 dark:flex">
                <Image
                    src="/Logo.jpg"
                    alt="ApplyTrack logo"
                    width={logoSize.width}
                    height={logoSize.height}
                    onError={() => setImageError(true)}
                    className={`w-auto object-contain ${
                        size === "mobile" ? "h-9" : "h-11"
                    }`}
                    priority
                />
                <div className="flex flex-col">
                    <span className="font-bold text-text-primary text-lg">
                        ApplyTrack
                    </span>
                    
                    <span className="text-[0.6rem] text-text-secondary">
                        Job Application Tracker
                    </span>
                </div>
            </div>
        </div>
    );
}