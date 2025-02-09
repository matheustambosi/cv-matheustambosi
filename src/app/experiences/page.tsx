"use client";

import { getTexts } from "@/domain/data/data";
import { useLanguage } from "@/providers/language-provider";
import { usePathname } from "next/navigation";
import { Timeline } from "./components/timeline";

export default function Experience() {
  const { lang } = useLanguage();
  const pathname = usePathname();

  const { label } = getTexts(lang, pathname);

  return (
    <div className="relative py-4 pl-4 w-full z-10">
      <h1 className="text-white text-md font-semibold mb-4">{label}</h1>

      <div className="min-h-[510px] max-h-[510px] overflow-y-auto">
        <Timeline />
      </div>
    </div>
  );
}
