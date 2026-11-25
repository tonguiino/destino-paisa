import type { BlogEntry } from "@/types/colombia";

/**
 * Entrada del blog según el mockup: imagen arriba con radio 12px
 * y el texto debajo, sin caja de tarjeta (guía §4.7 galería).
 */
export function TarjetaBlog({ entry }: { entry: BlogEntry }) {
  return (
    <article>
      <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-pine-100">
        {entry.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element -- hosts arbitrarios de la API de api-colombia.com
          <img
            src={entry.imageUrl}
            alt={entry.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        ) : null}
      </div>
      <div className="mt-4">
        {entry.city && <p className="text-sm text-ink-500">{entry.city}</p>}
        <h3 className="mt-1 text-xl font-semibold text-ink-800">{entry.title}</h3>
        <p className="mt-2 text-base leading-relaxed text-ink-800">{entry.excerpt}</p>
      </div>
    </article>
  );
}
