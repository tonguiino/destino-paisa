/**
 * Lista con palomitas de marca (guía §4.5: check en hunter-700, texto ink-800).
 *
 * Pendiente: reemplazar el SVG por la librería de íconos (guía §8) cuando se
 * instale.
 */
export function ListaChecks({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-base leading-relaxed text-ink-800"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mt-0.5 h-5 w-5 shrink-0 text-hunter-700"
          >
            <path
              fillRule="evenodd"
              d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.3 6.8-6.8a1 1 0 0 1 1.4 0Z"
              clipRule="evenodd"
            />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
