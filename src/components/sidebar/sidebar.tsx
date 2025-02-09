"use client";

import { LanguageSwitcher } from "./components/language-switcher";
import { useLanguage } from "@/providers/language-provider";
import { getTexts } from "@/domain/data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { MenuItem } from "./components/link";
import Link from "next/link";

export const getRoutes = (lang: string, page: string) => {
  const { aboutMe, experience, projects } = getTexts(lang, page);
  return [
    { text: aboutMe, route: "/about-me" },
    { text: experience, route: "/experiences" },
    { text: projects, route: "/labs" },
  ];
};

export const Sidebar = () => {
  const { lang } = useLanguage();

  const routes = getRoutes(lang, "sidebar");
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

      <div className="relative flex flex-col gap-4 z-10 pt-4 lg:py-8 overflow-hidden duration-500 lg:h-full">
        <div className="flex flex-row lg:flex-col justify-center gap-4">
          <div className="text-white text-center">
            <h1 className="text-sm lg:text-md font-semibold">{name}</h1>
            <h1 className="text-2xs lg:text-xs">{role}</h1>
          </div>
        </div>

        <div className="flex lg:flex-col items-center lg:items-stretch justify-evenly lg:justify-between h-full border-t border-white border-opacity-20 lg:border-0">
          <Link href="/" className="lg:hidden">
            <FontAwesomeIcon
              width={16}
              height={16}
              icon={faHome}
              className="text-white rounded-full"
            />
          </Link>

          <div className="text-md text-white text-center flex items-center text-nowrap lg:flex-col lg:mt-4 relative">
            {routes &&
              routes.map((route) => (
                <MenuItem
                  key={route.text}
                  text={route.text}
                  route={route.route}
                />
              ))}
          </div>

          <div className="lg:px-8 lg:py-3">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};
