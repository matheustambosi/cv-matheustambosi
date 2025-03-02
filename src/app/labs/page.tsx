"use client";
import { useLanguage } from "@/providers/language-provider";
import { Project } from "./components/project";
import { usePathname } from "next/navigation";
import { getTexts } from "@/domain/data/data";
import { ProjectType } from "@/domain/types/project";

export default function Labs() {
  const { lang } = useLanguage();
  const pathname = usePathname();

  const { label, description, projects } = getTexts(lang, pathname);

  return (
    <div className="relative py-4 pl-4 w-full z-10">
      <h1 className="text-white text-md lg:text-lg font-semibold mb-2 lg:mb-4">
        {label}
      </h1>

      <h1 className="text-white opacity-70 mb-4">{description}</h1>

      <div className="flex flex-col gap-4 pr-4">
        {projects.map((project: ProjectType) => (
          <Project key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
}
