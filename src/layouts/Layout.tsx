import { DefaultFooter, DefaultHeader } from "@/components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-screen h-screen min-h-screen">
      <DefaultHeader />
      <div className="w-full h-full overflow-y-auto flex flex-col items-center pt-36">
        <Outlet />
        <DefaultFooter />
      </div>
    </div>
  );
};

export default Layout;
