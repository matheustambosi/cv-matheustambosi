"use client";

import { getTexts } from "@/domain/data/data";
import { useLanguage } from "@/providers/language-provider";
import { usePathname } from "next/navigation";
import { Timeline } from "./components/timeline";
import { useState } from "react";

export default function Experience() {
  const { lang } = useLanguage();
  const pathname = usePathname();

  const { label } = getTexts(lang, pathname);

  const [selected, setSelected] = useState("both");

  return (
    <div className="relative py-4 px-4 w-full z-10 flex flex-col lg:block">
      <h1 className="hidden lg:block text-white text-md lg:text-lg font-semibold mb-4">
        {label}
      </h1>

      <div className="absolute text-white hidden lg:flex flex-col">
        <div
          className="flex items-center gap-2"
          onClick={() => setSelected("education")}
        >
          <input
            type="checkbox"
            name="education"
            id="education"
            checked={selected === "education"}
          />
          <label htmlFor="education" className="opacity-50">
            Educação
          </label>
        </div>
        <div
          className="flex items-center gap-2"
          onClick={() => setSelected("professional")}
        >
          <input
            type="checkbox"
            name="professional"
            id="professional"
            checked={selected === "professional"}
          />
          <label htmlFor="professional" className="opacity-50">
            Profissional
          </label>
        </div>
        <div
          className="flex items-center gap-2"
          onClick={() => setSelected("both")}
        >
          <input
            type="checkbox"
            name="both"
            id="both"
            checked={selected === "both"}
          />
          <label htmlFor="both" className="opacity-50">
            Ambos
          </label>
        </div>
      </div>

      <div className="hidden lg:block w-full">
        <Timeline selected={selected} />
      </div>

      <div className="lg:hidden">
        <div className="flex flex-col">
          <h1 className="text-white text-md text-left lg:text-lg font-semibold mb-4">
            Education
          </h1>

          <div className="w-1/4 sm:w-1/6 md:w-full">
            <Timeline selected="education" />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="h-[1px] w-full bg-white opacity-20 mt-6"></div>

          <h1 className="text-white text-md text-right lg:text-lg font-semibold my-4">
            Professional
          </h1>

          <div className="w-1/4 sm:w-1/6 md:w-full self-end">
            <Timeline selected="professional" />
          </div>
        </div>
      </div>
    </div>
  );
}
