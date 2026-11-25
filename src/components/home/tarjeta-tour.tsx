export function TarjetaTour({ title }: { title: string }) {
  return (
    <article
      className="
        flex items-center gap-4 rounded-2xl bg-surface p-3 shadow-sm transition-shadow hover:shadow-md
        sm:block sm:p-0
      "
    >
      {/* Pendiente: imagen real cuando exista backend de tours */}
      <div
        className="h-24 w-24 shrink-0 rounded-xl bg-pine-100 sm:aspect-[4/3] sm:h-auto sm:w-full sm:rounded-none"
        aria-hidden
      />
      <h3 className="text-xl font-semibold text-ink-800 sm:p-5 sm:pt-4">{title}</h3>
    </article>
  );
}
