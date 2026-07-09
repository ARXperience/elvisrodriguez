import Image from "next/image";
import Reveal from "@/components/Reveal";
import { withBase } from "@/lib/paths";

interface BlogPost {
  title: string;
  category: string;
  gradient: string;
  image?: string;
}

const posts: BlogPost[] = [
  {
    title: "Cómo cuidar un rubio después del balayage",
    category: "Cuidado del color",
    gradient: "from-gold-200 via-gold-400 to-copper-500",
    image: "/images/servicio-rubios.jpg",
  },
  {
    title: "Cada cuánto hacer mantenimiento de color",
    category: "Colorimetría",
    gradient: "from-copper-400 via-gold-300 to-ivory-300",
    image: "/images/blog-mantenimiento-color.jpg",
  },
  {
    title: "Qué debes saber antes de una corrección de color",
    category: "Colorimetría",
    gradient: "from-noir-soft via-copper-500 to-gold-400",
    image: "/images/servicio-correccion-color.jpg",
  },
  {
    title: "Tratamientos capilares para conservar el brillo",
    category: "Tratamientos",
    gradient: "from-ivory-300 via-gold-300 to-copper-400",
    image: "/images/servicio-tratamientos.jpg",
  },
  {
    title: "Cómo elegir productos para cuidar tu color en casa",
    category: "Rutinas en casa",
    gradient: "from-gold-100 via-gold-300 to-gold-500",
    image: "/images/blog-elegir-productos.jpg",
  },
  {
    title: "Por qué el diagnóstico capilar es clave antes de un cambio de look",
    category: "Diagnóstico",
    gradient: "from-gold-400 via-copper-400 to-noir-soft",
    image: "/images/blog-diagnostico.jpg",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-ivory-100 py-20 sm:py-28">
      <div className="container-content">
        <Reveal className="max-w-2xl">
          <span className="section-eyebrow">Tips &amp; cuidado</span>
          <h2 className="section-title">Aprende a cuidar tu color</h2>
          <p className="section-subtitle">
            Guías y consejos del salón para mantener tu cabello saludable entre
            citas. Contenido en preparación.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={(i % 3) * 110}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-noir/5 bg-ivory-50 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="relative aspect-[16/9] overflow-hidden">
                  {post.image ? (
                    <Image
                      src={withBase(post.image)}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className={`h-full w-full bg-gradient-to-br ${post.gradient}`}
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_30%_25%,white,transparent_55%)]" />
                      <span className="absolute bottom-4 left-5 font-display text-4xl text-ivory-50/60">
                        ✦
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold-600">
                    {post.category}
                  </span>
                  <h3 className="mt-2 flex-1 font-display text-lg font-medium leading-snug text-noir">
                    {post.title}
                  </h3>
                  <span className="mt-4 text-xs uppercase tracking-[0.18em] text-noir-muted/70">
                    Próximamente
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
