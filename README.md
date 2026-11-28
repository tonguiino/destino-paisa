# Destino Paisa

Plataforma que conecta viajeros con proveedores de experiencias turísticas:
tours, transporte, hospedajes y actividades en Antioquia.

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4**
- **Supabase** — Postgres, Auth (Google), Storage
- **Despliegue:** Vercel (plan Hobby, gratuito)

## Estructura

Las carpetas entre paréntesis son *route groups*: agrupan vistas sin afectar la URL.

```
src/
├── app/
│   ├── (auth)/login/page.tsx       # Inicio de sesión        → /login
│   ├── (publico)/page.tsx          # Home                    → /
│   ├── (privado)/                  # Exige sesión (layout guard)
│   │   ├── layout.tsx              # Redirige a /login si no hay sesión
│   │   └── mi-cuenta/page.tsx      → /mi-cuenta
│   ├── auth/callback/route.ts      # Retorno de OAuth (Google → sesión)
│   └── layout.tsx
├── lib/supabase/
│   ├── client.ts               # Cliente para componentes de cliente
│   └── server.ts               # Cliente para server components/actions
└── proxy.ts                    # Refresco de sesión en cada petición
```

> En Next.js 16 el archivo `middleware.ts` pasó a llamarse `proxy.ts`.

## Puesta en marcha

```bash
pnpm install
cp .env.example .env.local   # y coloca tus credenciales reales
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Configurar Supabase + Google (una sola vez)

1. Crea un proyecto en [supabase.com](https://supabase.com).
2. Copia las credenciales: **Project Settings → API** → URL y `anon` key → `.env.local`.
3. Crea las credenciales OAuth en [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
   (crear *OAuth Client ID* tipo *Web application*):
   - **Authorized JavaScript origins:** `http://localhost:3000` + el dominio de Vercel
   - **Authorized redirect URIs:** `https://TU-PROYECTO.supabase.co/auth/v1/callback`
4. En Supabase: **Authentication → Sign In / Providers → Google** → activa y pega
   el *Client ID* y *Client Secret*.
5. En Supabase: **Authentication → URL Configuration → Redirect URLs** → agrega
   `http://localhost:3000/auth/callback` y `https://TU-DOMINIO.vercel.app/auth/callback`.

## Despliegue en Vercel

El sitio despliega y funciona completo **sin ninguna variable de entorno**: el
código está blindado para operar sin credenciales de Supabase (el login está
oculto y los guards se omiten si no hay credenciales). Las variables se agregan
cuando se necesiten, no antes.

1. Vercel → **Add New… → Project** → importa el repo de GitHub
   (detecta Next.js automáticamente; no hay que cambiar build command ni output).
2. Deploy y copia el dominio asignado (`*.vercel.app`).
3. Recomendado para SEO: *Settings → Environment Variables* →
   `NEXT_PUBLIC_SITE_URL` = dominio del paso 2 (sin barra final) → **Redeploy**.
   Alimenta canonical, Open Graph, JSON-LD, sitemap y robots; sin ella apuntan
   a localhost (no rompe nada visible, solo deja el SEO mal referenciado).
4. Cuando se adopte Supabase (login): agregar `NEXT_PUBLIC_SUPABASE_URL` y
   `NEXT_PUBLIC_SUPABASE_ANON_KEY` → **Redeploy**. Las `NEXT_PUBLIC_*` se
   hornean en tiempo de build: agregarlas o cambiarlas después de un deploy
   solo surte efecto con **Redeploy**.
5. Solo al activar el login: agrega el dominio a los *origins* de Google OAuth
   y a las *Redirect URLs* de Supabase con `/auth/callback` (pasos 3 y 5 de
   la sección anterior). Sin esto el login no funciona en producción.

## Roadmap

- [ ] Modelo de datos (perfiles, servicios, reservas, reseñas)
- [ ] Catálogo público con buscador y filtros
- [ ] Panel del proveedor: publicar y gestionar servicios
- [ ] Flujo de reserva con disponibilidad
- [ ] Pagos (Wompi / MercadoPago)
- [ ] Reseñas y calificaciones
