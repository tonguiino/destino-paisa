import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function MiCuentaPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // El layout del grupo ya garantiza sesión; esto solo cubre el tipado.
  if (!user) redirect("/login");

  async function signOut() {
    "use server";
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-2xl border border-neutral-200 bg-white p-8 text-center shadow-sm">
        <h1 className="text-xl font-semibold">Mi cuenta</h1>
        <p className="mt-2 text-sm text-neutral-500">{user.email}</p>

        <form action={signOut}>
          <button className="mt-6 w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm font-medium transition hover:bg-neutral-50">
            Cerrar sesión
          </button>
        </form>
      </div>
    </main>
  );
}
