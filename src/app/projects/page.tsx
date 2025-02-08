"use client";
import { useLanguage } from "@/providers/language-provider";
import { Project } from "./components/project";
import { usePathname } from "next/navigation";
import { getTexts } from "@/data/data";

export default function Projects() {
  const { lang } = useLanguage();
  const pathname = usePathname();

  const { label, projects } = getTexts(lang, pathname);

  return (
    <div className="relative p-4 w-full z-10">
      <h1 className="text-white text-md font-bold mb-4">{label}</h1>

      <div className="flex flex-col gap-4 min-h-[510px] overflow-y-auto pr-4">
        {projects.map((project: any) => (
          <Project key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
}
