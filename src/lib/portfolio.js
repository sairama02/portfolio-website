export function getDetailBullets(details) {
  return String(details)
    .split("\n")
    .map((line) => line.replace(/^[-•*\s]+/, "").trim())
    .filter(Boolean);
}

export function getUniqueSkills(projects) {
  const counts = new Map();

  for (const project of projects) {
    for (const tech of project.tech_stack) {
      const normalized = tech
        .replaceAll(" ", "-")
        .replaceAll(".", "")
        .toLowerCase();

      counts.set(normalized, (counts.get(normalized) || 0) + 1);
    }
  }

  return Array.from(counts.entries())
    .sort((a, b) => {
      const freqDiff = b[1] - a[1];
      if (freqDiff !== 0) return freqDiff;
      return a[0].localeCompare(b[0]);
    })
    .map(([skill]) => skill);
}

export function formatExperienceDateRange(startDate, endDate, isCurrent) {
  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });

  const start = formatDate(startDate);
  const end = isCurrent ? "Present" : endDate ? formatDate(endDate) : "";

  return end ? `${start} – ${end}` : start;
}