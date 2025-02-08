import { Link } from "./components/link";
import { LanguageSwitcher } from "./components/language-switcher";
import Image from "next/image";
import { useLanguage } from "@/providers/language-provider";
import { getTexts } from "@/data/data";

export const getRoutes = (lang: string, page: string) => {
  const { aboutMe, experience, projects } = getTexts(lang, page);
  return [
    { text: aboutMe, route: "/about-me" },
    { text: experience, route: "/experience" },
    { text: projects, route: "/projects" },
  ];
};

export const Sidebar = () => {
  const { lang } = useLanguage();

  const routes = getRoutes(lang, "sidebar");
  const { name, role } = getTexts(lang, "my-info");

  return (
    <div className="z-10 h-full w-[50%] rounded-xl font-primary relative">
      <div
        className="absolute inset-0 bg-gray-500 opacity-20 rounded-xl border-r-[3px] shadow-md"
        style={{
          borderImage:
            "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)) 1 100%",
          WebkitMaskImage: "-webkit-radial-gradient(white, black)",
        }}
      ></div>

      <div className="relative flex flex-col gap-4 z-10 py-8 h-full">
        <div className="flex flex-col gap-4">
          <div className="bg-white w-28 h-28 rounded-full mx-auto overflow-hidden">
            <Image
              src="/me.jpg"
              alt="Me"
              className="w-full h-full object-cover"
              style={{ userSelect: "none" }}
              width={150}
              height={150}
            />
          </div>

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

          <div className="px-8">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};
