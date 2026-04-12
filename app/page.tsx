"use client"

import { useEffect, useState } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

interface ResumeData {
  main: any
  resume: any
  portfolio: any
}

export default function Page() {
  const [data, setData] = useState<ResumeData | null>(null)
  const [isDark, setIsDark] = useState(true)
  const [isBottom, setIsBottom] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const shouldUseDark = savedTheme ? savedTheme === "dark" : true

    setIsDark(shouldUseDark)
    document.documentElement.classList.toggle("dark", shouldUseDark)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
    localStorage.setItem("theme", isDark ? "dark" : "light")
  }, [isDark])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY
      const bottom = document.body.offsetHeight - 50
      setIsBottom(scrollPosition >= bottom)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleJump = () => {
    if (isBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
    }
  }

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("[v0] Failed to load resume data:", err))
  }, [])

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="font-mono text-sm text-accent animate-pulse">
          <pre className="text-center">
            {`╔════════════════╗
║   LOADING...   ║
╚════════════════╝`}
          </pre>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background relative">
      <button
        onClick={() => setIsDark((prev) => !prev)}
        className="fixed top-4 right-4 z-50 border border-border bg-card px-3 py-2 font-mono text-xs text-foreground hover:border-accent hover:text-accent transition-colors"
      >
        {isDark ? "LIGHT MODE" : "DARK MODE"}
      </button>

      <button
        onClick={handleJump}
        className="fixed top-4 left-4 z-50 border border-border bg-card px-3 py-2 font-mono text-xs text-foreground hover:border-accent hover:text-accent transition-colors"
      >
        {isBottom ? "JUMP TOP" : "JUMP BOTTOM"}
      </button>

      <Hero data={data.main} />
      <About data={data.main} />
      <Projects data={data.portfolio} />
      <Skills data={data.resume} />
      <Contact data={data.main} />
      <Footer />
    </main>
  )
}