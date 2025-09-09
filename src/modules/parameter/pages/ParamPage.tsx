import { FormComponent } from "../components/form/FormComponent";

import { ParamsComponent } from "../components/cards/ParamsComponent";
import { TittleComponent } from "@/components/customs/TittleComponent";

export const ParamPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <TittleComponent
        title="Configuración de parametros"
        subtitle="Gestiona todos los parámetros para la funcionalidad de la aplicación"
      />

      {/* Add Parameter Form */}
      <FormComponent></FormComponent>

      {/* Parameters Display - Grouped by Type */}
      <ParamsComponent></ParamsComponent>
    </div>
  );
};
