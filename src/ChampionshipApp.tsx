import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MainRouter } from "./platform/routes/MainRoute";

const queryClient = new QueryClient();
export const ChampionshipApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={MainRouter} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
