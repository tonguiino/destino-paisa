# CLAUDE.md — Reglas de trabajo · Destino Paisa

Reglas obligatorias para asistentes de IA (Claude) que trabajen en este repositorio.
Se ampliará con nuevas restricciones a futuro; toda regla aquí escrita es estricta y no negociable.

---

## 1. Reglas estrictas

### 1.1 Operaciones de GitHub — PROHIBIDAS para la IA

Toda acción que edite información relevante de GitHub la realiza **exclusivamente el propietario, manualmente**. La IA **no debe ejecutar nunca**, ni por sí misma ni sugiriendo ejecutarlas en su lugar:

- `git commit`, `git push`, `git pull`, `git merge`, `git rebase`, `git revert`, `git reset`, `git stash`
- Crear, renombrar o eliminar ramas (`git branch`, `git switch -c`, `git checkout -b`, etc.)
- Abrir, editar, comentar, fusionar o cerrar Pull Requests
- Abrir, editar o cerrar Issues, labels, milestones o projects
- Crear releases, tags o cualquier publicación del repositorio
- Cambiar configuración del repositorio (visibilidad, permisos, protecciones, webhooks)
- Cualquier uso "mutador" del CLI de GitHub (`gh`)

**Lo único que la IA sí puede hacer en torno a GitHub es redactar texto** (sección 1.2). Los comandos de **solo lectura** (`git status`, `git diff`, `git log`, `git branch -a`) sí están permitidos: son necesarios para conocer el contexto antes de redactar.

### 1.3 Emojis — PROHIBIDOS

- No usar emojis del sistema en **ningún artefacto**: UI, documentación (README, guías, este documento), mensajes de commit ni respuestas del asistente.
- Todo símbolo visual se representa con la **librería de íconos** definida en [guia-estilos.md](docs/guia-estilos.md) (candidata: Flaticon Uicons, peso Regular, gratuita — aún sin instalar ni definir).
- Mientras la librería no esté instalada, no usar un emoji como reemplazo: dejar el elemento sin ícono y anotarlo como pendiente.

### 1.4 Componentes de UI — beUI

- Se adoptarán componentes de [beUI](https://beui.dev) cuando exista uno adecuado para la necesidad y el propietario lo considere pertinente.
- La instalación **siempre la realiza el propietario**; la IA puede **sugerir qué componente instalar** al construir una vista, nunca ejecutar la instalación.
- La IA no debe asumir que beUI está disponible: antes de usarlo, verificar en el código que el componente exista ya en el proyecto. Si no está, construir con Tailwind según [guia-estilos.md](docs/guia-estilos.md).

### 1.2 Única excepción: redacción de textos

La IA puede ayudar únicamente redactando (nunca ejecutando, solo entregando el texto listo para copiar):

1. **Mensajes de commit** — en formato Conventional Commits (sección 2).
2. **Descripciones de Pull Request** — en markdown, con la plantilla de la sección 3.

En ambos casos: siempre en formato markdown, conservando el contexto de lo trabajado en la rama.

### 1.5 Commit en cada entrega con cambios

Toda respuesta del asistente que introduzca cambios en el proyecto debe
terminar con el **texto del commit** correspondiente, listo para copiar y en
formato Conventional Commits (sección 2). El asistente nunca lo ejecuta: solo
lo redacta, al igual que en la sección 1.2. Si la respuesta no modifica el
proyecto (conversación, lectura de código, preguntas), no se incluye.

---

## 2. Formato de commits (Conventional Commits)

Estándar global: [Conventional Commits 1.0.0](https://www.conventionalcommits.org/es/v1.0.0/).

```
<tipo>(<alcance opcional>): <descripción en imperativo, ≤ 72 caracteres>

<cuerpo opcional: qué y por qué, en viñetas si hay varios cambios>

<pie opcional: breaking changes, issues>
```

Tipos válidos:

| Tipo       | Uso                                              |
| ---------- | ------------------------------------------------ |
| `feat`     | Funcionalidad nueva                              |
| `fix`      | Corrección de bug                                |
| `docs`     | Solo documentación                               |
| `refactor` | Cambio de código que no altera comportamiento    |
| `style`    | Formato, estilos visuales (sin lógica)           |
| `perf`     | Mejora de rendimiento                            |
| `test`     | Tests                                            |
| `build`    | Dependencias, configuración de build             |
| `chore`    | Tareas de mantenimiento que no encajan arriba    |

Reglas:

- Descripción en **imperativo y presente** ("agregar", no "agregando" ni "agregué").
- Primera línea sin punto final, máximo ~72 caracteres.
- Un commit = una intención lógica. Si hay backend + frontend, se detalla en el cuerpo.

Ejemplo:

```
feat(auth): agregar guard de sesión para rutas privadas

- Crear route group (privado) con layout que exige sesión
- Redirigir a /login si el usuario no está autenticado
- Añadir vista /mi-cuenta como primera vista protegida
```

---

## 3. Formato de Pull Requests

Título con el mismo formato de commit (`tipo(alcance): descripción`). Cuerpo siempre en markdown, con esta plantilla:

```markdown
## Contexto
Qué problemática resuelve este PR y de dónde sale (2-4 líneas, conserva el
contexto de lo trabajado en la rama).

## Cambios

### Backend
- Server components, actions, rutas API, base de datos, auth…

### Frontend
- Vistas, componentes, estilos, interacción…

### Infraestructura
- Solo si se trabajó: variables de entorno, despliegue, servicios externos.
- Si no aplica, omitir la sección.

## Cómo probar
Paso a paso numerado para verificar las funcionalidades nuevas o recién
añadidas (ver sección 4).

## Evidencia (opcional)
Capturas o videos de la funcionalidad funcionando.
```

---

## 4. Paso a paso de pruebas (obligatorio en cada PR)

Al redactar el "Cómo probar", la IA debe entregar una guía de comprobación que:

- Sea **numerada y en orden de ejecución real** (empezando por cómo levantar el proyecto: `pnpm install`, `pnpm dev`, etc.).
- Indique para cada paso: **acción → resultado esperado**.
- Cubra el flujo feliz **y** los casos borde relevantes (ej.: acceso sin sesión a ruta protegida, error esperado).
- Use rutas y comandos exactos (`http://localhost:3000/login`, `pnpm build`), nunca descripciones vagas.

---

## 5. Contexto del proyecto

- Plataforma que conecta viajeros con proveedores de experiencias turísticas en Antioquia.
- Stack: Next.js 16 (App Router) + TypeScript, Tailwind CSS v4, Supabase (Auth con Google), despliegue en Railway.
- Gestor de paquetes: pnpm. Detalles y estructura en [README.md](README.md).
- Convenciones visuales (color, tipografía, componentes, iconografía): [guia-estilos.md](docs/guia-estilos.md) es la única fuente de verdad.
- Rutas privadas viven en `src/app/(privado)/` y quedan protegidas por el layout guard del grupo.
