"use client";

import { getTexts } from "@/domain/data/data";
import { useLanguage } from "@/providers/language-provider";
import { usePathname } from "next/navigation";

export default function Bio() {
  const { lang } = useLanguage();
  const pathname = usePathname();

  const { label, descriptions } = getTexts(lang, pathname);

  return (
    <div className="relative py-4 px-4 w-full z-10">
      <h1 className="text-white text-md lg:text-lg font-semibold mb-4">
        {label}
      </h1>

      <div className="flex flex-col gap-4 text-white opacity-70">
        <div className="flex flex-col gap-6">
          {descriptions.map((description: string, index: number) => (
            <h1 key={index}>{description}</h1>
          ))}
        </div>
      </div>
    </div>
  );
}
