import NavComponent from "./nav/Nav";
import FooterComponent from "./footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <NavComponent />
      <main style={{ height: "100vh" }}>{children}</main>
      <FooterComponent />
    </div>
  );
};

export default Layout;
