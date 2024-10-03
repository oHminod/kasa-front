import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../pages/error/errorPage";
import HomePage from "../pages/home/homePage";
import LogementPage from "../pages/logement/logementPage";
import Layout from "../components/layout";
import AboutPage from "../pages/about/aboutPage";

const Router = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "logement/:id",
          element: <LogementPage />,
        },
        {
          path: "*",
          element: <ErrorPage error={{ status: 404 }} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default Router;
