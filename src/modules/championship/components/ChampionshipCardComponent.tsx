import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Eye } from "lucide-react";
import type { Championship } from "../interfaces/ChampionshipInterface";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getGenderDescription } from "@/platform/tools/utils/GenderUtil";

const getStatusBadge = (status: number) => {
  switch (status) {
    case 0:
      return <Badge variant="secondary">Borrador</Badge>;
    case 1:
      return <Badge variant="default">Activo</Badge>;
    case 2:
      return <Badge variant="secondary">Finalizado</Badge>;
    default:
      return <Badge variant="destructive">Sin Estado</Badge>;
  }
};

const handleCardClick = (championshipId: string) => {
  console.log(championshipId);
};
const handleEditClick = (e: React.MouseEvent, championship: Championship) => {
  e.stopPropagation(); // Prevent card click
  if (championship.state === 1) {
    console.log(`Editing championship ${championship.id}`);
    // Handle edit logic here
  }
};

interface Props {
  championship: Championship;
}

export const ChampionshipCardComponent = ({ championship }: Props) => {
  return (
    <Card
      className="hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-sm hover:shadow-xl"
      onClick={() => handleCardClick(championship.id)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg text-balance">
              {championship.name.name}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {getGenderDescription(championship.gender)}{" "}
              {championship.category.name}
            </p>
          </div>
          {getStatusBadge(championship.state)}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Progreso</span>
            <span className="text-sm font-medium">
              {championship.progress ?? 0}%
            </span>
          </div>
          <Progress value={championship.progress} className="h-2" />
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Fecha Inicio</p>
            <p className="font-medium">{championship.dateInit}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Equipos</p>
            <p className="font-medium">{championship.totalTeams}</p>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
            <Eye className="h-4 w-4 mr-2" />
            Ver
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 bg-transparent"
            disabled={championship.state === 1}
            onClick={(e) => handleEditClick(e, championship)}
          >
            <Edit className="h-4 w-4 mr-2" />
            {championship.state === 1 ? "Editar (Deshabilitado)" : "Editar"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
