import { createBrowserRouter } from "react-router";
import { MainLayout } from "@/frames/layouts/MainLayout";
import { ExamplePage } from "@/modules/examples/pages/ExamplePage";
import ParameterLayout from "@/modules/parameter/Layouts/ParameterLayout";
import ParameterPage from "@/modules/parameter/pages/ParameterPage";
// import { DashboardLayout } from "@/modules/dashboard/layout/DashboardLayout";
// import { DashboardPages } from "@/modules/dashboard/pages/DashboardPages";
import { ChampionshipLayout } from "@/modules/championship/layouts/ChampionshipLayout";
import { ChampionshipPage } from "@/modules/championship/pages/ChampionshipPages";
// import { ParamLayout } from "@/modules/parameter/Layouts/ParamLayout";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ExamplePage />,
      },
      {
        path: "championship",
        element: <ChampionshipLayout />,
        children: [
          {
            index: true,
            element: <ChampionshipPage />,
          },
        ],
      },
      {
        path: "parameters",
        element: <ParameterLayout />,
        children: [
          {
            index: true,
            element: <ParameterPage />,
          },
        ],
      },
    ],
  },
  {
    path: "auth/login",
    element: <h1>login</h1>,
  },
]);
