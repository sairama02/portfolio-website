import { pool } from "./db";

export async function getProjects() {
  const result = await pool.query(`
    SELECT
      id,
      title,
      headline,
      description,
      details,
      tech_stack,
      live_url,
      github_url,
      display_order,
      image_url
    FROM projects
    WHERE is_published = true
    ORDER BY display_order ASC, created_at DESC
  `);

  return result.rows;
}