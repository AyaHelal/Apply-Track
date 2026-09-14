"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getAuthenticatedUserId } from "@/lib/auth";

export async function updateProfileTitle(jobTitle: string) {
  const userId = await getAuthenticatedUserId();

  await prisma.user.update({
    where: { id: userId },
    data: { jobTitle: jobTitle.trim() },
  });

  revalidatePath("/profile");
  revalidatePath("/dashboard");
  revalidatePath("/applications");

  return { success: true };
}
