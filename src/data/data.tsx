type TextKeys = "aboutMe" | "experience" | "projects";

const texts: Record<string, Record<string, any>> = {
  en: {
    "my-info": {
      name: "Matheus Tambosi",
      role: "Software Engineer",
    },
    sidebar: {
      aboutMe: "About Me",
      experience: "Experience",
      projects: "Projects",
    },
    "/about-me": {
      label: "About Me",
    },
    "/projects": {
      label: "Projects",
      projects: [
        {
          name: "GymBuddy",
          description:
            "GymBuddy is an PWA website (PWA) to create and check your gym workout routines, and track your progress.",
          image: "/gymbuddy.png",
        },
        {
          name: "AtletiGo",
          description:
            "AtletiGo is an PWA website to connect university students and athletes to train together and check the days of the university championships.",
          image: "/atletigo.png",
        },
      ],
    },
  },
  pt: {
    "my-info": {
      name: "Matheus Tambosi",
      role: "Engenheiro de Software",
    },
    sidebar: {
      aboutMe: "Sobre Mim",
      experience: "Experiência",
      projects: "Projetos",
    },
    "/about-me": {
      label: "Sobre Mim",
    },
    "/projects": {
      label: "Projetos",
      projects: [
        {
          name: "GymBuddy",
          description:
            "GymBuddy é um site PWA para criar e conferir suas rotinas de treino na academia, e acompanhar seu progresso.",
          image: "/gymbuddy.png",
        },
        {
          name: "AtletiGo",
          description:
            "AtletiGo é um site PWA para conectar estudantes universitários e atletas para treinarem juntos e conferir os dias dos campeonatos universitários.",
          image: "/atletigo.png",
        },
      ],
    },
  },
};

export const getTexts = (lang: string, page: string): any => {
  return texts[lang][page];
};
