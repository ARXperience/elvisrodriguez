import { services } from "@/data/services";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesSection() {
  return (
    <section id="servicios" className="scroll-mt-24 bg-ivory-100 py-20 sm:py-28">
      <div className="container-content">
        <Reveal direction="left" className="max-w-2xl">
          <span className="section-eyebrow">Servicios</span>
          <h2 className="section-title">Servicios destacados</h2>
          <p className="section-subtitle">
            Color, corte, tratamientos y belleza integral con enfoque en la
            salud de tu cabello.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 4) * 100} direction={i % 2 === 0 ? "zoom" : "up"}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
