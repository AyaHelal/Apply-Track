export type ApplicationStatus =
    | "Applied"
    | "Interview"
    | "Offer"
    | "Rejected";

export type Application = {
    id: string;
    company: string;
    position: string;
    status: ApplicationStatus;
    date: string;
};