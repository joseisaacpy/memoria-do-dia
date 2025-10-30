"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-zinc-900 via-black to-zinc-950 text-white">
      <section className="flex gap-2 flex-col items-center justify-center text-center">
        {/* Logo da aplicação (opcional) */}
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/assets/images/logo.png"
            alt="Logo Memória"
            width={250}
            height={250}
          />
        </div>

        <h1 className="text-2xl md:text-4xl font-bold">
          404 - Página não encontrada
        </h1>
        <p className="text-lg">
          Desculpe, a página que voce procurou não foi encontrada.
        </p>
        <Link href="/">
          <Button variant="outline" className="text-black mt-4 cursor-pointer">
            Voltar para a home <Home />
          </Button>
        </Link>
      </section>
    </main>
  );
}
