import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="from-primary-50 flex min-h-screen items-center justify-center bg-gradient-to-br to-white px-6 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="border-primary-600 relative h-48 w-48 overflow-hidden rounded-full border-4 shadow-xl lg:h-64 lg:w-64">
              <Image
                src="/avatar-placeholder.svg"
                alt="Rayan Sekkat - AI-Powered Full-Stack Developer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl dark:text-white">
              Rayan Sekkat
            </h1>
            <h2 className="text-primary-600 dark:text-primary-400 mt-4 text-2xl font-semibold sm:text-3xl">
              AI-Powered Full-Stack Developer
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl dark:text-gray-300">
              Crafting intelligent, scalable web solutions that bridge innovation and functionality.
              Specialized in Next.js, TypeScript, and AI-driven development to transform your ideas
              into powerful digital experiences.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#contact"
                className="bg-primary-600 hover:bg-primary-500 focus-visible:outline-primary-600 w-full rounded-md px-8 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="hover:bg-primary-50 dark:hover:bg-primary-900/20 border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400 w-full rounded-md border-2 px-8 py-3 text-center text-sm font-semibold transition-colors sm:w-auto"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
