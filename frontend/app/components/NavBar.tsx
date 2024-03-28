import { useAuth } from "../contexts/AuthContext";
import Link from "next/link";

const commonNavProperties = "flex flex-col text-lg font-semibold";

export const NavBar = () => {
  const { user } = useAuth();
  const navItems = [
    {
      name: "For You",
      shortened: "FY",
      link: "/foryou",
    },
    {
      name: "Following",
      shortened: "FL",
      link: "/following",
    },
    {
      name: "Friends",
      shortened: "FR",
      link: "/friends",
    },
    {
      name: "Explore",
      shortened: "EXP",
      link: "/explore",
    },
    {
      name: "LIVE",
      shortened: "LVE",
      link: "/live",
    },
    {
      name: "Profile",
      shortened: "PRF",
      link: `/profile${user ? "/" + user.id : ""}`,
    },
  ];
  return (
    <nav className="p-6">
      <div className={`${commonNavProperties} w-10 text-lg lg:hidden`}>
        {navItems.map((item) => (
          <Link className="cursor-pointer" key={item.name} href={item.link}>
            {item.shortened}
          </Link>
        ))}
      </div>
      <div
        className={`${commonNavProperties} hidden w-48 gap-4 text-lg lg:flex`}
      >
        {navItems.map((item) => (
          <Link className="cursor-pointer" key={item.name} href={item.link}>
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};
