import { Pool } from "pg";

const globalForDb = global;

export const pool =
  globalForDb.__pool ||
  new Pool({
    connectionString: process.env.DATABASE_URL,
  });

if (process.env.NODE_ENV !== "production") {
  globalForDb.__pool = pool;
}