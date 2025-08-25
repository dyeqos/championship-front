import { Outlet } from "react-router";
import { HeaderComponent } from "../components/HeaderComponent";
import { MenuComponent } from "../components/MenuComponent";

export const MainLoyout = () => {
  return (
    <div className="min-h-screen bg-background">
      <MenuComponent />
      <div className="md:ml-64">
        <HeaderComponent title={"title"} />
        <Outlet />
      </div>
    </div>
  );
};
