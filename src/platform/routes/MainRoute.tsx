import { createBrowserRouter } from "react-router";
import { MainLoyout } from "@/frames/layouts/MainLoyout";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLoyout />,
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
