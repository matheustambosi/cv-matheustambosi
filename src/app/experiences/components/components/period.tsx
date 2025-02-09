import { HorizontalSpace } from "./horizontal-space";

export const Period = ({
  children,
  size,
  direction,
  label,
  place,
  period,
  isCustom = false,
}: {
  children?: React.ReactNode;
  size: string;
  direction: string;
  label: string;
  place: string;
  period: string;
  isCustom?: boolean;
}) => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="relative transform rotate-180">
        <div
          className={`absolute ${
            direction === "left"
              ? "left-0 border-l-[2px] rounded-l-lg"
              : "right-0 border-r-[2px] rounded-r-lg"
          } bottom-0 border-opacity-20 border-white border-t-[2px] border-b-[2px] w-[76px] border-dotted ${size} rotate-180`}
        >
          <div
            className={`flex items-center absolute w-full h-full ${
              direction === "left"
                ? "-inset-x-full pr-4 justify-end"
                : "inset-x-full pl-4 justify-start"
            }`}
          >
            <div
              className={`w-32 ${
                direction === "left" ? "text-end" : "text-start"
              }`}
            >
              <h1 className="text-white text-nowrap font-semibold text-xs">
                {label}
              </h1>
              <h1 className="text-white text-nowrap text-2xs opacity-50">
                {place}
              </h1>
              <h1 className="text-white text-nowrap text-2xs opacity-50">
                {period}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {children}

      {!isCustom && <HorizontalSpace classname={size} />}
    </div>
  );
};
