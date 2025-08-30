import { PanelCard } from "@/components/customs/PanelCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Calendar, Users } from "lucide-react";
import { motion } from "framer-motion";
import type { Championship } from "../../championship/ChampionshipInterface";

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Active":
      return <Badge variant="success">Activo</Badge>;
    case "Draft":
      return <Badge variant="warning">Borrador</Badge>;
    case "Finished":
      return <Badge variant="secondary">Finalizado</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};
const getCategoryColor = (category: string) => {
  switch (category) {
    case "Hombres Sub 20":
      return "bg-blue-600";
    case "Mujeres Sub 18":
      return "bg-pink-600";
    case "Niños Sub 16":
      return "bg-orange-600";
    default:
      return "bg-gray-600";
  }
};

const handleCardClick = (championshipId: string) => {
  console.log(championshipId);
};
const handleEditClick = (e: React.MouseEvent, championship: Championship) => {
  e.stopPropagation(); // Prevent card click
  if (championship.status === "Draft") {
    console.log(`Editing championship ${championship.id}`);
    // Handle edit logic here
  }
};

interface Props {
  championship: Championship;
}

export const ChampionshipCardComponent = ({ championship }: Props) => {
  return (
    <PanelCard className="hover:shadow-xl transition-all duration-300 cursor-pointer border-l-4 border-emerald-500">
      <div
        className="space-y-4"
        onClick={() => handleCardClick(championship.id)}
      >
        {/* Header with Status Badge */}
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div
              className={`w-12 h-12 ${getCategoryColor(
                championship.category
              )} rounded-full flex items-center justify-center`}
            >
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                {championship.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {championship.category}
              </p>
            </div>
          </div>
          {getStatusBadge(championship.status)}
        </div>

        {/* Championship Details */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Calendar className="h-4 w-4" />
            <span>
              Inicio:{" "}
              {new Date(championship.startDate).toLocaleDateString("es-ES")}
            </span>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Users className="h-4 w-4" />
            <span>{championship.teamsCount} equipos participando</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">
              Progreso del Campeonato
            </span>
            <span className="font-medium text-gray-900 dark:text-white">
              {championship.progress}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <motion.div
              className="bg-emerald-600 h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${championship.progress}%` }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: "easeOut",
              }}
            />
          </div>
        </div>

        {/* Edit Button */}
        <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
          <Button
            variant={championship.status === "Draft" ? "primary" : "secondary"}
            size="sm"
            className="w-full"
            disabled={championship.status !== "Draft"}
            onClick={(e) => handleEditClick(e, championship)}
          >
            <Edit size={16} className="mr-2" />
            {championship.status === "Draft"
              ? "Editar"
              : "Editar (Deshabilitado)"}
          </Button>
        </div>
      </div>
    </PanelCard>
  );
};
