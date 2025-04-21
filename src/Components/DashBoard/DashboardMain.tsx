import React from "react";
import DashNav from "./Component/DashBoardNav/DashNav";
import { Outlet } from "react-router-dom";

const DashboardMain = () => {
  return (
    <div className="flex flex-1 h-[100vh] w-full ">
      <DashNav />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardMain;
