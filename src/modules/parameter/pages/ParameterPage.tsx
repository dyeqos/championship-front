import { FormComponent } from "../components/form/FormComponent";
import { TableComponent } from "../components/table/TableComponent";

export default function ParameterPage() {
  return (
    <div className="space-y-6">
      {/* Form Card */}
      <FormComponent></FormComponent>

      {/* Parameters Table */}
      <TableComponent></TableComponent>
    </div>
  );
}
