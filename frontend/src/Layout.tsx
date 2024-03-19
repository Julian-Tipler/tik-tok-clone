import { Outlet } from "react-router-dom";
import { Header } from "./views/Header";
import { NavBar } from "./views/NavBar";

export const Layout = () => {
  return (
    <>
      <div className="mx-auto px-4">
        <Header />
        <div className="flex">
          <NavBar />
          <div id="outlet-container" className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
