"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/vensys.png",
    jobTitle: "Desarolladora ",
    company: "Vensys y Metasuma",
    jobType: "Practicas",
    duration: "Sept 2024 - May 2025",
    stuffIDid: [
      "Automatización de flujos de trabajo mediante Power Automate, optimizando procesos internos.",
      "Desarrollo de plantillas HTML para distintos usos corporativos como facturas, recibos y documentación personalizada.",
      "Colaboré con un Desarrollador Full-Stack en el desarrollo de varias pantallas de una aplicación, agilizando el desarrollo y la colaboración mediante el uso de GitHub.",
      "Participé en la creación de una aplicación  web sobre control de reparaciones de una empresa asociada, contribuyendo al diseño y desarrollo de la interfaz de usuario.",
      "Utilice Bases de Datos SQL para almacenar y gestionar datos de manera eficiente, asegurando la integridad y disponibilidad de la información."
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Experiencia de Trabajo</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-linear-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
