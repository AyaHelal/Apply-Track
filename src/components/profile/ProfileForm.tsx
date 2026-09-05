"use client";

import { useState } from "react";
import { Save } from "lucide-react";

import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import { useToast } from "@/components/ui/ToastProvider";

export default function ProfileForm() {
    const { showToast } = useToast();
    const [name, setName] = useState("Aya");
    const [email, setEmail] = useState("aya@example.com");
    const [jobTitle, setJobTitle] = useState("Frontend Developer");
    const [notifications, setNotifications] = useState("Enabled");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        showToast("Profile changes submitted.");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="motion-stagger max-w-3xl space-y-6"
        >
            <section className="rounded-xl border border-border bg-surface">

                <div className="grid gap-5 p-4 sm:grid-cols-2 sm:gap-6 sm:p-6">
                    <Input
                        id="name"
                        label="Name"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />

                    <Input
                        id="email"
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />

                    <div className="sm:col-span-2">
                        <Input
                            id="jobTitle"
                            label="Job Title"
                            type="text"
                            value={jobTitle}
                            onChange={(event) => setJobTitle(event.target.value)}
                        />
                    </div>
                </div>
            </section>

            <section className="rounded-xl border border-border bg-surface">
                <div className="border-b border-border px-6 py-5">
                    <h2 className="font-semibold text-text-primary">
                        Preferences
                    </h2>

                    <p className="mt-1 text-sm text-text-secondary">
                        Manage your application tracker preferences.
                    </p>
                </div>

                <div className="p-6">
                    <Select
                        id="notifications"
                        label="Notifications"
                        value={notifications}
                        onChange={(event) => setNotifications(event.target.value)}
                    >
                        <option value="Enabled">Enabled</option>
                        <option value="Disabled">Disabled</option>
                    </Select>
                </div>
            </section>

            <div className="flex justify-stretch sm:justify-end">
                <Button type="submit" className="w-full cursor-pointer sm:w-auto">
                    <Save size={17} />
                    Save Profile
                </Button>
            </div>
        </form>
    );
}