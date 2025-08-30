import { createBrowserRouter } from "react-router";
import { MainLayout } from "@/frames/layouts/MainLayout";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "championship",
        element: <h1>campeonatos</h1>,
      },
      {
        path: "teams",
        element: <h1>equipos</h1>,
      },
    ],
  },
  {
    path: "auth/login",
    element: <h1>login</h1>,
  },
]);
