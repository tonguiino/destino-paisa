# Destino Paisa 🏔️

Plataforma que conecta viajeros con proveedores de experiencias turísticas:
tours, transporte, hospedajes y actividades en Antioquia.

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4**
- **Supabase** — Postgres, Auth (Google), Storage
- **Despliegue:** Railway

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
   - **Authorized JavaScript origins:** `http://localhost:3000` + el dominio de Railway
   - **Authorized redirect URIs:** `https://TU-PROYECTO.supabase.co/auth/v1/callback`
4. En Supabase: **Authentication → Sign In / Providers → Google** → activa y pega
   el *Client ID* y *Client Secret*.
5. En Supabase: **Authentication → URL Configuration → Redirect URLs** → agrega
   `http://localhost:3000/auth/callback` y `https://TU-DOMINIO.up.railway.app/auth/callback`.

## Despliegue en Railway

1. Sube el repo a GitHub.
2. Railway → **New Project → Deploy from GitHub repo** (detecta Next.js automáticamente).
3. Variables de entorno: `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. Agrega el dominio `*.up.railway.app` a los *origins* de Google OAuth y a las
   *Redirect URLs* de Supabase (paso 3 y 5 de arriba).

## Roadmap

- [ ] Modelo de datos (perfiles, servicios, reservas, reseñas)
- [ ] Catálogo público con buscador y filtros
- [ ] Panel del proveedor: publicar y gestionar servicios
- [ ] Flujo de reserva con disponibilidad
- [ ] Pagos (Wompi / MercadoPago)
- [ ] Reseñas y calificaciones
