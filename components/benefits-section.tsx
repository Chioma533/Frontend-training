import { Check } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    "100% Free — no hidden charges",
    "Beginner-friendly, step-by-step learning",
    "Build real projects for your portfolio",
    "Start your tech career with confidence",
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Why Join Our Training?</h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-card border">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-primary-foreground" />
              </div>
              <p className="text-lg font-medium text-card-foreground leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
