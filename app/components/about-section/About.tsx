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
        Pasión por aprender, motivación por crear...
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
            mis habilidades en desarrollo, incorporo diseño UI/UX y me gusta enfrentar nuevos desafíos
            para seguir creciendo dia a dia profesionalmente.
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
            Cada proyecto es único, por eso me aseguro de aprender y crecer con cada uno de ellos, dando siempre lo mejor de mí
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
              Frameworks y Lenguajes Frontend
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              JavaScript(ES6+) . Angular(2+) . React . Next.js . TypeScript .
              React Query . HTML5 . React Hook Form.
            </AnimatedBody>
          </div>
          <div>
            <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Backends y APIs
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base mb-2 md:text-xl leading-8">
              Node.js . Express.js . NestJS . MySQL .
              RESTful APIs . GraphQL.
            </AnimatedBody>
          </div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Librerias UI/ Estilos
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              CSS3/SCSS/SASS . Tailwind CSS . Styled Components . Framer
              Motion . Bootstrap . Shadcn/ui.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Diseño y UX
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Figma, UX Research, UI Design, Prototyping.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Control de Versiones
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Git . GitHub
            </AnimatedBody>
          </div>
        </div>
      </div>
      <div className="mt-10 sm:mt-20 lg:mt-10 mx-auto w-fit">
       
      </div>
    </section>
  );
}
