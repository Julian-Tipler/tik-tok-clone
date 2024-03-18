import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { ForYou } from "./views/ForYou";
import { Following } from "./views/Following";
import { Explore } from "./views/Explore";
import { Live } from "./views/Live";
import { Profile } from "./views/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/foryou",
        element: <ForYou />,
      },
      {
        path: "/following",
        element: <Following />,
      },
      {
        path: "/profile",
        element: <Explore />,
      },
      {
        path: "/upload",
        element: <Live />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "*",
        element: <div>error</div>,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
