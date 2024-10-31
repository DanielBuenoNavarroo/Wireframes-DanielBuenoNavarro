import DefaultHeader from "@/components/DefaultHeader";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="w-screen max-h-screen h-screen flex flex-col bg-black">
      <DefaultHeader />
      <div className="w-full h-full bg-black">
        <Outlet></Outlet>
      </div>
    </main>
  );
};

export default Layout;
