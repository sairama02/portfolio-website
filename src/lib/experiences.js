import { pool } from "./db";

export async function getExperiences() {
  const result = await pool.query(`
    SELECT
      id,
      company,
      role,
      location,
      description,
      start_date,
      end_date
    FROM experiences
    ORDER BY display_order ASC, created_at DESC
  `);

  return result.rows;
}