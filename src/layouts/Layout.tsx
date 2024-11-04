import { DefaultHeader } from "@/components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-screen max-h-screen h-screen flex flex-col">
      <DefaultHeader />
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
