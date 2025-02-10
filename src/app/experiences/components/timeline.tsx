import { Divider } from "./components/divider";
import { HorizontalSpace } from "./components/horizontal-space";
import { Period } from "./components/period";
import { Start } from "./components/start";
import { Date } from "./components/date";
import { bothData, educationData, professionalData } from "./data/data";

interface TimelineItem {
  type: string;
  classname?: string;
  month?: string;
  year?: number;
  size?: string;
  direction?: string;
  label?: string;
  place?: string;
  period?: string;
  isCustom?: boolean;
  children?: TimelineItem[];
  [key: string]:
    | string
    | number
    | boolean
    | TimelineItem
    | TimelineItem[]
    | undefined;
}

const renderTimelineItem = (item: TimelineItem, index: number) => {
  switch (item.type) {
    case "start":
      return <Start key={index} />;
    case "horizontalSpace":
      return <HorizontalSpace key={index} classname={item.classname} />;
    case "divider":
      return <Divider key={index} />;
    case "date":
      return <Date key={index} month={item.month!} year={item.year!} />;
    case "period":
      return (
        <Period
          key={index}
          size={item.size!}
          direction={item.direction!}
          label={item.label!}
          place={item.place!}
          period={item.period!}
          isCustom={item.isCustom}
        >
          {item.children && item.children.map(renderTimelineItem)}
        </Period>
      );
    case "now":
      return (
        <h1 key={index} className="text-white font-semibold py-1 text-sm">
          now
        </h1>
      );
    default:
      return null;
  }
};

export const Timeline = ({ selected }: { selected: string }) => {
  let filteredData = [];

  if (selected === "education") {
    filteredData = educationData;
  } else if (selected === "professional") {
    filteredData = professionalData;
  } else {
    filteredData = bothData;
  }

  return (
    <div className="flex flex-col items-center">
      {filteredData.map(renderTimelineItem)}
    </div>
  );
};
