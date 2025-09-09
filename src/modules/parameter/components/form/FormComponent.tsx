import { useState } from "react";
import { PanelCard } from "@/components/customs/PanelCard";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";

const PARAMETER_TYPES = [
  "Championship Types",
  "Categories",
  "Age Groups",
  "Match Status",
  "Player Positions",
  "Card Types",
  "Tournament Formats",
];

interface Parameter {
  id: string;
  type: string;
  value: string;
  description: string;
}

export const FormComponent = () => {
  const [parameters, setParameters] = useState<Parameter[]>([
    {
      id: "1",
      type: "Championship Types",
      value: "Liga Regular",
      description:
        "Campeonato de temporada regular con formato de todos contra todos",
    },
    {
      id: "2",
      type: "Championship Types",
      value: "Copa Eliminatoria",
      description: "Torneo de eliminación directa",
    },
    {
      id: "3",
      type: "Categories",
      value: "Hombres Sub 20",
      description: "Categoría masculina para jugadores menores de 20 años",
    },
    {
      id: "4",
      type: "Categories",
      value: "Mujeres Senior",
      description: "Categoría femenina sin límite de edad",
    },
    {
      id: "5",
      type: "Age Groups",
      value: "Sub 16",
      description: "Jugadores menores de 16 años",
    },
    {
      id: "6",
      type: "Match Status",
      value: "Programado",
      description: "Partido programado pero no iniciado",
    },
  ]);
  const [newParameter, setNewParameter] = useState({
    type: "",
    value: "",
    description: "",
  });

  const handleAddParameter = () => {
    if (newParameter.type && newParameter.value && newParameter.description) {
      const parameter: Parameter = {
        id: Date.now().toString(),
        ...newParameter,
      };
      setParameters([...parameters, parameter]);
      setNewParameter({ type: "", value: "", description: "" });
    }
  };
  return (
    <PanelCard title="Agregar Nuevo Parámetro" className="shadow-sm">
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Select
              value={newParameter.type}
              onValueChange={(value) =>
                setNewParameter({ ...newParameter, type: value })
              }
            >
              <SelectTrigger variant="material" label="Category">
                <SelectValue placeholder="Seleccionar tipo parámetro" />
              </SelectTrigger>
              <SelectContent>
                {PARAMETER_TYPES.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Input
              id="value"
              variant="material"
              label="Valor"
              placeholder="Enter parameter value..."
              value={newParameter.value}
              onChange={(e) =>
                setNewParameter({ ...newParameter, value: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <Input
              id="description"
              variant="material"
              label="Descripción"
              value={newParameter.description}
              onChange={(e) =>
                setNewParameter({
                  ...newParameter,
                  description: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            disabled={
              !newParameter.type ||
              !newParameter.value ||
              !newParameter.description
            }
            onClick={handleAddParameter}
            className="bg-primary  text-primary-foreground"
          >
            <Plus className="mr-2 h-4 w-4" />
            Apply Filters
          </Button>
          <Button variant="outline" onClick={handleAddParameter}>
            Clear Filters
          </Button>
        </div>
      </CardContent>
    </PanelCard>
  );
};
