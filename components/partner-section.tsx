import Image from "next/image";

export function PartnersSection() {
  const partners = [
    { name: "Umarks Technologies", logo: "/partners/Umarks-Technologies.jpeg" },
    { name: "Ethical Leaders Institute", logo: "/partners/ELI.jpeg" },
    { name: "Creativast Academy", logo: "/partners/Creativast.jpeg" },
  ];

  return (
    <section id="partners" className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Partners</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 place-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center gap-3 text-center"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={100}
                height={100}
                className="object-contain grayscale hover:grayscale-0 transition rounded-full"
              />
              <span className="text-sm font-medium">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
