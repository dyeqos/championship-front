import { useState } from "react";
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
import { useParameter } from "../../hooks/useParams";
import type { ParameterResponse } from "../../interfaces/ParameterResponseInterface";

export const TableComponent = () => {
  const { paramListQuery } = useParameter();
  console.log(paramListQuery.data);

  const handleEdit = (parameter: ParameterResponse) => {
    setFormData({
      domain: parameter.domain,
      name: parameter.name,
      description: parameter.description,
      isActive: parameter.isActive,
    });
    setEditingId(parameter.id);
    setErrors({ domain: false, name: false, value: false });
  };

  const [errors, setErrors] = useState({
    domain: false,
    name: false,
    value: false,
  });

  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    domain: "",
    name: "",
    description: "",
    isActive: true,
  });

  const handleDelete = (id: string) => {
    if (editingId === id) {
      setEditingId(null);
      setFormData({
        domain: "",
        name: "",
        description: "",
        isActive: true,
      });
    }
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
              Start by adding your first parameter using the form above.
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
                  <TableHead className="text-right">Acciones</TableHead>
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
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEdit(parameter)}
                          className="h-8 w-8 p-0"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(parameter.id)}
                          className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
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
