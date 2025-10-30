import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { title, description, imageUrl } = data;

    const memory = await prisma.memory.create({
      data: { title, description, imageUrl },
    });

    return NextResponse.json(memory);
  } catch (error) {
    console.error("Erro ao salvar memória:", error);
    return NextResponse.json(
      { error: "Erro ao salvar memória" },
      { status: 500 }
    );
  }
}
