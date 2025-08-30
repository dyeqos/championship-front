import { use } from "react";
import { Outlet } from "react-router";

import { NavBarComponent } from "../components/header/NavBarComponent";
import { SideBarComponent } from "../components/menu/SideBarComponent";
import { cn } from "@/platform/tools/lib/utils";
import {
  ButtonToggleContext,
  ButtonToggleProvider,
} from "../context/ButtonToggleContext";

export const MainLayout = () => {
  const { isOpenToggle } = use(ButtonToggleContext);
  return (
    <div className="min-h-screen bg-background">
      <ButtonToggleProvider>
        <NavBarComponent />
        <div className="flex">
          <SideBarComponent />
          <main
            className={cn(
              "flex-1 transition-all duration-300 ease-in-out",
              isOpenToggle ? "lg:ml-0" : "lg:ml-0"
            )}
          >
            <div className="p-6">
              <Outlet />
            </div>
          </main>
        </div>
      </ButtonToggleProvider>
    </div>
  );
};
