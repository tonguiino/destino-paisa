import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

/**
 * Ruta de retorno de OAuth: Google redirige aquí con un `code` que
 * Supabase intercambia por la sesión del usuario.
 */
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // Si algo falla, devolvemos al login con un aviso en la URL
  return NextResponse.redirect(`${origin}/login?error=auth`);
}
