import { useLocation } from "react-router-dom";
import Navheader from "./Layouts/Navheader"
import Navfooter from './Layouts/Navfooter'

const Layout = ({ children, cartItems }) => {
  const location = useLocation();

  const shouldShowHeaderFooter = location.pathname !== "/" && location.pathname !== "/signup";

  return (
    <>
      {shouldShowHeaderFooter && <Navheader cartItems={cartItems} />}
      {children}
      {shouldShowHeaderFooter && <Navfooter />}
    </>
  );
};

export default Layout;
