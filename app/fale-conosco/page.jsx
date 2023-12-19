import "./fale-conosco.css";

export default function faleConosco() {
  return (
    <>
      <h1> Fale Conosco </h1>
      <div className="main">
        <div className="content">
          <div className="left">
            <img
              src="/formulario.png"
              width={350}
              height={460}
              id="img-formulario"
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

            <div className="btn-area">
              <button type="submit" id="btn">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
