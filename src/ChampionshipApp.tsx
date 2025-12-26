import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ButtonToggleProvider } from "./frames/context/ButtonToggleContext";
import { MainRouter } from "./platform/routes/MainRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
export const ChampionshipApp = () => {
  return (
    <ButtonToggleProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={MainRouter} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ButtonToggleProvider>
  );
};
