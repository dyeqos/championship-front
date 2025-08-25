import { RouterProvider } from "react-router";
import { mainRouter } from "./platform/routes/MainRoute";

export const ChampionshipApp = () => {
  return (
    <>
      <RouterProvider router={mainRouter} />
    </>
  );
};
