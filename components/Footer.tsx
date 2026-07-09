import { waLink, WA_MESSAGES } from "@/lib/whatsapp";
import { InstagramIcon, MapPinIcon, WhatsAppIcon } from "@/components/icons";

const INSTAGRAM_URL = "https://www.instagram.com/elvisrodriguezpeluqueria/";

export default function Footer() {
  return (
    <footer id="contacto" className="scroll-mt-24 bg-noir text-ivory-100">
      <div className="container-content grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold tracking-[0.12em]">
            ELVIS RODRÍGUEZ
          </p>
          <p className="mt-1 text-[0.65rem] uppercase tracking-[0.35em] text-gold-300">
            Asesor de imagen
          </p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory-100/70">
            Trabajamos para tu embellecimiento, conservación y cuidado capilar
            y estético.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
            Servicios
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-ivory-100/75">
            <li><a href="#colorimetria" className="transition-colors hover:text-gold-300">Colorimetría</a></li>
            <li><a href="#servicios" className="transition-colors hover:text-gold-300">Balayage y rubios</a></li>
            <li><a href="#servicios" className="transition-colors hover:text-gold-300">Tratamientos capilares</a></li>
            <li><a href="#servicios" className="transition-colors hover:text-gold-300">Cortes, manicure y spa</a></li>
            <li><a href="#tienda" className="transition-colors hover:text-gold-300">Tienda de cuidado profesional</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
            Contacto
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-ivory-100/75">
            <li>
              <a
                href={waLink(WA_MESSAGES.agendarValoracion)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-gold-300"
              >
                <WhatsAppIcon className="h-4 w-4" />
                +57 305 300 7872
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-gold-300"
              >
                <InstagramIcon className="h-4 w-4" />
                @elvisrodriguezpeluqueria
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
            Ubicación
          </h3>
          <address className="mt-4 flex items-start gap-2 text-sm not-italic leading-relaxed text-ivory-100/75">
            <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
            Vereda Pueblo Viejo, Km 18 más 970 mts, Variante Cota, Cota,
            Cundinamarca
          </address>
        </div>
      </div>

      <div className="border-t border-ivory-100/10">
        <div className="container-content flex flex-col items-center justify-between gap-3 py-6 text-xs text-ivory-100/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Elvis Rodríguez Peluquería. Todos los
            derechos reservados.
          </p>
          <p>
            La tienda es un catálogo demostrativo sin pagos en línea. Diseño y
            desarrollo:{" "}
            <span className="text-gold-300">Centro Digital de Diseño</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
