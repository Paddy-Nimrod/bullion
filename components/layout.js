import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="w-full">
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
