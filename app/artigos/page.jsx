import ArtigoHeader from "@/components/ArtigoHeader";
import ArtigoBody from "@/components/ArtigoBody";
import ArtigoFooter from "@/components/ArtigoFooter";
import Separator from "@/components/Separator";

export const metadata = {
  title: "Projeto Faísca - Artigos",
};

export default function Artigo() {
  return (
    <>
      <ArtigoHeader titulo="Titulo" resumo="Resumo" />

      <Separator />

      <ArtigoBody />

      <ArtigoFooter nome="Dudu e Sergio" orientador="Dédé Luis" coordenador="Deus" dataPublicacao="09/12/2023" />
    </>
  );
}