import { Outlet } from "react-router";

import { NavBarComponent } from "../components/header/NavBarComponent";
import { SideBarComponent } from "../components/menu/SideBarComponent";

import { ButtonToggleProvider } from "../context/ButtonToggleContext";

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <ButtonToggleProvider>
        <NavBarComponent />
        <div className="flex">
          <SideBarComponent />
          <main className="flex-1">
            <div className="p-6 h-[calc(100vh-65px)]">
              <Outlet />
            </div>
          </main>
        </div>
      </ButtonToggleProvider>
    </div>
  );
};
