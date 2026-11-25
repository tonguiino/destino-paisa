import { Button, ButtonLink } from "@/components/motion/button/base";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type Variant = "primary" | "outline";

/**
 * Botón pill de la marca (guía §3) sobre el Button/ButtonLink de beUI.
 * Los tokens semánticos (primary, border, ring) ya están mapeados a la
 * paleta de la marca en globals.css; aquí se fijan los detalles que la
 * guía exige (hover pine-900, borde hunter-700, focus hunter-300).
 */
const GUIDE_CLASSES: Record<Variant, string> = {
  primary:
    "bg-pine-800 text-white hover:bg-pine-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hunter-300",
  outline:
    "border-[1.5px] border-hunter-700 bg-transparent text-hunter-700 hover:bg-hunter-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hunter-300",
};

/** La guía pide 48px de alto (size lg ya lo da) y 28px horizontales. */
const SIZE_CLASSES = "px-7 text-[15px]";

export function PillButton({
  variant = "primary",
  className,
  ...props
}: Omit<ComponentProps<typeof Button>, "variant"> & { variant?: Variant }) {
  return (
    <Button
      variant={variant}
      size="lg"
      className={cn(GUIDE_CLASSES[variant], SIZE_CLASSES, className)}
      {...props}
    />
  );
}

export function PillLink({
  variant = "primary",
  className,
  ...props
}: Omit<ComponentProps<typeof ButtonLink>, "variant"> & { variant?: Variant }) {
  return (
    <ButtonLink
      variant={variant}
      size="lg"
      className={cn(GUIDE_CLASSES[variant], SIZE_CLASSES, className)}
      {...props}
    />
  );
}
