import { DefaultFooter } from "@/components";
import { Outlet } from "react-router-dom";

const RightContainer = () => {
  return (
    <div className="w-full min-h-screen flex flex-col py-8 px-2 sm:px-12 text-sm md:text-lg lg:text-xl text-gray-300 space-y-8 overflow-y-auto">
      <div className="flex-1">
        <Outlet />
      </div>
      <DefaultFooter />
    </div>
  );
};

export default RightContainer;
