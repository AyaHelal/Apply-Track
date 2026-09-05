import fs from "node:fs";
import path from "node:path";

import type { Application, ApplicationStatus } from "@/types/application";

const applicationsFilePath = path.join(
	process.cwd(),
	"src",
	"data",
	"applications.json"
);

export type ApplicationInput = {
	company: string;
	position: string;
	status: ApplicationStatus;
	appliedDate: string;
	jobUrl: string;
	notes: string;
};

function readApplications() {
	const fileContents = fs.readFileSync(applicationsFilePath, "utf8");

	return JSON.parse(fileContents) as Application[];
}

function writeApplications(applicationList: Application[]) {
	fs.writeFileSync(
		applicationsFilePath,
		`${JSON.stringify(applicationList, null, 4)}\n`,
		"utf8"
	);
}

export function getApplications() {
	return readApplications();
}

export function getApplicationById(id: string) {
	return readApplications().find((application) => application.id === id);
}

export function createApplication(input: ApplicationInput): Application {
	const application = {
		id: crypto.randomUUID(),
		...input,
	};

	writeApplications([application, ...readApplications()]);

	return application;
}

export function updateApplication(id: string, input: ApplicationInput) {
	const applicationList = readApplications();
	const applicationIndex = applicationList.findIndex(
		(application) => application.id === id
	);

	if (applicationIndex === -1) {
		return undefined;
	}

	const updatedApplication = {
		id,
		...input,
	};

	writeApplications(applicationList.map((application, index) =>
		index === applicationIndex ? updatedApplication : application
	));

	return updatedApplication;
}

export function deleteApplication(id: string) {
	const applicationList = readApplications();
	const updatedApplications = applicationList.filter(
		(application) => application.id !== id
	);

	if (updatedApplications.length === applicationList.length) {
		return false;
	}

	writeApplications(updatedApplications);

	return true;
}
