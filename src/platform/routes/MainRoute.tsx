import { createBrowserRouter } from "react-router";
import { MainLayout } from "@/frames/layouts/MainLayout";
import { ExamplePage } from "@/modules/examples/pages/ExamplePage";
// import { DashboardLayout } from "@/modules/dashboard/layout/DashboardLayout";
// import { DashboardPages } from "@/modules/dashboard/pages/DashboardPages";
// import { ChampionshipLayout } from "@/modules/championship/layouts/ChampionshipLayout";
// import { ChampionshipPage } from "@/modules/championship/pages/ChampionshipPages";
// import { ParamLayout } from "@/modules/parameter/Layouts/ParamLayout";
// import { ParamPage } from "@/modules/parameter/pages/ParamPage";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ExamplePage />,
      },
      // {
      //   path: "championship",
      //   element: <ChampionshipLayout />,
      //   children: [
      //     {
      //       index: true,
      //       element: <ChampionshipPage />,
      //     },
      //   ],
      // },
      // {
      //   path: "params",
      //   element: <ParamLayout />,
      //   children: [
      //     {
      //       index: true,
      //       element: <ParamPage />,
      //     },
      //   ],
      // },
    ],
  },
  {
    path: "auth/login",
    element: <h1>login</h1>,
  },
]);
