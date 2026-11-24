import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-semibold tracking-tight">
        Destino Paisa 🏔️
      </h1>
      <p className="mt-3 max-w-md text-center text-sm text-neutral-500">
        Tours, transporte y experiencias auténticas en Antioquia.
      </p>
      <Link
        href="/login"
        className="mt-8 rounded-lg border border-neutral-300 px-5 py-2.5 text-sm font-medium transition hover:bg-neutral-50"
      >
        Entrar
      </Link>
    </main>
  );
}
