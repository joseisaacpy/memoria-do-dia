import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "./ui/button";

// define o tipo da memória
type Memory = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
};

export default function CardMemory({
  id,
  title,
  description,
  imageUrl,
  createdAt,
}: Memory) {
  return (
    <Card className="overflow-hidden bg-white text-black transition-all duration-200">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-lg font-semibold truncate">
          {title}
        </CardTitle>
        <time dateTime={createdAt} className="text-sm whitespace-nowrap">
          {new Date(createdAt).toLocaleDateString("pt-BR")}
        </time>
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        <div className="relative w-full h-48 rounded-md overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardContent>

      <CardFooter>
        <Link href={`/memories/${id}`} className="w-full">
          <Button className="w-full cursor-pointer">Ver memória completa</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
