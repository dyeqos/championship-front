import { useForm } from "react-hook-form";
import { loadingStore } from "@/platform/store/LoadingStore";
import { FormComponent } from "../components/form/FormComponent";
import { TableComponent } from "../components/table/TableComponent";
import { useParameter } from "../hooks/useParams";
import type { Parameter } from "@/platform/interfaces/ParameterInterface";

export default function ParameterPage() {
  const storeLoading = loadingStore();
  const { mutation } = useParameter();
  const form = useForm<Parameter>();

  const onEdit = (row: Parameter) => form.reset({ ...row });

  const saveParameter = async (data: Parameter) => {
    storeLoading.setActive(true);
    await mutation.mutateAsync(data, {
      onSuccess: () => {
        form.reset({
          description: null,
          domain: null,
          id: null,
          isActive: false,
          name: null,
        });
      },
    });
    storeLoading.setActive(false);
  };

  return (
    <div className="space-y-6">
      {/* Form Card */}
      <FormComponent form={form} onSubmit={saveParameter}></FormComponent>

      {/* Parameters Table */}
      <TableComponent onEdit={onEdit}></TableComponent>
    </div>
  );
}
