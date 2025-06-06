import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Web Fisioterapia",
      liveLink: "",
      about:
      "Diseño y desarrollo en progreso de una página web sencilla para un profesional de fisioterapia, con el objetivo de mejorar la visibilidad del servicio, facilitar la reserva de citas online y ofrecer información clara sobre tratamientos y contacto. El proyecto prioriza una experiencia de usuario accesible e intuitiva, incorporando animaciones sutiles, navegación fluida y una interfaz moderna, profesional y adaptable a dispositivos móviles.",
      stack: ["Next.js", "JavaScript", "ShadCN UI", "Tailwindcss", "Framer Motion"],
      img: "/fisio-web.png",
      owner: "Bells Uni",
    },
    {
      title: "Web-Reparaciones",
      gitLink: "",
      liveLink: "",
      about:
      "Sistema de Seguimiento de Reparaciones: Desarrollamos junto a un compañero en mi periodo de practicas, una plataforma web personalizada para ServoFluid y Millenium que permite a los clientes acceder con un código único para verificar el estado de sus reparaciones en tiempo real, mostrando progresos, fechas y detalles técnicos. El sistema optimizó la comunicación cliente-empresa, reduciendo consultas manuales en un 70% mediante una interfaz intuitiva, SIMPLE y segura. ",
      stack: ["React", "TypeScript", "JWT", "SQL Server", "ShadCN UI", "Tailwindcss"],
      owner: "Nare Petrocco",
      img: "/ficha-reparacion.png",
    },
    {
      title: "TaskFlow",
      gitLink: "https://github.com/NarePetrocco/TaskFlow",
      liveLink: "https://task-flow-one-sepia.vercel.app/",
      about:
      "TaskFlow es una aplicación web simple para gestionar flujos de trabajo y tareas. Desarrollada con React, TypeScript, Vite y estilizada con Tailwind CSS y ShadCN UI, la aplicación proporciona una experiencia intuitiva y eficiente.",
      stack: ["React", "TypeScript", "Vite", "Tailwindcss", "ShadCN UI"],
      owner: "Nare Petrocco",
      img: "/taskflow.png",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projectos</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
          owner={work.owner}
        />
      ))}

      <Timeline />
    </section>
  );
}
