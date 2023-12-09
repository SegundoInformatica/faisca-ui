import Titulo from "@/components/infoArtigo";
import Artigo from "@/components/Artigo";
import InfoAdicional from "@/components/infoAdicional";


export const metadata = {
  title: "Projeto Faísca - Artigos",
};


export default function Home() {
  return (
    <div className="conteiner">
      <Titulo nome="Titulo do texto" resumo="Resumo" />
      <br />
      <hr />
      <Artigo />
      <br />
      <hr />
      <InfoAdicional autor="Dudu e Sergio" descricao="Dudu e Sergio ue" orientador="Dédé Luiz" coordenador="Deus" data="se Deus quiser hoje" />
    </div>
  );
}
