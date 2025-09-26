"use client"

import { Button } from "@/components/ui/button"

export function CtaSection() {
  const scrollToRegistration = () => {
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">{"Don't Miss Out!"}</h2>

        <p className="text-xl mb-8 text-primary-foreground/90 text-pretty">
          Classes start next month. Save your spot today.
        </p>

        <Button
          onClick={scrollToRegistration}
          variant="secondary"
          size="lg"
          className="text-lg px-8 py-6 rounded-xl font-semibold hover:scale-105 transition-transform"
        >
          Register Now
        </Button>
      </div>
    </section>
  )
}
