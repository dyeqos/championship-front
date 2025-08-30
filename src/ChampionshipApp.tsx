import { RouterProvider } from "react-router";
import { MainRouter } from "./platform/routes/MainRoute";

export const ChampionshipApp = () => {
  return (
    <>
      <RouterProvider router={MainRouter} />
    </>
  );
};
