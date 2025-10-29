"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main>
      <section className="h-screen w-full flex gap-2 flex-col items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl font-bold">
          404 - Página não encontrada
        </h1>
        <p className="text-lg">
          Desculpe, a página que voce procurou não foi encontrada.
        </p>
        <Link href="/">
          <Button className="mt-4">
            Voltar para a home <Home />
          </Button>
        </Link>
      </section>
    </main>
  );
}
