interface SkillsProps {
  data: {
    skills: Array<{
      name: string
      icon?: string
    }>
  }
}

export default function Skills({ data }: SkillsProps) {
  return (
    <section className="container mx-auto px-4 py-12" id="skills">
      <div className="max-w-4xl mx-auto">
      <div className="font-mono text-accent mb-6 flex flex-col items-center">
        <pre className="hidden md:block text-xs md:text-sm">╔════════════════════════════════════════════════╗</pre>
        <pre className="text-xs md:text-sm font-bold">║ SKILLS ║</pre>
        <pre className="hidden md:block text-xs md:text-sm">╚════════════════════════════════════════════════╝</pre>
      </div>

        <div className="border-2 border-border bg-card p-6 md:p-8 hover:border-accent transition-colors duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {data.skills?.map((skill, index) => (
              <div key={index} className="font-mono text-xs md:text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-accent">▸</span>

                  {skill.icon && (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-4 h-4 object-contain"
                    />
                  )}

                  <span className="text-foreground flex-1">{skill.name}</span>

                  <span className="text-muted-foreground text-[10px]">
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
