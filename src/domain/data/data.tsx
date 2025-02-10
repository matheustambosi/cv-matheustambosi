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
      aboutMe: "Bio",
      experience: "Journey",
      projects: "Labs",
    },
    "/bio": {
      label: "Bio",
      descriptions: [
        "Hey there! I am Matheus Tambosi, a Brazilian currently exploring life in Auckland, New Zealand.",
        "I am 23 years old and have been working in the IT field for almost five years now.",
        "My passion for technology started early, influenced by video games, and over the years, I have gained experience in software development, especially in the fintech sector.",
        "I enjoy turning ideas into real-world solutions, from backend logic to user-friendly interfaces.",
        "When I am not in front of my computer, you can probably find me exploring nature or planning my next project—whether it's tech-related or something completely different!",
      ],
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
      label: "Journey",
    },
  },
  pt: {
    "my-info": {
      name: "Matheus Tambosi",
      role: "Engenheiro de Software",
    },
    sidebar: {
      aboutMe: "Bio",
      experience: "Jornada",
      projects: "Labs",
    },
    "/bio": {
      label: "Sobre Mim",
      descriptions: [
        "Olá! Eu sou Matheus Tambosi, um brasileiro explorando a vida em Auckland, Nova Zelândia.",
        "Tenho 23 anos e trabalho na área de TI há quase cinco anos.",
        "Minha paixão pela tecnologia começou cedo, influenciada pelos videogames, e ao longo dos anos adquiri experiência em desenvolvimento de software, especialmente no setor de fintechs.",
        "Gosto de transformar ideias em soluções reais, desde a lógica do backend até interfaces intuitivas para os usuários.",
        "Quando não estou na frente do computador, provavelmente estou explorando a natureza ou planejando meu próximo projeto—seja algo relacionado à tecnologia ou algo completamente diferente!",
      ],
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
      label: "Jornada",
    },
  },
};

export const getTexts = (lang: string, page: string): any => {
  return texts[lang][page];
};
