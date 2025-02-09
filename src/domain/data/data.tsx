/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  React,
  CSharp,
  NextJs,
  TailwindCSS,
  TypeScript,
} from "developer-icons";

const texts: Record<string, Record<string, any>> = {
  en: {
    "my-info": {
      name: "Matheus Tambosi",
      role: "Software Engineer",
    },
    sidebar: {
      aboutMe: "About Me",
      experience: "Experiences",
      projects: "Labs",
    },
    "/about-me": {
      label: "About Me",
    },
    "/labs": {
      label: "Labs",
      description:
        "In this section you can find some personal side-projects and experiments that I am doing during my spare time.",
      projects: [
        {
          name: "GymBuddy",
          description:
            "GymBuddy is an website to create and check your gym workout routines, and track your progress.",
          image: "/gymbuddy-screen.png",
          url: "https://gymbuddy.matheustambosi.com",
          languages: (
            <>
              <React
                size={20}
                className="filter grayscale hover:grayscale-0 transition duration-300 lg:w-6 lg:h-6"
              />
              <NextJs
                size={20}
                className="filter grayscale hover:grayscale-0 transition duration-300 lg:w-6 lg:h-6"
              />
              <TailwindCSS
                size={20}
                className="filter grayscale hover:grayscale-0 transition duration-300 lg:w-6 lg:h-6"
              />
              <CSharp
                size={20}
                className="filter grayscale hover:grayscale-0 transition duration-300 lg:w-6 lg:h-6"
              />
              <TypeScript
                size={20}
                className="filter grayscale hover:grayscale-0 transition duration-300 lg:w-6 lg:h-6"
              />
            </>
          ),
        },
        {
          name: "AtletiGo",
          description:
            "AtletiGo is an website to connect university students and athletes to train together and check the days of the university championships.",
          image: "/atletigo-screen.png",
          url: "https://atletigoweb.matheustambosi.com",
          languages: (
            <>
              <React
                size={20}
                className="filter grayscale hover:grayscale-0 transition duration-300 lg:w-6 lg:h-6"
              />
              <NextJs
                size={20}
                className="filter grayscale hover:grayscale-0 transition duration-300 lg:w-6 lg:h-6"
              />
              <TailwindCSS
                size={20}
                className="filter grayscale hover:grayscale-0 transition duration-300 lg:w-6 lg:h-6"
              />
              <CSharp
                size={20}
                className="filter grayscale hover:grayscale-0 transition duration-300 lg:w-6 lg:h-6"
              />
              <TypeScript
                size={20}
                className="filter grayscale hover:grayscale-0 transition duration-300 lg:w-6 lg:h-6"
              />
            </>
          ),
        },
      ],
    },
    "/experiences": {
      label: "Experiences",
    },
  },
  pt: {
    "my-info": {
      name: "Matheus Tambosi",
      role: "Engenheiro de Software",
    },
    sidebar: {
      aboutMe: "Sobre Mim",
      experience: "Experiências",
      projects: "Labs",
    },
    "/about-me": {
      label: "Sobre Mim",
    },
    "/labs": {
      label: "Labs",
      description:
        "Nesta seção, você pode encontrar alguns projetos pessoais e experimentos que faço durante meu tempo livre.",
      projects: [
        {
          name: "GymBuddy",
          description:
            "GymBuddy é um site para criar e conferir suas rotinas de treino na academia, e acompanhar seu progresso.",
          image: "/gymbuddy-screen.png",
          url: "https://gymbuddy.matheustambosi.com",
          languages: (
            <>
              <React
                size={20}
                className="filter grayscale hover:grayscale-0 transition duration-300 lg:w-6 lg:h-6"
              />
              <NextJs
                size={20}
                className="filter grayscale hover:grayscale-0 transition duration-300 lg:w-6 lg:h-6"
              />
              <TailwindCSS
                size={20}
                className="filter grayscale hover:grayscale-0 transition duration-300 lg:w-6 lg:h-6"
              />
              <CSharp
                size={20}
                className="filter grayscale hover:grayscale-0 transition duration-300 lg:w-6 lg:h-6"
              />
              <TypeScript
                size={20}
                className="filter grayscale hover:grayscale-0 transition duration-300 lg:w-6 lg:h-6"
              />
            </>
          ),
        },
        {
          name: "AtletiGo",
          description:
            "AtletiGo é um site para conectar estudantes universitários e atletas para treinarem juntos e conferir os dias dos campeonatos universitários.",
          image: "/atletigo-screen.png",
          url: "https://atletigoweb.matheustambosi.com",
          languages: (
            <>
              <React
                size={20}
                className="filter grayscale hover:grayscale-0 transition duration-300 lg:w-6 lg:h-6"
              />
              <NextJs
                size={20}
                className="filter grayscale hover:grayscale-0 transition duration-300 lg:w-6 lg:h-6"
              />
              <TailwindCSS
                size={20}
                className="filter grayscale hover:grayscale-0 transition duration-300 lg:w-6 lg:h-6"
              />
              <CSharp
                size={20}
                className="filter grayscale hover:grayscale-0 transition duration-300 lg:w-6 lg:h-6"
              />
              <TypeScript
                size={20}
                className="filter grayscale hover:grayscale-0 transition duration-300 lg:w-6 lg:h-6"
              />
            </>
          ),
        },
      ],
    },
    "/experiences": {
      label: "Experiências",
    },
  },
};

export const getTexts = (lang: string, page: string): any => {
  return texts[lang][page];
};
