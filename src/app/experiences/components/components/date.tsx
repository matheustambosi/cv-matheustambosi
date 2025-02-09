interface DateProps {
  month: string;
  year: number;
}

export const Date = ({ month, year }: DateProps) => {
  return (
    <div className="text-white text-center py-1">
      <h1 className="opacity-40 text-xs">{month}</h1>
      <h1 className="font-semibold text-sm">{year}</h1>
    </div>
  );
};
