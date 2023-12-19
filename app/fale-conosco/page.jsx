import "./fale-conosco.css";
import "./layout.css";

export default function faleConosco() {
  return (
    <main>
      <section className="card-fale-conosco">
        <div className="left">
          <h1> Fale Conosco </h1>
          <p className="texto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae
            mi nunc. Nullam vel diam id neque imperdiet posuere efficitur
            accumsan tortor.
          </p>
          <img src="/formulario.png" id="img-formulario" />
        </div>

        <div className="content">
          <form action="#">
            <div className="card-nome">
              <label> Nome </label>
              <input
                className="nome"
                type="text"
                name="nome"
                placeholder="Digite seu nome completo"
                required
              />
            </div>

            <div className="card-email">
              <label> Email </label>
              <input
                className="email"
                type="email"
                name="email"
                placeholder="Digite seu email"
                required
              />
            </div>

            <div className="card-mensagem">
              <label> Mensagem </label>
              <textarea
                className="mensagem"
                placeholder="Digite sua mensagem"
                required
              />
            </div>

            <div className="botao-enviar">
              <button type="submit" id="btn">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}