import { use } from "react";
import { ButtonToggleContext } from "@/frames/context/ButtonToggleContext";
import { cn } from "@/platform/tools/lib/utils";
import { LogoComponent } from "./LogoComponent";
import { MenuItemsComponent } from "./MenuItemsComponent";
import { FooterComponent } from "./FooterComponent";

export const SideBarComponent = () => {
  const { isMobileOpenToggle, isOpenToggle } = use(ButtonToggleContext);

  return (
    <>
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform bg-background transition-transform duration-300 ease-in-out md:hidden",
          isMobileOpenToggle ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col border-r">
          <LogoComponent />
          <MenuItemsComponent />
          <FooterComponent />
        </div>
      </div>
      {/* Sidebar - Desktop */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-30 hidden w-64 transform border-r bg-background transition-transform duration-300 ease-in-out md:block",
          isOpenToggle ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          <LogoComponent />
          <MenuItemsComponent />
          <FooterComponent />
        </div>
      </div>
    </>
  );
};
