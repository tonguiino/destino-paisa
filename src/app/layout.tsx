import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { URL_SITIO } from "@/lib/sitio";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { BannerCookies } from "@/components/cookies/banner-cookies";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(URL_SITIO),
  title: {
    default: "Destino Paisa",
    template: "%s | Destino Paisa",
  },
  description:
    "Conecta viajeros con proveedores de tours, transporte y experiencias en Antioquia",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={cn("h-full", "antialiased", poppins.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col">
        {/* Skip link: primer elemento focusable, accesible con Tab (a11y). */}
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-pine-800 focus:px-5 focus:py-2.5 focus:text-sm focus:text-white"
        >
          Saltar al contenido
        </a>
        <Navbar />
        {/* Sticky footer: el wrapper crece (flex-1) y empuja el footer al
            fondo incluso en páginas cortas como /login. El id "contenido"
            es el destino del skip link; tabIndex={-1} permite enfocarlo. */}
        <div
          id="contenido"
          tabIndex={-1}
          className="flex flex-1 flex-col focus:outline-none"
        >
          {children}
        </div>
        <Footer />
        {/* Hijo directo de <body> (después del footer): useModalScope
            inertiza a los hermanos de este root cuando abre el panel de
            preferencias. Server-renderiza null: el aviso solo aparece en
            cliente si el usuario aún no decide sobre cookies. */}
        <BannerCookies />
      </body>
    </html>
  );
}
