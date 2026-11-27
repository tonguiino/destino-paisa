import { Check, X } from "lucide-react";

/**
 * Lista de verificación de marca (guía §4.5): check en hunter-700 y X en
 * paprika-500 (único acento cálido permitido por vista), texto ink-800.
 * Íconos de lucide-react según guía §8; el color va en el padre vía
 * currentColor.
 */
export function ListaChecks({
  items,
  icono = "check",
}: {
  items: string[];
  /** "check" para elementos incluidos; "x" para los excluidos. */
  icono?: "check" | "x";
}) {
  const Icono = icono === "x" ? X : Check;
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-base leading-relaxed text-ink-800"
        >
          <Icono
            aria-hidden
            className={`mt-0.5 h-5 w-5 shrink-0 ${icono === "x" ? "text-paprika-500" : "text-hunter-700"}`}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
