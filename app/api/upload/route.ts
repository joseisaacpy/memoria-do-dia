// importa libs
import cloudinary from "@/lib/cloudinary";
import prisma from "@/lib/prisma";
// importa next response
import { NextResponse } from "next/server";

// rota para upload
export async function POST(req: Request) {
  try {
    const data = await req.formData();
    const file = (await data.get("file")) as File;

    if (!file) {
      return NextResponse.json(
        { message: "Nenhum arquivo foi enviado" },
        { status: 400 }
      );
    }
    const bytes = await file.arrayBuffer();
    const buffer = await Buffer.from(bytes);
    // faz upload para o cloudinary
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "memoria-do-dia" }, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        })
        .end(buffer);
    });
    return NextResponse.json(result);
  } catch (error) {}
}

export async function GET(req: Request) {
  return NextResponse.json({ message: "Hello" });
}
