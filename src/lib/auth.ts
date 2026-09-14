import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function getAuthenticatedUserId(): Promise<string> {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized: User is not authenticated.");
  }
  return userId;
}

export async function syncUser() {
  const clerkUser = await currentUser();
  if (!clerkUser) {
    return null;
  }

  const email = clerkUser.emailAddresses[0]?.emailAddress ?? "";
  const name =
    [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(" ") ||
    clerkUser.username ||
    "User";
  const imageUrl = clerkUser.imageUrl;

  const user = await prisma.user.upsert({
    where: { id: clerkUser.id },
    update: {
      name,
      email,
      imageUrl,
    },
    create: {
      id: clerkUser.id,
      name,
      email,
      imageUrl,
    },
  });

  return user;
}

export async function getCurrentDbUser() {
  const { userId } = await auth();
  if (!userId) {
    return null;
  }

  return prisma.user.findUnique({
    where: { id: userId },
  });
}
