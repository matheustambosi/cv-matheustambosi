import { usePathname, useRouter } from "next/navigation";

export const Link = ({ text, route }: any) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleRoute = (route: string) => {
    if (route === pathname) return;

    router.push(route);
  };

  return (
    <div
      className={`w-full h-16 flex items-center justify-center cursor-pointer hover:bg-gray-100 hover:bg-opacity-10 ${
        pathname === route
          ? "bg-gray-100 bg-opacity-20 shadow-sm hover:bg-opacity-20"
          : ""
      }`}
      onClick={() => handleRoute(route)}
    >
      <h1 className="text-sm" style={{ userSelect: "none" }}>
        {text}
      </h1>
    </div>
  );
};
