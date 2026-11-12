"use server";

import { redirect } from "next/navigation";
import {
  checkPassword,
  createSession,
  isAdminConfigured,
} from "@/lib/admin/session";

export async function loginAction(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  if (!isAdminConfigured() || !checkPassword(password)) {
    // Slow down password guessing.
    await new Promise((resolve) => setTimeout(resolve, 1000));
    redirect("/admin/login?error=1");
  }
  await createSession();
  redirect("/admin");
}
