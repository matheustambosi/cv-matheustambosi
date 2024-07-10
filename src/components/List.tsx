import Image from "next/image";
import React from "react";
import { Divider } from "./Divider";

export const List = ({ label, children, ...props }: any) => (
    <div className="w-1/2 flex flex-col gap-5" {...props}>
        <h1 className="text-2xl font-bold">{label}</h1>
        <Divider />

        {children}
    </div>
);