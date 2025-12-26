import { Outlet } from "react-router";
import { Settings } from "lucide-react";
import { TitleComponent } from "@/components/customs/title/TitleComponent";

const ParameterLayout = () => {
  return (
    <>
      <TitleComponent title="Gestión de Parámetros" icon={<Settings />} />
      <Outlet />
    </>
  );
};

export default ParameterLayout;
