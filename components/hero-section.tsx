"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToRegistration = () => {
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent/20 to-background px-4">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 leading-tight">
          <span className="text-foreground">FREE Front-End</span>
          <br />
          <span className="text-primary">Web Development</span>
          <br />
          <span className="text-foreground">Training</span>
          <br />
          <span className="text-sm md:text-lg font-normal text-muted-foreground mt-2 block">(For Students)</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
          Kickstart your journey into tech with hands-on training in HTML, CSS, and JavaScript.
        </p>

        <Button
          onClick={scrollToRegistration}
          size="lg"
          className="text-lg px-8 py-6 rounded-xl font-semibold hover:scale-105 transition-transform"
        >
          Register Now
        </Button>
      </div>
    </section>
  )
}
