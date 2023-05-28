import NavComponent from "./nav/Nav.jsx";
import FooterComponent from "./footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <NavComponent />
      <main style={{ minHeight: "100vh" }}>{children}</main>
      <FooterComponent />
    </div>
  );
};

export default Layout;
