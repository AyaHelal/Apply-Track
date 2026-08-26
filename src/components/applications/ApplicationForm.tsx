"use client";

import { FormEvent, useState } from "react";

export default function ApplicationForm() {
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [status, setStatus] = useState("Applied");
    const [date, setDate] = useState("");
    const [notes, setNotes] = useState("");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

    }

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-xl border border-border bg-surface p-6"
        >
            {/* Company */}
            <div className="space-y-2">
                <label
                    htmlFor="company"
                    className="text-sm font-medium text-text-primary"
                >
                    Company Name
                </label>

                <input
                    id="company"
                    type="text"
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                    placeholder="e.g. Google"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-text-primary outline-none focus:border-primary"
                />
            </div>

            {/* Position */}
            <div className="space-y-2">
                <label
                    htmlFor="position"
                    className="text-sm font-medium text-text-primary"
                >
                    Position
                </label>

                <input
                    id="position"
                    type="text"
                    value={position}
                    onChange={(event) => setPosition(event.target.value)}
                    placeholder="e.g. Frontend Developer"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-text-primary outline-none focus:border-primary"
                />
            </div>

            {/* Status */}
            <div className="space-y-2">
                <label
                    htmlFor="status"
                    className="text-sm font-medium text-text-primary"
                >
                    Status
                </label>

                <select
                    id="status"
                    value={status}
                    onChange={(event) => setStatus(event.target.value)}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-text-primary outline-none focus:border-primary"
                >
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Offer">Offer</option>
                    <option value="Rejected">Rejected</option>
                </select>
            </div>

            {/* Date */}
            <div className="space-y-2">
                <label
                    htmlFor="date"
                    className="text-sm font-medium text-text-primary"
                >
                    Applied Date
                </label>

                <input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-text-primary outline-none focus:border-primary"
                />
            </div>

            {/* Notes */}
            <div className="space-y-2">
                <label
                    htmlFor="notes"
                    className="text-sm font-medium text-text-primary"
                >
                    Notes
                </label>

                <textarea
                    id="notes"
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                    placeholder="Add some notes..."
                    rows={4}
                    className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-text-primary outline-none focus:border-primary"
                />
            </div>

            {/* Submit */}
            <button
                type="submit"
                className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-medium text-white hover:opacity-90"
            >
                Add Application
            </button>
        </form>
    );
}