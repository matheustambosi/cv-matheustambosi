import React from "react";
import { VerifiedIcon } from "@/assets/icons/VerifiedIcon";

export const Header = ({ label, children, ...props }: any) => (
    <section className="bg-green-800 h-1/4 px-16 py-8 flex flex-col justify-end gap-3" {...props}>
        <div className="flex items-center gap-2">
            <VerifiedIcon width={20} height={20} />
            <h1>Graduated Software Engineer</h1>
        </div>
        <h1 className="font-semibold text-6xl">Matheus Tambosi</h1>
        <h1>+9999 monthly commits (👌)</h1>
    </section>
);