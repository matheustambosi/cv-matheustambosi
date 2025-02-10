"use client";

import { useLanguage } from "@/providers/language-provider";
import { getTexts } from "@/domain/data/data";
import { Menu } from "./components/menu";

export const Sidebar = () => {
  const { lang } = useLanguage();

  const { name, role } = getTexts(lang, "my-info");

  return (
    <div className="relative z-10 w-full lg:w-[50%] lg:rounded-xl font-primary">
      <div
        className="absolute inset-0 bg-gray-500 opacity-20 lg:rounded-xl border-r-[3px] shadow-md"
        style={{
          borderImage:
            "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)) 1 100%",
          WebkitMaskImage: "-webkit-radial-gradient(white, black)",
        }}
      ></div>

      <div className="relative flex flex-col gap-4 z-10 pt-4 lg:py-8 shadow-lg duration-500 lg:h-full">
        <div className="flex flex-row lg:flex-col justify-center gap-4">
          <div className="text-white text-center">
            <h1 className="text-sm lg:text-md font-semibold">{name}</h1>
            <h1 className="text-2xs lg:text-xs">{role}</h1>
          </div>
        </div>

        <Menu />
      </div>
    </div>
  );
};
