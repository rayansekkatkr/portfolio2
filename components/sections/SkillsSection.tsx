export default function SkillsSection() {
  const skills = [
    { name: "Next.js", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Prisma", category: "ORM" },
    { name: "Git", category: "Tools" },
  ];

  return (
    <section id="skills" className="bg-gray-50 px-6 py-24 sm:py-32 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          Skills & Technologies
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-lg bg-white p-6 text-center shadow-sm dark:bg-gray-900"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
