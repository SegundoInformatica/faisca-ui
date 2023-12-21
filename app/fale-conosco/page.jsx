import "./fale-conosco.css";
import Image from "next/image";

export const metadata = {
  title: "Projeto Faísca - Fale Conosco",
};

export default function faleConosco() {
  return (
    <section className="fale-conosco">
      <h1> Fale Conosco </h1>
      <main>
        <div className="content">
          <div className="left">
            <Image
              src="/formulario.png"
              width={350}
              height={460}
              id="img-formulario"
              alt="Telefone com balões de mensagem"
            />
          </div>

          <div className="right">
            <div className="card-nome">
              <label> Nome </label>
              <input
                className="field"
                type="text"
                name="nome"
                id="nome"
                placeholder="Digite seu nome completo"
              />
            </div>

            <div className="card-email">
              <label> Email </label>
              <input
                className="field"
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu email"
              />
            </div>

            <div className="card-mensagem">
              <label> Mensagem </label>
              <textarea
                className="field"
                id="mensagem"
                placeholder="Digite sua mensagem"
              />
            </div>

            <div className="botao-enviar">
              <button type="submit" id="btn">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
