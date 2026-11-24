import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

/**
 * Refresca la sesión de Supabase en cada petición (patrón oficial de @supabase/ssr).
 * En Next.js 16 el archivo `middleware.ts` pasó a llamarse `proxy.ts`.
 */
export async function proxy(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  // Mientras las credenciales de Supabase no estén configuradas, no hacemos
  // nada para que `pnpm dev` funcione desde el primer día.
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseAnonKey) return supabaseResponse;

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) =>
          request.cookies.set(name, value),
        );
        supabaseResponse = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options),
        );
      },
    },
  });

  // Importante: no colocar código entre createServerClient() y auth.getUser().
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Rutas protegidas (ajústalo cuando exista el panel del proveedor), ejemplo:
  // if (!user && request.nextUrl.pathname.startsWith("/mi-cuenta")) {
  //   const url = request.nextUrl.clone();
  //   url.pathname = "/login";
  //   return NextResponse.redirect(url);
  // }

  return supabaseResponse;
}

export const config = {
  matcher: [
    // Ejecutar en todo excepto archivos estáticos e imágenes
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
