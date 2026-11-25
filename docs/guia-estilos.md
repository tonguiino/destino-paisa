# Guía de Estilos — Destino Paisa

> Extraída de los mockups (`Documents/Personal/Proyecto_productivo/Mockups`) y de la
> paleta oficial `colorimetria.png`. Este documento es la **única fuente de verdad**
> para color, tipografía, componentes e iconografía al desarrollar. Si un mockup
> contradice esta guía, gana la guía.

---

## 1. Paleta de colores

### 1.1 Colores oficiales (de `colorimetria.png`)

| Token | Hex | Nombre | Rol semántico |
|---|---|---|---|
| `cream-100` | `#FFF8E1` | Cornsilk | Fondo base de la app (fondo general móvil) |
| `hunter-700` | `#2D5A27` | Hunter Green | Verde de marca: iconos, checks, acentos secundarios, hover |
| `pine-800` | `#1B4332` | Pine Teal | **Color primario**: botones sólidos, títulos, logo, footer |
| `ink-800` | `#34252F` | Shadow Grey | Texto de cuerpo, textos de tarjetas |
| `paprika-500` | `#CF5C36` | Spicy Paprika | Acento cálido: X de "no incluye", badges, alertas, precios de oferta |

### 1.2 Colores muestreados de los mockups

| Token | Hex | Dónde aparece |
|---|---|---|
| `pine-50` | `#EDF9EC` | Fondo de secciones alternas ("Transporte turístico") |
| `surface` | `#FFFFFF` | Tarjetas, secciones claras |

### 1.3 Escalas derivadas (generadas a partir de los 5 oficiales)

Solo se usan para estados hover/focus/bordes sutiles. Si dudas, usa el color base.

```text
pine    50 #EDF9EC · 100 #D7EBDA · 200 #B0D6BB · 300 #83B996 · 400 #57966F
        500 #35754F · 600 #26603F · 700 #1F5238 · 800 #1B4332 ★ · 900 #143123 · 950 #0C2015
hunter  50 #F3F8EF · 100 #E4EFDB · 200 #C9DFBB · 300 #A5C993 · 400 #7DAE6C
        500 #5C9049 · 600 #427035 · 700 #2D5A27 ★ · 800 #254A20 · 900 #1D3B1A · 950 #12250F
paprika 50 #FDF1EB · 100 #FAE0D1 · 200 #F4BFA3 · 300 #EC9A70 · 400 #E27A48
        500 #CF5C36 ★ · 600 #B44A28 · 700 #913B20 · 800 #742F1A · 900 #5E2716 · 950 #33120B
cream   50 #FFFDF6 · 100 #FFF8E1 ★ · 200 #FEF0BF · 300 #FCE494 · 400 #F9D55C · 500 #F5C132
ink     100 #E9E4E7 · 200 #D0C4CB · 300 #A7959F · 400 #7C6672 · 500 #5C4551
        600 #47333D · 700 #3D2C34 · 800 #34252F ★ · 900 #2A1E26 · 950 #1B141A
```

★ = color oficial base. Los tonos 50–200 de `pine` sirven también como fondos tintados.

### 1.4 Reglas duras de color

1. **Azul prohibido.** Los mockups antiguos usaban `#0072D4` en los botones
   "Reservar ahora" de Guatapé → **se reemplazan por `pine-800`**. Ningún azul en la UI.
2. Texto general siempre `ink-800`, **nunca negro puro** (`#000`).
3. Texto blanco solo sobre fotos (con overlay) o sobre botones `pine-800`.
4. Máximo **un** color de acento cálido por vista (paprika es condimento, no base).
5. Los verdes no se mezclan en el mismo elemento: botón = pine, icono/check = hunter.

---

## 2. Tipografía

**Familia única:** [Poppins](https://fonts.google.com/specimen/Poppins) (geométrica,
redondeada, coincide con los wordmarks "RutaPaisa" de los mockups).
Se carga con `next/font/google` — subsets `latin`.

| Uso | Peso | Tamaño desktop | Tamaño móvil |
|---|---|---|---|
| H1 hero | 700 | 56px / `text-5xl`+ | 32px / `text-3xl` |
| H2 sección | 700 | 40px / `text-4xl` | 28px / `text-2xl` |
| H3 tarjeta | 600 | 20px / `text-xl` | 18px / `text-lg` |
| Cuerpo | 400 | 16px / `text-base` | 16px |
| Botón | 500–600 | 15–16px | 15–16px |
| Meta (precio, duración) | 400 | 14px / `text-sm` en `ink-500` | 14px |

- Los títulos de sección van en **`pine-800`**, centrados en secciones de marketing,
  alineados a la izquierda en contenido (blog, detalle de tour).
