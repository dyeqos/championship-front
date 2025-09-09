import { PanelCard } from "@/components/customs/PanelCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Trash2 } from "lucide-react";
import { useState } from "react";

interface Parameter {
  id: string;
  type: string;
  value: string;
  description: string;
}

export const ParamsComponent = () => {
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
  const groupedParameters = parameters.reduce((groups, parameter) => {
    const type = parameter.type;
    if (!groups[type]) {
      groups[type] = [];
    }
    groups[type].push(parameter);
    return groups;
  }, {} as Record<string, Parameter[]>);

  const handleDeleteParameter = (id: string) => {
    setParameters(parameters.filter((param) => param.id !== id));
  };
  return (
    <>
      <div className="space-y-6">
        {Object.entries(groupedParameters).map(([type, params]) => (
          <PanelCard key={type} className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{type}</span>
                <Badge variant="secondary" className="text-xs">
                  {params.length} parameter{params.length !== 1 ? "s" : ""}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {params.map((parameter) => (
                  <div
                    key={parameter.id}
                    className="p-4 border border-border rounded-lg bg-card hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-sm text-foreground">
                        {parameter.value}
                      </h4>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteParameter(parameter.id)}
                        className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {parameter.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </PanelCard>
        ))}
      </div>
      {Object.keys(groupedParameters).length === 0 && (
        <Card className="shadow-sm">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Settings className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Parameters Yet</h3>
            <p className="text-muted-foreground text-center max-w-md">
              Start by adding your first parameter using the form above.
              Parameters help organize and standardize your championship data.
            </p>
          </CardContent>
        </Card>
      )}
    </>
  );
};
