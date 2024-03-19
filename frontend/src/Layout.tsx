import { Outlet } from "react-router-dom";
import { Header } from "./views/Header";
import { NavBar } from "./views/NavBar";
import { useAuth } from "./views/AuthContext";

export const Layout = () => {
  const { loadingAuth } = useAuth();
  if (loadingAuth)
    return (
      <div className="flex h-screen w-full items-center justify-center">
        Loading...
      </div>
    );
  return (
    <>
      <div className="h-screen mx-auto flex ">
        <Header />
        <div className="flex flex-1  pt-16">
          <NavBar />
          <main id="outlet-container" className="flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};
