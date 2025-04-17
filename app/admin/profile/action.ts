"use server"

import { db } from "@/lib/db";
import { hash, compare } from "bcrypt"
import { revalidatePath } from "next/cache"

export async function updateProfile(userId: string, data: { name?: string; email: string }) {
  try {
    await db.user.update({
      where: { id: userId },
      data: {
        name: data.name,
        email: data.email,
      },
    })

    revalidatePath("/admin/profile")
    return { success: true }
  } catch (error) {
    console.error("Failed to update profile:", error)
    throw new Error("Failed to update profile")
  }
}

export async function updatePassword(userId: string, currentPassword: string, newPassword: string) {
  try {
    const user = await db.user.findUnique({
      where: { id: userId },
      select: { password: true },
    })

    if (!user) {
      throw new Error("User not found")
    }

    const isPasswordValid = await compare(currentPassword, user.password)
    if (!isPasswordValid) {
      throw new Error("Current password is incorrect")
    }

    const hashedPassword = await hash(newPassword, 10)

    await db.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    })

    return { success: true }
  } catch (error) {
    console.error("Failed to update password:", error)
    throw error
  }
}

