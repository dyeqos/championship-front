import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import { Settings, Pencil, Trash2 } from "lucide-react";
import { loadingStore } from "@/platform/store/LoadingStore";

import { ConfirmComponent } from "@/components/customs/confirm/ConfirmComponent";
import { useParameter } from "../../hooks/useParams";
import { useDeleteParameter } from "../../hooks/useDeleteParams";

import type { Parameter } from "@/platform/interfaces/ParameterInterface";

type Props = {
  onEdit: (row: Parameter) => void;
};

export const TableComponent = ({ onEdit }: Props) => {
  const { setActive } = loadingStore();
  const { paramListQuery } = useParameter();
  const { deleteParameter } = useDeleteParameter();

  useEffect(() => {
    paramListQuery.refetch();
  }, [paramListQuery]);

  const handleDelete = async (id: string) => {
    setActive(true);
    await deleteParameter(id);
    await paramListQuery.refetch();
    setActive(false);
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Registered Parameters</CardTitle>
      </CardHeader>
      <CardContent>
        {(paramListQuery.data ?? []).length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Settings className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Sin Parámetros</h3>
            <p className="text-muted-foreground max-w-md">
              Comience agregando su primer parámetro utilizando el formulario de
              arriba.
            </p>
          </div>
        ) : (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Dominio</TableHead>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-center">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paramListQuery.data?.map((parameter) => (
                  <TableRow key={parameter.id}>
                    <TableCell className="font-medium">
                      <Badge variant="secondary">{parameter.domain}</Badge>
                    </TableCell>
                    <TableCell>{parameter.name}</TableCell>
                    <TableCell>
                      <Badge
                        variant={parameter.isActive ? "default" : "secondary"}
                        className={
                          parameter.isActive
                            ? "bg-emerald-500 hover:bg-emerald-600"
                            : ""
                        }
                      >
                        {parameter.isActive ? "Activo" : "Inactivo"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onEdit(parameter)}
                          className="h-8 w-8 p-0"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        {parameter.id && (
                          <ConfirmComponent
                            title="Borrar Parámetro"
                            description={`¿Estas seguro de borrar el parámetro ${parameter.name}?`}
                            confirmText="Borrar"
                            destructive
                            onConfirm={() => handleDelete(parameter.id!)}
                            trigger={
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            }
                          />
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
