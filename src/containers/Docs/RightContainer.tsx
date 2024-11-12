import { Outlet } from "react-router-dom";

const RightContainer = () => {
  return (
    <div className="flex-1 w-full py-8 px-2 sm:px-12 text-sm md:text-lg lg:text-xl text-gray-300 space-y-8 overflow-y-auto">
      <Outlet />
    </div>
  );
};

export default RightContainer;
