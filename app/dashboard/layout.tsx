import React from "react";
import SaidbarPanelUser from "@/components/module/SaidbarPanelUser";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col  md:flex-row">
      {/* سایدبار */}
      <div className="w-full flex justify-center lg:justify-start md:w-64">
        <SaidbarPanelUser />
      </div>
      {/* محتوای اصلی */}
      <main className="flex-1 mx-auto p-4">{children}</main>
    </div>
  );
};

export default DashboardLayout;
