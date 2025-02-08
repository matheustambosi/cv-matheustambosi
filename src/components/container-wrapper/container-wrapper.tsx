import { ReactNode, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export const ContainerWrapper = ({ children }: { children: ReactNode }) => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 2,
        speed: 200,
        glare: true,
        "max-glare": 0.2,
        gyroscope: true,
      });
    }
  }, []);

  return (
    <div
      ref={tiltRef}
      id="vanilla-tilt"
      className="flex relative w-[55%] 2xl:h-[600px] rounded-xl font-primary"
    >
      <div className="absolute inset-0 bg-white bg-opacity-5 shadow-lg backdrop-blur-[5px] rounded-xl border-t-[3px] border-l-[3px] border-white border-opacity-20"></div>

      {children}
    </div>
  );
};
