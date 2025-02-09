"use client";

import { Link } from "./components/link";
import { LanguageSwitcher } from "./components/language-switcher";
import { useLanguage } from "@/providers/language-provider";
import { getTexts } from "@/domain/data/data";
import { useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const getRoutes = (lang: string, page: string) => {
  const { aboutMe, experience, projects } = getTexts(lang, page);
  return [
    { text: aboutMe, route: "/about-me" },
    { text: experience, route: "/experiences" },
    { text: projects, route: "/projects" },
  ];
};

export const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const { lang } = useLanguage();

  const routes = getRoutes(lang, "sidebar");
  const { name, role } = getTexts(lang, "my-info");

  return (
    <div className="relative z-10 w-full lg:w-[50%] rounded-xl font-primary">
      <div
        className="absolute inset-0 bg-gray-500 opacity-20 rounded-xl border-r-[3px] shadow-md"
        style={{
          borderImage:
            "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)) 1 100%",
          WebkitMaskImage: "-webkit-radial-gradient(white, black)",
        }}
      ></div>

      <div
        className={`relative flex flex-col gap-4 z-10 py-8 overflow-hidden duration-500 lg:h-full ${
          isExpanded ? "h-[370px]" : "h-[120px]"
        }`}
      >
        <div className="flex flex-row lg:flex-col justify-center gap-4">
          <div className="text-white text-center">
            <h1 className="text-md">{name}</h1>
            <h1>{role}</h1>
          </div>
        </div>

        <div className="flex flex-col justify-between h-full">
          <div className="text-md text-white text-center flex flex-col mt-4 relative">
            {routes &&
              routes.map((route) => (
                <Link key={route.text} text={route.text} route={route.route} />
              ))}
          </div>

          <div className="px-8 py-3">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden absolute bottom-0 -mb-3 my-4 w-full flex justify-center transition-all text-white z-50 ${
          isExpanded ? "rotate-180" : ""
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <FontAwesomeIcon
          width={16}
          height={16}
          icon={faChevronDown}
          className="bg-gray-500 opacity-60 rounded-full p-1 z-50"
        />
      </div>
    </div>
  );
};
