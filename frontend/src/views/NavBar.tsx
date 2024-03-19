import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

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
  const navigate = useNavigate();
  return (
    <nav className="p-6">
      <div className={`${commonNavProperties} w-10 text-lg lg:hidden`}>
        {navItems.map((item) => (
          <a
            className="cursor-pointer"
            key={item.name}
            onClick={() => navigate(item.link)}
          >
            {item.shortened}
          </a>
        ))}
      </div>
      <div
        className={`${commonNavProperties} hidden w-48 gap-4 text-lg lg:flex`}
      >
        {navItems.map((item) => (
          <a
            className="cursor-pointer"
            key={item.name}
            onClick={() => navigate(item.link)}
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};
