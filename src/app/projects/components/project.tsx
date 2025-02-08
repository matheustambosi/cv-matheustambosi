import { ProjectType } from "@/domain/types/project";
import Image from "next/image";

export const Project = ({ name, description, image }: ProjectType) => {
  return (
    <div className="relative w-full p-4 text-white">
      <div className="h-20 flex gap-4 overflow-hidden">
        <div className="w-20 h-20 rounded-md border border-opacity-20 border-white">
          <Image
            src={image}
            alt="project"
            className="w-full h-full object-cover"
            style={{ userSelect: "none" }}
            width={150}
            height={150}
          />
        </div>
        <div className="w-2/3">
          <h1 className="text-xs font-semibold">{name}</h1>
          <h1
            className="text-2xs opacity-60"
            style={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {description}
          </h1>
        </div>
      </div>

      <div className="absolute inset-0 bg-gray-500 opacity-20 shadow-lg rounded-lg border-t-[3px] border-r-[3px] border-white"></div>
    </div>
  );
};
