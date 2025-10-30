"use client";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";

export default function LoginClient() {
  return (
    <main>
      <Button
        onClick={() => {
          signIn("google", { callbackUrl: "/" });
        }}
      >
        <LogIn className="mr-2 h-4 w-4" />
        Login
      </Button>
    </main>
  );
}
