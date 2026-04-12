interface ProjectsProps {
  data: {
    projects: Array<{
      title: string
      about: string
      url: string
      image?: string
    }>
  }
}

export default function Projects({ data }: ProjectsProps) {
  const publishedProjects = data.projects?.filter((project) =>
    project.title.toLowerCase().includes("published")
  )

  const inProgressProjects = data.projects?.filter((project) =>
    project.title.toLowerCase().includes("in progress")
  )

  return (
    <section className="container mx-auto px-4 py-12" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-accent mb-6 flex flex-col items-center">
          <pre className="hidden md:block text-xs md:text-sm">╔════════════════════════════════════════════════╗</pre>
          <pre className="text-xs md:text-sm font-bold">║ PROJECTS ║</pre>
          <pre className="hidden md:block text-xs md:text-sm">╚════════════════════════════════════════════════╝</pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="font-mono text-accent text-sm md:text-base mb-4">[ PUBLISHED ]</h2>

            <div className="space-y-4">
              {publishedProjects?.map((project, index) => (
                <div
                  key={index}
                  className="border-2 border-border bg-card hover:border-accent transition-all duration-300 group"
                >
                  <div className="font-mono p-4 md:p-6">
                    <div className="hidden md:block text-accent text-xs md:text-sm mb-2">
                      ╔════════════════════════════════════════════════╗
                    </div>

                    <h3 className="text-foreground font-bold text-sm md:text-base mb-2 pl-2">
                      ║ {project.title}
                    </h3>

                    <p className="text-muted-foreground text-xs leading-relaxed mb-3 pl-2">
                      {project.about}
                    </p>

                    <div className="hidden md:block text-accent text-xs md:text-sm mb-2">
                      ╚════════════════════════════════════════════════╝
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-mono text-xs text-accent hover:text-foreground transition-colors border border-border px-3 py-1 mt-2 hover:bg-accent/10"
                    >
                      [view project →]
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-mono text-accent text-sm md:text-base mb-4 text-left md:text-right">
              [ IN PROGRESS ]
            </h2>

            <div className="space-y-4">
              {inProgressProjects?.map((project, index) => (
                <div
                  key={index}
                  className="border-2 border-border bg-card hover:border-accent transition-all duration-300 group"
                >
                  <div className="font-mono p-4 md:p-6">
                    <div className="hidden md:block text-accent text-xs md:text-sm mb-2">
                      ╔════════════════════════════════════════════════╗
                    </div>

                    <h3 className="text-foreground font-bold text-sm md:text-base mb-2 pl-2">
                      ║ {project.title}
                    </h3>

                    <p className="text-muted-foreground text-xs leading-relaxed mb-3 pl-2">
                      {project.about}
                    </p>

                    <div className="hidden md:block text-accent text-xs md:text-sm mb-2">
                      ╚════════════════════════════════════════════════╝
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-mono text-xs text-accent hover:text-foreground transition-colors border border-border px-3 py-1 mt-2 hover:bg-accent/10"
                    >
                      [# →]
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}