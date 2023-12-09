import "./ArtigoFooter.css";

export default function ArtigoFooter({
  nome,
  orientador,
  coordenador,
  dataPublicacao,
}) {
  return (
    <div className="artigo-footer">
      <section className="about">
        <p>
          Autor(es): <span>{nome}</span>
        </p>
        <p>
          Orientador(a): <span>{orientador}</span>
        </p>
        <p>
          Coordenador(a): <span>{coordenador}</span>
        </p>
        <p>
          Data de publicação: <span>{dataPublicacao}</span>
        </p>
      </section>

      <a className="download-pdf" href="#">PDF</a>
    </div>
  );
}
