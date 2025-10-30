"use client";

import Image from "next/image";
import { useState } from "react";

type Memory = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
};

export default function DashboardPage() {
  const [memories] = useState<Memory[]>([
    {
      id: 1,
      title: "Pôr do Sol na Praia 🌅",
      description: "Um fim de tarde incrível com os amigos.",
      imageUrl:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      createdAt: "2025-10-15",
    },
    {
      id: 2,
      title: "Primeiro projeto React 🚀",
      description: "Consegui terminar meu primeiro projeto em React!",
      imageUrl:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
      createdAt: "2025-09-02",
    },
    {
      id: 3,
      title: "Café e código ☕💻",
      description: "A manhã perfeita para programar.",
      imageUrl:
        "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80",
      createdAt: "2025-08-21",
    },
  ]);

  return (
    <main className="min-h-screen w-full bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Suas Memórias</h1>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {memories.map((memory) => (
          <div
            key={memory.id}
            className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg border border-zinc-800"
          >
            <Image
              src={memory.imageUrl}
              alt={memory.title}
              width={400}
              height={250}
              className="object-cover w-full h-56"
            />
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-xl font-semibold">{memory.title}</h2>
              <p className="text-zinc-400 text-sm">{memory.description}</p>
              <span className="text-xs text-zinc-500">
                {new Date(memory.createdAt).toLocaleDateString("pt-BR")}
              </span>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
