import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dialect: "sqlite",
  dbCredentials: {
    url: "./db.sqlite3",
  },
  verbose: true,
  strict: true,
} satisfies Config;
