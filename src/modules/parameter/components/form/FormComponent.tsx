import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Pencil, Plus, AlertCircle } from "lucide-react";
import { useState } from "react";

interface Parameter {
  id: string;
  domain: string;
  name: string;
  value: string;
  description: string;
  active: boolean;
}

export const FormComponent = () => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    domain: "",
    name: "",
    value: "",
    description: "",
    active: true,
  });
  const [errors, setErrors] = useState({
    domain: false,
    name: false,
    value: false,
  });

  const DOMAINS = [
    "Countries",
    "States",
    "Cities",
    "Document Types",
    "Statuses",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (editingId) {
      // Edit existing parameter
      setParameters(
        parameters.map((param) =>
          param.id === editingId ? { ...formData, id: editingId } : param
        )
      );
      setEditingId(null);
    } else {
      // Add new parameter
      const newParameter: Parameter = {
        id: Date.now().toString(),
        ...formData,
      };
      setParameters([...parameters, newParameter]);
    }

    // Reset form
    setFormData({
      domain: "",
      name: "",
      value: "",
      description: "",
      active: true,
    });
    setErrors({ domain: false, name: false, value: false });
  };

  const validateForm = () => {
    const newErrors = {
      domain: !formData.domain,
      name: !formData.name,
      value: !formData.value,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

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

  const handleCancel = () => {
    setEditingId(null);
    setFormData({
      domain: "",
      name: "",
      value: "",
      description: "",
      active: true,
    });
    setErrors({ domain: false, name: false, value: false });
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {editingId ? (
            <>
              <Pencil className="h-5 w-5" />
              Edit Parameter
            </>
          ) : (
            <>
              <Plus className="h-5 w-5" />
              Create New Parameter
            </>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Domain Select */}
            <div className="space-y-2">
              <Label htmlFor="domain" className="text-sm font-medium">
                Domain <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.domain}
                onValueChange={(value) => {
                  setFormData({ ...formData, domain: value });
                  setErrors({ ...errors, domain: false });
                }}
              >
                <SelectTrigger
                  className={errors.domain ? "border-destructive" : ""}
                >
                  <SelectValue placeholder="Select a domain..." />
                </SelectTrigger>
                <SelectContent>
                  {DOMAINS.map((domain) => (
                    <SelectItem key={domain} value={domain}>
                      {domain}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.domain && (
                <div className="flex items-center gap-1 text-destructive text-xs">
                  <AlertCircle className="h-3 w-3" />
                  <span>Domain is required</span>
                </div>
              )}
            </div>

            {/* Parameter Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Parameter Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                placeholder="e.g., United States"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  setErrors({ ...errors, name: false });
                }}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <div className="flex items-center gap-1 text-destructive text-xs">
                  <AlertCircle className="h-3 w-3" />
                  <span>Parameter name is required</span>
                </div>
              )}
            </div>

            {/* Parameter Value */}
            <div className="space-y-2">
              <Label htmlFor="value" className="text-sm font-medium">
                Parameter Value <span className="text-destructive">*</span>
              </Label>
              <Input
                id="value"
                placeholder="e.g., US"
                value={formData.value}
                onChange={(e) => {
                  setFormData({ ...formData, value: e.target.value });
                  setErrors({ ...errors, value: false });
                }}
                className={errors.value ? "border-destructive" : ""}
              />
              {errors.value && (
                <div className="flex items-center gap-1 text-destructive text-xs">
                  <AlertCircle className="h-3 w-3" />
                  <span>Parameter value is required</span>
                </div>
              )}
            </div>

            {/* Active Toggle */}
            <div className="space-y-2">
              <Label htmlFor="active" className="text-sm font-medium">
                Active Status
              </Label>
              <div className="flex items-center space-x-2 h-10">
                <Switch
                  id="active"
                  checked={formData.active}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, active: checked })
                  }
                />
                <span className="text-sm text-muted-foreground">
                  {formData.active ? "Active" : "Inactive"}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">
              Description{" "}
              <span className="text-muted-foreground text-xs">(Optional)</span>
            </Label>
            <Textarea
              id="description"
              placeholder="Enter a description for this parameter..."
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              rows={3}
            />
          </div>

          {/* Form Actions */}
          <div className="flex gap-2">
            <Button type="submit" className="flex-1 md:flex-none">
              {editingId ? (
                <>
                  <Pencil className="h-4 w-4 mr-2" />
                  Update Parameter
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Parameter
                </>
              )}
            </Button>
            {editingId && (
              <Button type="button" variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
