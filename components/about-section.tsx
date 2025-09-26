export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">About the Training</h2>

        <div className="text-lg text-muted-foreground leading-relaxed space-y-4 max-w-3xl mx-auto">
          <p>
            Learn the fundamentals of front-end web development through our comprehensive, hands-on training program.
            Master HTML, CSS, and JavaScript while building real-world projects that you can showcase in your portfolio.
          </p>

          <p>
            This program is <strong className="text-primary">100% FREE</strong>, designed specifically for students, and
            follows a beginner-friendly, step-by-step approach. No prior experience required – just bring your
            enthusiasm to learn!
          </p>

          <p>
            By the end of this training, you'll have the skills and confidence to start your tech career with a solid
            foundation in modern web development.
          </p>
        </div>
      </div>
    </section>
  )
}
