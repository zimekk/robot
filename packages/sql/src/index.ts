import { Pool } from "pg";

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    `postgresql://postgres:${process.env.DB_PASSWORD}@localhost:5432/${process.env.DB_NAME}`,
});

export const query = (text: string, params: unknown[]) =>
  pool.query(text, params);
