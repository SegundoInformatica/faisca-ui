import "./CardTopico.css";

export default function CardTopico({ icon, link, children: title }) {
  return (
    <a href={link} className="card__topico">
      {/* Se tiver icone, mostre */}
      {icon && icon}

      <h2>{title}</h2>
    </a>
  );
}
