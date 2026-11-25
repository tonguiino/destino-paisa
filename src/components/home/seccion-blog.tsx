import { TarjetaBlog } from "./tarjeta-blog";
import type { BlogEntry } from "@/types/colombia";

export function SeccionBlog({ entries }: { entries: BlogEntry[] }) {
  return (
    <section aria-labelledby="blog-heading" className="bg-surface py-12 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <h2 id="blog-heading" className="text-2xl font-bold text-pine-800 md:text-4xl">
          Blog
        </h2>
        {entries.length === 0 ? (
          <p className="mt-6 text-ink-500">Contenido disponible en unos minutos.</p>
        ) : (
          <div className="mt-8 grid gap-6 md:mt-12 md:grid-cols-2 md:gap-x-6 md:gap-y-12">
            {entries.map((entry) => (
              <TarjetaBlog key={entry.id} entry={entry} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
