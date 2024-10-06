import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../pages/error/errorPage";
import HomePage from "../pages/home/homePage";
import LogementPage from "../pages/logement/logementPage";
import Layout from "../components/layout";
import AboutPage from "../pages/about/aboutPage";
import { useEffect } from "react";

const Router = () => {
  useEffect(() => {
    const loadingElement = document.getElementById("loading");
    if (loadingElement) {
      loadingElement.style.display = "none";
    }
  }, []);

  const routes = createBrowserRouter([
    {
      path: "/kasa-front/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/kasa-front/about",
          element: <AboutPage />,
        },
        {
          path: "/kasa-front/logement/:id",
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
