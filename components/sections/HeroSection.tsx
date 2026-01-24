export default function HeroSection() {
  return (
    <section
      id="hero"
      className="from-primary-50 flex min-h-screen items-center justify-center bg-gradient-to-br to-white px-6 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl dark:text-white">
          Full-Stack Developer
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl dark:text-gray-300">
          Building modern web applications with Next.js, TypeScript, and cutting-edge technologies.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#projects"
            className="bg-primary-600 hover:bg-primary-500 focus-visible:outline-primary-600 rounded-md px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="hover:text-primary-600 dark:hover:text-primary-400 text-sm leading-6 font-semibold text-gray-900 transition-colors dark:text-white"
          >
            Get in touch <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
