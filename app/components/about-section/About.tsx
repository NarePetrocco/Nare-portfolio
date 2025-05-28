import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";


const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        Amplifico la voz de las marcas a través de la web.
      </AnimatedTitle>
      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            Mi pasión está en crear soluciones sólidas que impulsen el crecimiento de los negocios.
            Ya sea un sitio web que potencie la visibilidad de una marca o soluciones que optimicen 
            procesos manuales, disfruto acompañar a las marcas desde su punto A hasta ese punto B soñado,
            mejorando constantemente en el camino.
          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            Desde que escribí mis primeras líneas de código, he tratado de ir mejorando y ampliando
            mis habilidades en desarrollo, incorporando diseño UI/UX y enfrentando desafíos cada
            para seguir creciendo dia a dia profesionalmente.
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
            Cada desafío es único, por eso me aseguro de aprender y crecer con cada uno, dando siempre lo mejor de mí
            y entregando soluciones de las que los negocios se sientan orgullosos. ¿Querés saber más?
            Acá va... <br className="hidden md:block" />
            <Link
              className="underline"
              href={
                "https://drive.google.com/file/d/1FYbWu6-4lspvFFbCDpPRvAzjrWTnku2c/view?usp=sharing"
              }
            >
              Mi CV
            </Link>
            .
          </AnimatedBody>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Herramientas Frontend
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              JavaScript(ES6+), React, Next.js, TypeScript,
              React Query, HTML5, Git/GitHub, React Hook Form.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              UI Librerias
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              CSS3/SCSS/SASS, Tailwind CSS, Styled Components, Framer
              Motion, Bootstrap.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Herramientas de Diseño
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Figma, UX Research, UI Design, Prototyping.
            </AnimatedBody>
          </div>
        </div>
      </div>
      <div className="mt-10 sm:mt-20 lg:mt-10 mx-auto w-fit">
       
      </div>
    </section>
  );
}
