import { useLanguage } from "@/providers/language-provider";

export const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();
  const newLang = lang === "en" ? "pt" : "en";

  const switchLanguage = () => {
    setLang(newLang);
  };

  return (
    <div
      className="cursor-pointer text-white"
      style={{ userSelect: "none" }}
      onClick={switchLanguage}
    >
      <h1>{newLang.toUpperCase()}</h1>
    </div>
  );
};
