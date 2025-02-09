import { usePathname, useRouter } from "next/navigation";

interface LinkProps {
  text: string;
  route: string;
}

export const MenuItem = ({ text, route }: LinkProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleRoute = (route: string) => {
    if (route === pathname) return;

    router.push(route);
  };

  return (
    <div
      className={`w-full px-2 h-10 lg:h-16 flex items-center justify-center cursor-pointer lg:hover:bg-gray-100 lg:hover:bg-opacity-10 ${
        pathname === route
          ? "bg-gray-100 bg-opacity-20 shadow-sm rounded-md hover:bg-opacity-20"
          : ""
      }`}
      onClick={() => handleRoute(route)}
    >
      <h1 className="text-xs lg:text-sm" style={{ userSelect: "none" }}>
        {text}
      </h1>
    </div>
  );
};
