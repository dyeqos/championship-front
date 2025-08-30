import { useState } from "react";

import { Search, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { mockChampionships } from "../mock/mockData";
import { PanelCard } from "@/components/customs/PanelCard";
import { ChampionshipMotionComponent } from "../components/championships/ChampionshipMotionComponent";

export const ChampionshipPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredChampionships = mockChampionships.filter((championship) => {
    const matchesSearch = championship.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || championship.category === categoryFilter;
    const matchesStatus =
      statusFilter === "all" || championship.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header with Create Button */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Campeonatos
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Gestiona todos los campeonatos de fútbol
          </p>
        </div>
        <Button className="flex items-center space-x-2">
          <Plus size={20} />
          <span>Crear Nuevo Campeonato</span>
        </Button>
      </div>

      {/* Filters */}
      <PanelCard>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Buscar campeonatos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            <option value="all">Todas las Categorías</option>
            <option value="Hombres Sub 20">Hombres Sub 20</option>
            <option value="Mujeres Sub 18">Mujeres Sub 18</option>
            <option value="Niños Sub 16">Niños Sub 16</option>
          </select>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            <option value="all">Todos los Estados</option>
            <option value="Active">Activo</option>
            <option value="Draft">Borrador</option>
            <option value="Finished">Finalizado</option>
          </select>

          {/* Clear Filters */}
          <Button
            variant="secondary"
            onClick={() => {
              setSearchQuery("");
              setCategoryFilter("all");
              setStatusFilter("all");
            }}
          >
            Limpiar Filtros
          </Button>
        </div>
      </PanelCard>

      {/* Championships Cards Grid */}
      <ChampionshipMotionComponent championships={filteredChampionships} />
    </div>
  );
};