- Interlineado cuerpo: `leading-relaxed`.

---

## 3. Botones

Todos los botones son **pill** (`border-radius: 9999px`) — es la firma visual de la marca.
Altura base 44–48px; padding horizontal 24–28px.

### 3.1 Primario (acción principal: "Explora tours", "Reservar")

- Fondo `pine-800`, texto blanco, peso 500.
- Hover: `pine-900`. Focus: anillo `hunter-300` de 2px con offset. Disabled: 50% de opacidad.
- **Nada de sombras**; plano como en los mockups.

### 3.2 Secundario tintado (acciones suaves: "Más información" en tarjetas)

- Fondo `pine-50` (`#EDF9EC`), texto `pine-800`, pill.
- Hover: `pine-100`.

### 3.3 Outline (sobre fondo tintado o blanco: "Más información" desktop)

- Fondo transparente/blanco, borde 1.5px `hunter-700`, texto `hunter-700`, pill.
- Hover: fondo `hunter-50`.

### 3.4 CTA grande de reserva (detalle de tour)

- Igual al primario pero padding 32px y texto opcionalmente en mayúsculas
  (`tracking-wide`). Verde `pine-800` — **nunca el azul `#0072D4` de los mockups viejos**.

> Límite: máximo **2 estilos de botón por vista**, 1 primario por sección.

---

## 4. Componentes

### 4.1 Tarjeta de tour
- Fondo `surface` blanco, radio **16px** (`rounded-2xl`), sin borde; sombra solo al hover
  (`shadow-sm → shadow-md`).
- **Desktop (grid 3 col):** imagen arriba (radio 12px arriba), título `ink-800` 600,
  precio/meta en `ink-500` 14px.
- **Móvil (lista):** imagen a la izquierda 96×96 radio 12px, título + duración + botón secundario a la derecha.

### 4.2 Secciones
- Alternar fondo `surface` (blanco) ↔ `pine-50` (`#EDF9EC`).
- Padding vertical: 80–96px desktop, 48–64px móvil.
- Contenedor: `max-w-6xl` centrado con padding lateral 16–24px.

### 4.3 Hero (dos variantes válidas)
- **Sobre foto:** imagen full-bleed, overlay oscuro suave (`pine-950/40`), H1 y subtitle
  blancos centrados + botón primario debajo.
- **Sobre fondo claro (móvil):** banda de foto, H1 en `pine-800` sobre `cream-100`.

### 4.4 Header
- Fondo transparente sobre `cream-100`/blanco. Wordmark "Destino Paisa" en `pine-800`
  peso 700 (los mockups dicen "RutaPaisa" — nombre obsoleto).
- Links de nav en `ink-800` 15px, hover `hunter-700`. Móvil: hamburguesa `pine-800`.

### 4.5 Checklist (Incluye / No incluye)
- Icono de check en `hunter-700` · icono de X en `paprika-500`. Texto `ink-800`.

### 4.6 Galería
- Grid 2×2, gap 12–16px, imágenes radio 12px, `object-cover`.

---

## 5. Fundamentos

| Fundamento | Valor |
|---|---|
| Radios | Botones: pill (9999px) · Tarjetas: 16px · Imágenes/inputs: 12px |
| Sombras | Casi ninguna: `shadow-sm` máx, solo hover de tarjetas |
| Espaciado | Grilla de 8px (8/16/24/32/48/64/96) |
| Opacity overlay hero | `pine-950` al 40–50% para legibilidad del texto blanco |
| Bordes | `1px` de `ink-100` cuando un card necesita separación sutil |

---

## 6. Tokens listos para Tailwind v4

Pegar en `src/app/globals.css` dentro de `@theme` (reemplaza la paleta por defecto de Tailwind por nuestra marca):

