import type { Application, ApplicationStatus } from "@/types/application";
import { prisma } from "@/lib/prisma";

export type ApplicationInput = {
	company: string;
	position: string;
	status: ApplicationStatus;
	appliedDate: string;
	jobUrl: string;
	notes: string;
};

function toApplication(record: {
	id: string;
	company: string;
	position: string;
	status: string;
	appliedDate: string;
	jobUrl: string;
	notes: string;
}): Application {
	return {
		...record,
		status: record.status as ApplicationStatus,
	};
}

export async function getApplications(): Promise<Application[]> {
	const applications = await prisma.application.findMany({
		orderBy: { createdAt: "desc" },
	});

	return applications.map(toApplication);
}

export async function getApplicationById(
	id: string
): Promise<Application | undefined> {
	const application = await prisma.application.findUnique({ where: { id } });

	return application ? toApplication(application) : undefined;
}

export async function createApplication(
	input: ApplicationInput
): Promise<Application> {
	const application = await prisma.application.create({ data: input });

	return toApplication(application);
}

export async function updateApplication(
	id: string,
	input: ApplicationInput
): Promise<Application | undefined> {
	const result = await prisma.application.updateMany({
		where: { id },
		data: input,
	});

	if (result.count === 0) {
		return undefined;
	}

	const application = await prisma.application.findUniqueOrThrow({ where: { id } });

	return toApplication(application);
}

export async function deleteApplication(id: string): Promise<boolean> {
	const result = await prisma.application.deleteMany({ where: { id } });

	return result.count > 0;
}
