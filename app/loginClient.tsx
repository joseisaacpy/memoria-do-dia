"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function LoginClient() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-zinc-900 via-black to-zinc-950 text-white">
      <section className="flex flex-col items-center text-center gap-6 p-8 rounded-xl bg-zinc-900/50 border border-zinc-800 shadow-lg">
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/assets/images/logo.png"
            alt="Logo Memória"
            width={250}
            height={250}
          />
          <h1 className="text-3xl font-bold">Bem-vindo ao Memória</h1>
          <p className="text-zinc-400 text-sm max-w-xs">
            Guarde suas lembranças com segurança e acesse de qualquer lugar.
          </p>
        </div>

        {/* Botão de login com o Google */}
        <Button
          variant="outline"
          className="cursor-pointer flex items-center justify-center gap-2 text-black"
          onClick={() =>
            signIn("google", { callbackUrl: "/memoria/dashboard" })
          }
        >
          <Image
            src="/assets/images/google-icon.png"
            alt="Google"
            width={20}
            height={20}
            className="mr-1"
          />
          Entrar com Google
        </Button>
      </section>
    </main>
  );
}
