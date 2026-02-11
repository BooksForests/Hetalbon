import GotoTop from "../gototop/GotoTop";
import Footer from "../shared/footer/Footer";

const Layout = ({ children }: any) => {
  return (
    <div>
      <main className="bg-gradient-to-b from-gray-50 via-white to-gray-50">
        {children}
      </main>
      <GotoTop/>
      <Footer />
    </div>
  );
};

export default Layout;
