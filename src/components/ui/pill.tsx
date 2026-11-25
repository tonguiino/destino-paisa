import type { ComponentProps } from "react";

type Variant = "primary" | "outline";

/**
 * Botón pill según docs/guia-estilos.md §3: radio 9999px, altura 48px,
 * sin sombras, máximo 2 variantes por vista.
 */
const BASE_CLASSES =
  "inline-flex h-12 items-center justify-center rounded-full px-7 text-[15px] font-medium transition-colors";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-pine-800 text-white hover:bg-pine-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hunter-300",
  outline:
    "border-[1.5px] border-hunter-700 text-hunter-700 hover:bg-hunter-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hunter-300",
};

export function PillLink({
  variant = "primary",
  className,
  ...props
}: ComponentProps<"a"> & { variant?: Variant }) {
  return (
    <a className={`${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className ?? ""}`} {...props} />
  );
}

export function PillButton({
  variant = "primary",
  className,
  ...props
}: ComponentProps<"button"> & { variant?: Variant }) {
  return (
    <button
      className={`${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className ?? ""}`}
      {...props}
    />
  );
}
