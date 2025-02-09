import { ReactNode, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const useVanillaTilt = (tiltRef: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        if (tiltRef.current) {
          VanillaTilt.init(tiltRef.current, {
            max: 2,
            speed: 200,
            glare: true,
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
  }, [tiltRef]);
};

export const ContainerWrapper = ({ children }: { children: ReactNode }) => {
  const tiltRef = useRef<HTMLDivElement>(null);
  useVanillaTilt(tiltRef as React.RefObject<HTMLDivElement>);

  return (
    <div
      ref={tiltRef}
      id="vanilla-tilt"
      className="flex flex-col lg:flex-row relative w-[80%] lg:w-[55%] h-[600px] rounded-xl font-primary"
    >
      <div className="absolute inset-0 bg-white bg-opacity-5 shadow-lg backdrop-blur-[5px] rounded-xl border-t-[3px] border-l-[3px] border-white border-opacity-20"></div>
      {children}
    </div>
  );
};
