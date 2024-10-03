import { Outlet, useRouteError } from "react-router-dom";
import ErrorPage from "../pages/error/errorPage";
import Header from "./header";
import Footer from "./footer";

function Layout() {
  const error = useRouteError();

  return (
    <>
      <Header />
      <main>{error ? <ErrorPage error={error} /> : <Outlet />}</main>
      <Footer />
    </>
  );
}

export default Layout;
