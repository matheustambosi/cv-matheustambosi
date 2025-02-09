import { ReactNode, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export const useVanillaTilt = (
  tiltRef: React.RefObject<HTMLDivElement>,
  max: number = 2,
  glare: boolean = true
) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        if (tiltRef.current) {
          VanillaTilt.init(tiltRef.current, {
            max,
            speed: 200,
            glare,
            "max-glare": 0.2,
          });
        }
      } else {
        if (
          tiltRef.current &&
          (
            tiltRef.current as unknown as {
              vanillaTilt: { destroy: () => void };
            }
          ).vanillaTilt
        ) {
          (
            tiltRef.current as unknown as {
              vanillaTilt: { destroy: () => void };
            }
          ).vanillaTilt.destroy();
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      const currentTiltRef = tiltRef.current;
      if (
        currentTiltRef &&
        (currentTiltRef as unknown as { vanillaTilt: { destroy: () => void } })
          .vanillaTilt
      ) {
        (
          currentTiltRef as unknown as { vanillaTilt: { destroy: () => void } }
        ).vanillaTilt.destroy();
      }
    };
  }, [tiltRef, glare, max]);
};

export const ContainerWrapper = ({ children }: { children: ReactNode }) => {
  const tiltRef = useRef<HTMLDivElement>(null);
  useVanillaTilt(tiltRef as React.RefObject<HTMLDivElement>);

  return (
    <div
      ref={tiltRef}
      id="vanilla-tilt"
      className="flex flex-col lg:flex-row relative w-full lg:w-[55%] lg:h-[600px] overflow-y-auto lg:rounded-xl font-primary"
    >
      <div className="absolute inset-0 bg-white bg-opacity-5 shadow-lg backdrop-blur-[5px] lg:rounded-xl border-t-[3px] border-l-[3px] border-white border-opacity-20"></div>
      {children}
    </div>
  );
};
