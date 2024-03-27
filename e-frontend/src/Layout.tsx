import { Outlet } from "react-router-dom";
import { Header } from "./views/Header";
import { NavBar } from "./views/NavBar";
import { useAuth } from "./views/AuthContext";
import { Loading } from "./components/Loading";

export const Layout = () => {
  const { loadingAuth } = useAuth();
  if (loadingAuth) return <Loading />;
  return (
    <>
      <div className="mx-auto flex h-screen ">
        <Header />
        <div className="flex flex-1  pt-16">
          <NavBar />
          <main id="outlet-container" className="flex-1 p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};
