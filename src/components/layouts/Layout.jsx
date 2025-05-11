import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

function Layout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
