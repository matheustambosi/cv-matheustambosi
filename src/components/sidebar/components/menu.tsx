import { useLanguage } from "@/providers/language-provider";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { LanguageSwitcher } from "./language-switcher";
import { MenuItem } from "./menu-item";
import { getTexts } from "@/domain/data/data";
import { usePathname } from "next/navigation";

export const getRoutes = (lang: string, page: string) => {
  const { aboutMe, experience, projects } = getTexts(lang, page);
  return [
    { text: aboutMe, route: "/bio" },
    { text: experience, route: "/experiences" },
    { text: projects, route: "/labs" },
  ];
};

export const Menu = () => {
  const { lang } = useLanguage();

  const routes = getRoutes(lang, "sidebar");
  const pathname = usePathname();

  return (
    <div className="flex lg:flex-col items-center lg:items-stretch justify-evenly lg:justify-between h-full border-t border-white border-opacity-20 lg:border-0">
      <Link
        href="/"
        className={`lg:hidden py-2 px-3 ${
          pathname === "/"
            ? "bg-gray-100 bg-opacity-20 shadow-sm rounded-md"
            : ""
        }`}
      >
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
              pathname={pathname}
            />
          ))}
      </div>

      <div className="lg:px-8 lg:py-3">
        <LanguageSwitcher />
      </div>
    </div>
  );
};