```css
@theme {
  /* Oficiales */
  --color-cream-50: #FFFDF6;
  --color-cream-100: #FFF8E1;
  --color-cream-200: #FEF0BF;
  --color-cream-300: #FCE494;
  --color-cream-400: #F9D55C;
  --color-cream-500: #F5C132;

  --color-pine-50: #EDF9EC;
  --color-pine-100: #D7EBDA;
  --color-pine-200: #B0D6BB;
  --color-pine-300: #83B996;
  --color-pine-400: #57966F;
  --color-pine-500: #35754F;
  --color-pine-600: #26603F;
  --color-pine-700: #1F5238;
  --color-pine-800: #1B4332; /* primario */
  --color-pine-900: #143123;
  --color-pine-950: #0C2015;

  --color-hunter-50: #F3F8EF;
  --color-hunter-100: #E4EFDB;
  --color-hunter-200: #C9DFBB;
  --color-hunter-300: #A5C993;
  --color-hunter-400: #7DAE6C;
  --color-hunter-500: #5C9049;
  --color-hunter-600: #427035;
  --color-hunter-700: #2D5A27;
  --color-hunter-800: #254A20;
  --color-hunter-900: #1D3B1A;
  --color-hunter-950: #12250F;

  --color-paprika-50: #FDF1EB;
  --color-paprika-100: #FAE0D1;
  --color-paprika-200: #F4BFA3;
  --color-paprika-300: #EC9A70;
  --color-paprika-400: #E27A48;
  --color-paprika-500: #CF5C36;
  --color-paprika-600: #B44A28;
  --color-paprika-700: #913B20;
  --color-paprika-800: #742F1A;
  --color-paprika-900: #5E2716;
  --color-paprika-950: #33120B;

  --color-ink-100: #E9E4E7;
  --color-ink-200: #D0C4CB;
  --color-ink-300: #A7959F;
  --color-ink-400: #7C6672;
  --color-ink-500: #5C4551;
  --color-ink-600: #47333D;
  --color-ink-700: #3D2C34;
  --color-ink-800: #34252F; /* texto */
  --color-ink-900: #2A1E26;
  --color-ink-950: #1B141A;

  --font-sans: var(--font-poppins), ui-sans-serif, system-ui, sans-serif;
}
```

Con esto quedan disponibles clases como `bg-pine-800`, `text-ink-800`, `bg-cream-100`.

---

## 7. Deudas de diseño detectadas en los mockups

Al reconstruir las pantallas, corregir:

1. **Botones azules** `#0072D4` en `guatape_desk` → `pine-800` (regla 1.4.1).
2. **Marca obsoleta**: "RutaPaisa" / "Ruta Paísa" → **"Destino Paisa"**.
3. Los mockups son generados por IA y tienen typos ("Salída", "distrutar",
   "conoceruno") — el copy real se escribe limpio en el código.
4. Inconsistencia hero: desktop usa texto blanco sobre foto, móvil verde sobre crema.
   Ambas variantes están permitidas (ver 4.3) pero cada página elige **una sola**.

---

## 8. Iconografía

- **Prohibido el uso de emojis del sistema** en la UI y en la documentación. Todo símbolo se representa con la librería de íconos.
- **Prohibido escribir SVG a mano** para íconos de interfaz: siempre vienen de la librería (decisión del propietario: los SVG artesanales no son buena práctica).
- **Librería adoptada:** [lucide-react](https://lucide.dev) `^1.80.0` (ya en `package.json`; descarta la candidata anterior Flaticon Uicons). Import nombrado tree-shakeable: `import { Menu, X } from "lucide-react"`.
- **Uso:** tamaño vía `className` (`h-4 w-4` UI compacta · `h-5 w-5` enlaces y listas · `h-6 w-6` botones alternadores); color heredado con `currentColor` (clases `text-*` de la paleta); trazo 2 por defecto. Lucide aplica `aria-hidden` automáticamente a los íconos decorativos; el texto accesible va en el elemento padre (ej. `sr-only` en el botón).
- **Deuda de migración:** `src/components/ui/lista-checks.tsx` aún usa SVG manual (migrable a `Check` / `X` de lucide); `src/components/logos-marca.tsx` permanece como excepción (logos de terceros con marca propia, no íconos de UI).

---

## 9. Librería de componentes — beUI

- Se adoptarán componentes de [beUI](https://beui.dev) cuando exista uno adecuado para la necesidad y el propietario lo apruebe. Biblioteca copy-paste para React/Next.js construida con Motion + Tailwind CSS 4 — **compatible con este stack** (React 19, Tailwind 4).
- La instalación la realiza **el propietario** (vía CLI de shadcn, ej. `pnpm dlx shadcn add @beui/<componente>`). La IA puede sugerir qué componente instalar al construir una vista, nunca ejecutar la instalación.
- El código queda copiado dentro del proyecto: si un componente de beUI contradice esta guía (colores, radios, botones), **gana esta guía** — se ajusta el componente copiado a los tokens.
- Mientras beUI no esté instalado, construir los componentes con Tailwind según esta guía.

---

## 10. Trazabilidad de la extracción

- Oficiales: leídos de las etiquetas de `colorimetria.png` (fuente de verdad).
- `#EDF9EC` y `#0072D4`: muestreo de píxeles con Pillow sobre `home_desk.png` y `guatape_desk.png`.
- Botón verde de mockups muestrea `#134A2E` (ruido de compresión PNG→JPEG del render IA);
  se canoniza a `pine-800 #1B4332` de la paleta oficial.
- Escalas 50–950: derivadas numéricamente de los 5 oficiales (no oficiales, usar solo
  para estados).
