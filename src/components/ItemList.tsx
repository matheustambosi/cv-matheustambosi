import Image from "next/image";
import React from "react";

export const ItemList = ({ src, alt, label, sublabel, period, children, ...props }: any) => (
    <div className="flex gap-6 mt-4" {...props}>
        <div className="w-1/6">
            <Image alt={alt} src={src}></Image>
        </div>

        <div className="w-5/6">
            <h1 className="font-bold">{label}</h1>
            <h1 className="font-semibold">{sublabel}</h1>
            <h1 className="text-gray-400">{period}</h1>

            {
                children &&
                <div>
                    {children}
                </div>
            }
        </div>
    </div>
);