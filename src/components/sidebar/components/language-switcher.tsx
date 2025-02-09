import { useLanguage } from "@/providers/language-provider";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();
  const newLang = lang === "en" ? "pt" : "en";

  const switchLanguage = () => {
    setLang(newLang);
  };

  return (
    <div
      className="cursor-pointer text-white flex items-center gap-2"
      style={{ userSelect: "none" }}
      onClick={switchLanguage}
    >
      <FontAwesomeIcon
        width={16}
        height={16}
        icon={faGlobe}
        className="text-white rounded-full"
      />

      <h1>{newLang.toUpperCase()}</h1>
    </div>
  );
};
