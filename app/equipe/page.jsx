import "./equipe.css";
import "./layout.css";

export default function equipe() {
  return (
    <main>
      <section className="equipe">
        <h1>Conheça nossa equipe</h1>
        <p className="texto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survivednot
          onlysince the industry&apos;s standard dummy nown printer took a g
        </p>

        <div className="card">
          <div className="cabecalho">
            <img src="/maos.png" alt="" id="img-equipe" />
            <div className="integrantes">
              <h3>
                Confira nossos <span>membros</span>
              </h3>
              <ul className="integrantes-esquerda">
                <li>Ana Beatriz Almeida</li>
                <li>Ana Olindin</li>
                <li>André Luis Scalise Albanese Junior</li>
                <li>Beatriz Barros</li>
                <li>Carlos Eduardo Costa</li>
                <li>Eduardo Lima</li>
              </ul>
            </div>
          </div>

          <div className="integrantes-direita">
            <ul className="integrantes">
              <li>Giovana Godoy Petrucci</li>
              <li>Leticia Silveira Lemos</li>
              <li>Maria Isabelly Machado</li>
              <li>Nathan Do Carmo</li>
              {/* <li>Sara Souza</li> */}
              <li>Sarah de Moura Gardinal</li>
              <li>Sergio Gabriel Barbosa dos Santos</li>
            </ul>
          </div>

          <div className="vetores">
            <img
              src="/estrela1.png"
              alt="Vetor de uma estrela amarela"
              id="estrela-amarela"
            />
            <img
              src="/estrela2.png"
              alt="Vetor de uma estrela rosa"
              id="estrela-rosa"
            />
          </div>
        </div>
      </section>
    </main>
  );
}