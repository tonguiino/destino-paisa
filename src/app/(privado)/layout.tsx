import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

// Las vistas privadas dependen de la sesión para decidir qué renderizar:
// deben bloquear (render dinámico), nunca prerenderizarse como estáticas.
export const instant = false;

/**
 * Guard del grupo `(privado)`: toda vista colocada aquí exige sesión activa.
 * Si el usuario no está autenticado, redirige al login.
 */
export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Sin credenciales de Supabase (dev inicial) no hay sesión que verificar,
  // mismo criterio que proxy.ts para que `pnpm dev` funcione desde el día uno.
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return children;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return children;
}
