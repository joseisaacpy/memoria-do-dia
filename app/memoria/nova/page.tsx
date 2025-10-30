// para definir o titulo da pagina
export const metadata = {
  title: "Nova Memória",
};

// importando a pagina
import HomeClient from "./pageClient";

// retorna a pagina
export default function Home() {
  return <HomeClient />;
}
