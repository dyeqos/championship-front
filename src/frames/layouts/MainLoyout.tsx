import { useState } from "react";
import { Outlet } from "react-router";

import { NavBarComponent } from "../components/header/NavBarComponent";
import { SideBarComponent } from "../components/menu/SideBarComponent";
import { cn } from "@/platform/tools/lib/utils";

export const MainLoyout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <NavBarComponent setIsOpen={setIsOpen} />
      <div className="flex">
        <SideBarComponent isOpen={isOpen} setIsOpen={setIsOpen} />
        <main
          className={cn(
            "flex-1 transition-all duration-300 ease-in-out",
            isOpen ? "lg:ml-0" : "lg:ml-0"
          )}
        >
          <div className="p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
