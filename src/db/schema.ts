import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const todos = sqliteTable("todos", {
  id: integer("id").notNull().primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  description: text("description").notNull(),
  status: text("status").notNull().default("idle"),
});
