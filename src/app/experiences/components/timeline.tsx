import { Divider } from "./components/divider";
import { HorizontalSpace } from "./components/horizontal-space";
import { Period } from "./components/period";
import { Start } from "./components/start";
import { Date } from "./components/date";

export const Timeline = () => {
  return (
    <div className="flex flex-col items-center">
      <Start />

      <HorizontalSpace classname="min-h-20" />

      <Divider />
      <Date month="February" year={2018} />
      <Divider />

      <HorizontalSpace classname="min-h-2" />

      <Period
        size="h-12"
        direction="right"
        label="Web Dev Certificate"
        place="Senai Sul / SC"
        period="1.5 years"
      />

      <HorizontalSpace classname="min-h-2" />

      <Divider />
      <Date month="July" year={2019} />
      <Divider />

      <HorizontalSpace classname="min-h-2" />

      <Period
        size="h-32"
        direction="left"
        label="IT Support"
        place="Icatto Informática"
        period="1 year"
        isCustom
      >
        <HorizontalSpace classname="min-h-6" />

        <HorizontalSpace classname="min-h-2" />

        <Divider />
        <Date month="January" year={2020} />
        <Divider />

        <HorizontalSpace classname="min-h-2" />

        <Period
          size="h-[300px]"
          direction="right"
          label="Software Engineering"
          place="Católica / SC"
          period="4 years"
          isCustom
        />

        <HorizontalSpace classname="min-h-6" />

        <HorizontalSpace classname="min-h-2" />
      </Period>

      <Divider />
      <Date month="July" year={2020} />
      <Divider />

      <HorizontalSpace classname="min-h-2" />

      <Period
        size="h-12"
        direction="left"
        label="Developer"
        place="WTTI Sistemas"
        period="5 months"
      />

      <HorizontalSpace classname="min-h-2" />

      <Divider />
      <Date month="December" year={2020} />
      <Divider />

      <HorizontalSpace classname="min-h-2" />

      <Period
        size="h-56"
        direction="left"
        label="Full Stack Dev"
        place="BMPTEC"
        period="3.3 years"
        isCustom
      >
        <HorizontalSpace classname="min-h-20" />
        <Divider />

        <h1 className="text-white opacity-40 text-xs">December</h1>
        <div className="relative py-4 w-10 flex flex-col items-center">
          <h1 className="absolute top-0 text-white font-semibold text-sm">
            2023
          </h1>
        </div>
        <Divider />

        <HorizontalSpace classname="min-h-20" />
      </Period>

      <HorizontalSpace classname="min-h-4" />

      <Divider />
      <Date month="February" year={2024} />
      <Divider />

      <HorizontalSpace classname="min-h-2" />

      <Period
        size="h-10"
        direction="left"
        label="Frontend Dev"
        place="Twila"
        period="now"
      />

      <HorizontalSpace classname="min-h-2" />

      <Divider />
      <h1 className="text-white font-semibold py-1 text-sm">now</h1>
    </div>
  );
};
