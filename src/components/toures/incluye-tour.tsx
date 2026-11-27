import { AcordeonIncluye } from "@/components/ui/acordeon-incluye";

interface IncluyeTourProps {
  incluye: string[];
  noIncluye: string[];
}

/**
 * "Qué incluye el tour" como acordeón (guía §4.5): checks verdes hunter-700
 * y X paprika-500, el único acento cálido de la vista.
 */
export function IncluyeTour({ incluye, noIncluye }: IncluyeTourProps) {
  return (
    <section
      aria-labelledby="incluye-tour-heading"
      className="bg-pine-50 py-12 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <h2
          id="incluye-tour-heading"
          className="text-2xl font-bold text-pine-800 md:text-4xl"
        >
          Qué incluye el tour
        </h2>
        <div className="mt-8 md:mt-12">
          <AcordeonIncluye incluye={incluye} noIncluye={noIncluye} />
        </div>
      </div>
    </section>
  );
}
