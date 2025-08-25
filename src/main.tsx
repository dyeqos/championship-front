import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChampionshipApp } from "./ChampionshipApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChampionshipApp />
  </StrictMode>
);
