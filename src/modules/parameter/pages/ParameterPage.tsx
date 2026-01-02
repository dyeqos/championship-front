import { useForm } from "react-hook-form";
import { loadingStore } from "@/platform/store/LoadingStore";
import { FormComponent } from "../components/form/FormComponent";
import { TableComponent } from "../components/table/TableComponent";
import { useUpdateParameter } from "../hooks/useUpdateParams";
import { useCreateParameter } from "../hooks/useCreateParams";
import { useParameter } from "../hooks/useParams";
import type { ParameterRequest } from "../interfaces/ParameterRequestInterface";

export default function ParameterPage() {
  const storeLoading = loadingStore();
  const { paramListQuery } = useParameter();
  const { createParameter } = useCreateParameter();
  const { updateParameter } = useUpdateParameter();
  const form = useForm<ParameterRequest>();

  const onEdit = (row: ParameterRequest) => form.reset({ ...row });

  const saveParameter = async (data: ParameterRequest) => {
    storeLoading.setActive(true);
    let isSuccess: boolean = false;
    if (data.id) {
      isSuccess = await updateParameter(data.id, data);
    } else {
      isSuccess = await createParameter(data);
    }
    if (isSuccess) {
      paramListQuery.refetch();
      form.reset({
        description: null,
        domain: null,
        id: null,
        isActive: false,
        name: null,
      });
    }
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
