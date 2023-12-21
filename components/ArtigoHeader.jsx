  import Image from "next/image";
import Audio from "./Audio.jsx";
import "./ArtigoHeader.css";

export default function ArtigoHeader({ titulo, resumo, audioSource }) {
  return (
    <div className="artigo-header">
      <section className="textual">
        <h1>{titulo}</h1>

        <Audio audioSource={audioSource} />

        <article className="resumo">
          <h2>Resumo</h2>
          

          <p>{resumo}</p>
        </article>
      </section>

      <section className="visual">
        <Image
          src="/placeholder.jpg"
          width={300}
          height={240}
          alt="Placeholder"
        />
        <Image
          src="/placeholder.jpg"
          width={300}
          height={240}
          alt="Placeholder"
        />
        <Image
          src="/placeholder.jpg"
          width={300}
          height={480}
          alt="Placeholder"
        />
      </section>
    </div>
  );
}
