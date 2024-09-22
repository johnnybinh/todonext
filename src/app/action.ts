"use server";

import { db } from "@/db";
import { todos } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTodosAction(formData: FormData) {
  try {
    console.log(formData);
    await db.insert(todos).values({
      title: formData.get("title") as string,
      description: formData.get("description") as string,
    });
  } catch (error) {
    return error;
  }

  redirect("/todos");
}

export async function removeTodos(id: number) {
  try {
    await db.delete(todos).where(eq(todos.id, id));
    revalidatePath("/todos");
  } catch (error) {
    console.log(error);
  }
}
