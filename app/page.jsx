import Carousel from "@/components/Carousel";
import Image from "next/image";

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
    </section>
  );
}
