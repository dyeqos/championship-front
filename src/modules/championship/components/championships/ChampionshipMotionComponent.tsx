import { useState } from "react";
import { motion } from "framer-motion";
import { PanelCard } from "@/components/customs/PanelCard";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { ChampionshipCardComponent } from "./ChampionshipCardComponent";
import type { Championship } from "../../championship/ChampionshipInterface";
interface Props {
  championships: Championship[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const ChampionshipMotionComponent = ({ championships }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  return (
    <>
      {" "}
      {championships.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 sm:gap-4  lg:gab-6  "
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {championships.map((championship) => (
            <motion.div
              key={championship.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <ChampionshipCardComponent championship={championship} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PanelCard>
            <div className="text-center py-12">
              <div className="mx-auto w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No se encontraron campeonatos
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                No hay campeonatos que coincidan con tus criterios de búsqueda.
              </p>
              <Button
                variant="secondary"
                onClick={() => {
                  setSearchQuery("");
                  setCategoryFilter("all");
                  setStatusFilter("all");
                }}
              >
                Limpiar todos los filtros
              </Button>
            </div>
          </PanelCard>
        </motion.div>
      )}
    </>
  );
};
