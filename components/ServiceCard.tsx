import type { Service } from "@/data/services";
import { waLink, waServiceMessage } from "@/lib/whatsapp";
import SmartVideo from "@/components/SmartVideo";
import { WhatsAppIcon } from "@/components/icons";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-noir/5 bg-ivory-50 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="relative aspect-[4/3] overflow-hidden">
        {service.video ? (
          <SmartVideo
            src={service.video}
            className="h-full w-full transition-transform duration-500 group-hover:scale-105"
            fallbackGradient={service.gradient}
            autoPlay
            loop
            muted
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${service.gradient} transition-transform duration-500 group-hover:scale-105`}
            aria-hidden="true"
          >
            <span className="font-display text-5xl text-ivory-50/80 drop-shadow-sm">
              {service.symbol}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-medium text-noir">
          {service.name}
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-noir-muted">
          {service.description}
        </p>
        <a
          href={waLink(waServiceMessage(service.name))}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-600 transition-colors hover:text-gold-700"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Consultar disponibilidad
        </a>
      </div>
    </article>
  );
}
