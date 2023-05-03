import NavComponent from "./nav/Nav";
import FooterComponent from "./footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <NavComponent />
      <main>{children}</main>
      <FooterComponent />
    </div>
  );
};

export default Layout;
