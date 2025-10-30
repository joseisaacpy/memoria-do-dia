"use client";

// hooks
import { useState } from "react";
// importa image
import Image from "next/image";
// importa icon
import { CirclePlus } from "lucide-react";
// importa link
import Link from "next/link";
// importa button
import { Button } from "@/components/ui/button";
// importa card de memoria
import CardMemory from "@/components/CardMemory";

// define o tipo da memória
type Memory = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
};

export default function DashboardPage() {
  const [memories] = useState<Memory[]>([]);

  return (
    <main className="min-h-screen w-full bg-black text-white p-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-5">Suas Memórias</h1>
      {memories.length === 0 ? (
        <section className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl md:text-3xl">
            Nenhuma memória encontrada!
          </h1>
          <Link href="/memoria/nova">
            <Button variant="destructive" className="cursor-pointer">
              Criar uma memória <CirclePlus className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </section>
      ) : (
        // grid de memorias
        <section
          aria-label="Lista de memórias"
          className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {memories.map((memory) => {
            return <CardMemory key={memory.id} {...memory} />;
          })}
        </section>
      )}
    </main>
  );
}
