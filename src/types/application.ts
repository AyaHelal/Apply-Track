export type ApplicationStatus =
    | "Applied"
    | "Assessment"
    | "Interview"
    | "Offer"
    | "Rejected";

export type Application = {
    id: string;
    company: string;
    position: string;
    status: ApplicationStatus;
    appliedDate: string;
    jobUrl: string;
    notes: string;
};