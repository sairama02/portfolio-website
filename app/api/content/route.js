import { NextResponse } from "next/server";
import { pool } from "@/src/lib/db";

export async function GET() {
  try {
    const projects = await pool.query(`
      select id, title, headline, description, tech_stack, live_url, github_url, display_order
      from projects
      where is_published = true
      order by display_order asc, created_at asc
    `);

    const experiences = await pool.query(`
      select
        e.id,
        e.company,
        e.role,
        e.location,
        e.start_date,
        e.end_date,
        e.display_order,
        coalesce(
          json_agg(
            json_build_object(
              'id', b.id,
              'text', b.bullet_text,
              'display_order', b.display_order
            )
            order by b.display_order
          ) filter (where b.id is not null),
          '[]'::json
        ) as bullets
      from experiences e
      left join experience_bullets b on b.experience_id = e.id
      group by e.id
      order by e.display_order asc, e.start_date desc
    `);

    return NextResponse.json({
      projects: projects.rows,
      experiences: experiences.rows,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to load content." },
      { status: 500 }
    );
  }
}