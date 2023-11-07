import Image from "next/image";

import "./Card.css";

export function SaibaMaisCard({ image, link, children }) {
  return (
    <div className="card">
      <div className="card__image">
        {image && (
          <Image src={image} width={150} height={150} alt="Placeholder" />
        )}
      </div>

      <div className="card__content">{children}</div>

      <a href={link} className="card__saibamais">
        SAIBA MAIS
      </a>
    </div>
  );
}
