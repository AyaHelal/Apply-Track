import type { Application } from "@/types/application";

export const applications: Application[] = [
    {
        id: "1",
        company: "Google",
        position: "Frontend Developer",
        status: "Interview",
        appliedDate: "2026-08-20",
        jobUrl: "https://careers.google.com/",
        notes: "Technical interview scheduled.",
    },
    {
        id: "2",
        company: "Microsoft",
        position: "React Developer",
        status: "Applied",
        appliedDate: "2026-08-18",
        jobUrl: "https://careers.microsoft.com/",
        notes: "Waiting for response.",
    },
    {
        id: "3",
        company: "Amazon",
        position: "Frontend Engineer",
        status: "Rejected",
        appliedDate: "2026-08-15",
        jobUrl: "https://www.amazon.jobs/",
        notes: "Application rejected.",
    },
    {
        id: "4",
        company: "IBM",
        position: "Application Developer",
        status: "Assessment",
        appliedDate: "2026-08-22",
        jobUrl: "https://www.ibm.com/careers/",
        notes: "Coding assessment completed.",
    },
    {
        id: "5",
        company: "Meta",
        position: "Frontend Engineer",
        status: "Offer",
        appliedDate: "2026-08-10",
        jobUrl: "https://www.metacareers.com/",
        notes: "Offer received.",
    },
];