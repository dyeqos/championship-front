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

interface Parameter {
  id: string;
  domain: string;
  name: string;
  value: string;
  description: string;
  active: boolean;
}

export const TableComponent = () => {
  const [parameters, setParameters] = useState<Parameter[]>([
    {
      id: "1",
      domain: "Countries",
      name: "USA",
      value: "US",
      description: "United States of America",
      active: true,
    },
    {
      id: "2",
      domain: "Countries",
      name: "Canada",
      value: "CA",
      description: "Canada",
      active: true,
    },
    {
      id: "3",
      domain: "Document Types",
      name: "Passport",
      value: "PASSPORT",
      description: "International travel document",
      active: true,
    },
    {
      id: "4",
      domain: "Document Types",
      name: "Driver License",
      value: "DL",
      description: "State-issued driving permit",
      active: true,
    },
    {
      id: "5",
      domain: "Statuses",
      name: "Active",
      value: "ACTIVE",
      description: "Currently active status",
      active: true,
    },
  ]);

  const handleEdit = (parameter: Parameter) => {
    setFormData({
      domain: parameter.domain,
      name: parameter.name,
      value: parameter.value,
      description: parameter.description,
      active: parameter.active,
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
    value: "",
    description: "",
    active: true,
  });

  const handleDelete = (id: string) => {
    setParameters(parameters.filter((param) => param.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setFormData({
        domain: "",
        name: "",
        value: "",
        description: "",
        active: true,
      });
    }
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Registered Parameters</CardTitle>
      </CardHeader>
      <CardContent>
        {parameters.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Settings className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Parameters Yet</h3>
            <p className="text-muted-foreground max-w-md">
              Start by adding your first parameter using the form above.
            </p>
          </div>
        ) : (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Domain</TableHead>
                  <TableHead>Parameter Name</TableHead>
                  <TableHead>Parameter Value</TableHead>
                  <TableHead>Active</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {parameters.map((parameter) => (
                  <TableRow key={parameter.id}>
                    <TableCell className="font-medium">
                      <Badge variant="secondary">{parameter.domain}</Badge>
                    </TableCell>
                    <TableCell>{parameter.name}</TableCell>
                    <TableCell>
                      <code className="bg-muted px-2 py-1 rounded text-sm">
                        {parameter.value}
                      </code>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={parameter.active ? "default" : "secondary"}
                        className={
                          parameter.active
                            ? "bg-emerald-500 hover:bg-emerald-600"
                            : ""
                        }
                      >
                        {parameter.active ? "Active" : "Inactive"}
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
