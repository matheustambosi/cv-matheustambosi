import { ProjectType } from "@/domain/types/project";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export const Project = ({
  name,
  description,
  image,
  url,
  languages,
}: ProjectType) => {
  return (
    <div className="relative w-full p-4 text-white">
      <div className="flex flex-col gap-4 text-white relative z-10">
        <div className="flex items-center gap-2">
          <a href={url}>
            <h1 className="text-sm lg:text-md font-semibold hover:underline">
              {name}
            </h1>
          </a>
        </div>

        <div className="rounded-lg overflow-hidden">
          <a href={url}>
            <Image
              src={image}
              alt="project"
              className="w-full h-full object-cover rounded-lg"
              style={{ userSelect: "none" }}
              width={1980}
              height={1080}
            />
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="opacity-60 text-2xs">{description}</h1>

          <div className="flex items-center justify-between">
            <a href={url} className="flex items-center gap-1 w-[40%]">
              <FontAwesomeIcon
                width={16}
                height={16}
                icon={faGlobe}
                className="text-blue-500 bg-gray-700 rounded-full"
              />
              <h1 className="text-blue-500 text-2xs w-full overflow-hidden whitespace-nowrap text-ellipsis">
                {url}
              </h1>
            </a>

            <div className="flex gap-2">{languages}</div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gray-500 opacity-20 shadow-lg rounded-lg border-t border-r border-white z-0"></div>
    </div>
  );
};
