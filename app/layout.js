import Image from "next/image";
import { Roboto } from "next/font/google";

import { AiOutlineInstagram } from "react-icons/ai";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";

import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Projeto Faísca",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={roboto.className}>
        <header className="full-bleed">
          <Image src="/logo.svg" width={150} height={37.5} alt="Logo" />

          <div className="wrapper">
            <section className="search-bar">
              <input type="text" placeholder="Digite o que você procura" />
              <button>
                <FaMagnifyingGlass />
              </button>
            </section>

            <button className="hamburguer-menu">
              <FiMenu />
            </button>
          </div>
        </header>

        <main>{children}</main>

        <footer className="full-bleed">
          <Image src="/logo.svg" width={150} height={37.5} alt="Logo" />

          <ul className="links">
            <li>
              <a href="">Sobre Nós</a>
            </li>
            <li>
              <a href="/politicas">Políticas e Privacidade</a>
            </li>
            <li>
              <a href="/equipe">Conheça nossa equipe</a>
            </li>
            <li>
              <a href="/fale-conosco">Fale Conosco</a>
            </li>
          </ul>

          <ul className="social">
            <li>
              <a href="https://www.instagram.com/faiscacientifica">
                <AiOutlineInstagram />
              </a>
            </li>
          </ul>

          <p className="copyright">Projeto Faísca © 2023</p>
        </footer>
      </body>
    </html>
  );
}
