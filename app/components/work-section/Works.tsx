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
      "Diseñé y desarrollé una página web para un profesional de fisioterapia, con el objetivo de mejorar la visibilidad del servicio, facilitar la reserva de citas online y ofrecer información clara sobre tratamientos y contacto. El proyecto priorizó una experiencia de usuario accesible e intuitiva, incorporando animaciones sutiles, navegación fluida y una interfaz moderna, profesional y adaptable a dispositivos móviles.",
      stack: ["next.js", "javascript", "shadcn ui", "tailwindcss", "framer motion"],
      img: "/fisio-web.png",
      owner: "Bells Uni",
    },
    {
      title: "Multi-step form",
      gitLink: "https://github.com/adex-hub/multi-step-form-main",
      liveLink: "https://ade-loremgaming.netlify.app/",
      about:
        "This site features a clean, user-friendly multi-step form for subscribing to a gaming service. Users input personal info, select a plan (monthly or yearly), choose add-ons (online service, larger storage, customizable profile), and review the summary before confirming.",
      stack: ["html", "sass", "javascript", "ms clarity"],
      img: "/multistep.svg",
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
