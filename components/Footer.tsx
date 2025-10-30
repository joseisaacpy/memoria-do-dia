import { Coffee } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full p-4 gap-2">
      <p className="text-sm flex items-center justify-center gap-2">
        Suas melhores <strong>memórias</strong> num só lugar.
      </p>
      <Separator />
      <p className="text-sm flex items-center justify-center gap-2">
        Desenvolvido por{" "}
        <a
          href="https://github.com/joseisaacpy"
          target="_blank"
          className="underline font-black hover:text-slate-700 transition-all duration-300"
        >
          joseisaacpy
        </a>
        <Coffee />
      </p>
    </footer>
  );
}
