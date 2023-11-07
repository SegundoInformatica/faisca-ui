import CardSaibaMais from "@/components/CardSaibaMais";
import CardTopico from "@/components/CardTopico";
import Carousel from "@/components/Carousel";
import Separator from "@/components/Separator";
import Image from "next/image";

import { BiBookAlt } from "react-icons/bi";

import "./home.css";

export const metadata = {
  title: "Projeto Faísca - Home",
};

const slides = ["/placeholder.jpg", "/placeholder.jpg", "/placeholder.jpg"];

export default function Home() {
  return (
    <section className="home">
      <Carousel>
        {slides.map((s, i) => (
          <Image key={i} src={s} width={1000} height={250} alt="Placeholder" />
        ))}
      </Carousel>

      <Separator>Recém-Lançados</Separator>

      <div className="cards">
        <CardSaibaMais link="" image="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </CardSaibaMais>
        <CardSaibaMais link="" image="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam omnis
          assumenda consectetur est perferendis exercitationem mollitia.
        </CardSaibaMais>
        <CardSaibaMais link="" image="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam omnis
          assumenda consectetur est perferendis exercitationem mollitia
          laudantium? Temporibus autem, itaque perferendis aliquid vel omnis
          possimus eveniet tempora rem!
        </CardSaibaMais>
        <CardSaibaMais link="" image="/placeholder.jpg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </CardSaibaMais>
        <CardSaibaMais link="" image="/placeholder.jpg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam omnis
          assumenda consectetur est perferendis exercitationem mollitia.
        </CardSaibaMais>
        <CardSaibaMais link="" image="/placeholder.jpg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam omnis
          assumenda consectetur est perferendis exercitationem mollitia
          laudantium? Temporibus autem, itaque perferendis aliquid vel omnis
          possimus eveniet tempora rem!
        </CardSaibaMais>
      </div>

      <Separator>Mais Populares</Separator>

      <div className="topics">
        <CardTopico icon={<BiBookAlt />}>Projeto</CardTopico>
        <CardTopico icon={<BiBookAlt />}>Projeto</CardTopico>
        <CardTopico icon={<BiBookAlt />}>Projeto</CardTopico>
        <CardTopico icon={<BiBookAlt />}>Projeto</CardTopico>
        <CardTopico icon={<BiBookAlt />}>Projeto</CardTopico>
        <CardTopico icon={<BiBookAlt />}>Projeto</CardTopico>
        <CardTopico icon={<BiBookAlt />}>Projeto</CardTopico>
        <CardTopico icon={<BiBookAlt />}>Projeto</CardTopico>
        <CardTopico icon={<BiBookAlt />}>Projeto</CardTopico>
      </div>
    </section>
  );
}
