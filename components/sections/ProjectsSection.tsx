export default function ProjectsSection() {
  const projects = [
    {
      title: "Project One",
      description: "A modern web application built with Next.js and TypeScript.",
      tags: ["Next.js", "TypeScript", "Tailwind"],
    },
    {
      title: "Project Two",
      description: "Full-stack application with real-time features and database integration.",
      tags: ["React", "Node.js", "PostgreSQL"],
    },
    {
      title: "Project Three",
      description: "Responsive portfolio website with smooth animations and dark mode.",
      tags: ["Next.js", "Framer Motion", "Prisma"],
    },
  ];

  return (
    <section id="projects" className="bg-white px-6 py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          Featured Projects
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-lg bg-gray-50 shadow-md transition-shadow hover:shadow-lg dark:bg-gray-800"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400 rounded-full px-3 py-1 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
