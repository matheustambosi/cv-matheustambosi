import Image from "next/image";
import React from "react";
import { Divider } from "./Divider";

export const List = ({ label, children, ...props }: any) => (
    <div className="flex flex-col" {...props}>
        <h1 className="text-2xl font-bold mb-6">{label}</h1>
        <Divider />

        <br />

        {children}
    </div>
);