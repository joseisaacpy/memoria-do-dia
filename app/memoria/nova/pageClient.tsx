"use client";

import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import Image from "next/image";
// hooks
import { useState } from "react";

export default function HomeClient() {
  // estado para armazenar o preview da imagem
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  // estado para armazenar os valores do form
  const [formData, setFormData] = useState({
    imageUrl: "",
    title: "",
    description: "",
  });

  // função para lidar com o preenchimento do form
  function handleChangeForm(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  // função para lidar com o evento de capturar a imagem
  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    // preview local
    setPreviewUrl(URL.createObjectURL(file));

    // prepara envio
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (data.secure_url) {
      setFormData((prev) => ({ ...prev, imageUrl: data.secure_url }));
    }
  }

  // função para lidar com o envio dos dados
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!formData.imageUrl || !formData.title || !formData.description) {
      toast.error("Preencha todos os campos e adicione uma imagem!");
      return;
    }

    const res = await fetch("/api/memories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      toast.success("Memória salva com sucesso! 🎉");
      setFormData({ title: "", description: "", imageUrl: "" });
      setPreviewUrl(null);
    } else {
      toast.error("Erro ao salvar memória 😢");
    }
    console.log(formData);
  }

  return (
    <main className="flex flex-col gap-10 min-h-screen w-full bg-black text-white">
      {/* boas vindas */}
      <section className="section-base bg-[#FAFAFB] text-black mt-10 rounded-md">
        <h1 className="text-2xl md:text-4xl font-bold">
          Bem-vindo(a) de volta!
        </h1>
        <p className="text-lg">
          Capture o seu destaque do dia para criar memórias duradouras.
        </p>
      </section>
      {/* section para adicionar foto */}
      <section className="section-base">
        <h2 className="text-2xl md:text-3xl font-bold">Adicionar Imagem</h2>
        <div className="flex flex-col gap-2">
          {/* se houver imagem, mostra o preview da imagem, se não, mostrar "nenhuma imagem selecionada" */}
          {previewUrl ? (
            <Image
              src={previewUrl}
              width={500}
              height={500}
              alt="memory preview"
              className="rounded-md object-cover max-h-[400px] w-full"
            />
          ) : (
            <p>Nenhuma imagem selecionada</p>
          )}
          {/* botão para selecionar imagem */}
          <label
            htmlFor="fileInput"
            className="flex items-center gap-2 w-full md:max-w-[200px] cursor-pointer"
          >
            Adicionar imagem <Upload />
          </label>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="max-w-2xl bg-chart-1 rounded-md p-2"
          />
          {/* se houver imagem, mostrar botão para remover */}
          {previewUrl && (
            <Button
              variant="secondary"
              className="w-fit cursor-pointer"
              onClick={() => {
                setPreviewUrl(null);
                setFormData((prev) => ({ ...prev, imageUrl: "" }));
              }}
            >
              Remover imagem
            </Button>
          )}
        </div>
      </section>
      {/* section para add conteudo da memoria */}
      <section className="section-base">
        <h2 className="text-2xl md:text-3xl font-bold">Detalhes da memória</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <h3 className="text-xl font-semibold">Registar Nova Memória</h3>
            <span>Adicione um título e descreva o seu dia.</span>
          </div>
          <div>
            <label htmlFor="">Título da Memória</label>
            <Input
              name="title"
              value={formData.title}
              onChange={handleChangeForm}
              placeholder="O seu destaque do dia..."
            />
          </div>
          <div>
            <label htmlFor="">Sua Memória</label>
            <Input
              name="description"
              value={formData.description}
              onChange={handleChangeForm}
              placeholder="Escreva aqui sobre o seu dia, as suas experiências ou os seus pensamentos..."
            />
          </div>
          <Button variant="destructive" type="submit">
            Guardar Memória
          </Button>
        </form>
      </section>
    </main>
  );
}
