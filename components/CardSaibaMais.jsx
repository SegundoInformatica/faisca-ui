import Image from "next/image";

import "./CardSaibaMais.css";

export default function CardSaibaMais({ image, link, children }) {
  return (
    <div className="card__saibamais">
      <div className="card__image">
        {image && (
          <Image src={image} width={150} height={150} alt="Placeholder" />
        )}
      </div>

      <div className="card__content">{children}</div>

      <a href={link} className="card__button">
        SAIBA MAIS
      </a>
    </div>
  );
}
