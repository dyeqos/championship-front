import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ButtonToggleProvider } from "./frames/context/ButtonToggleContext";
import { Toaster } from "./components/ui/sonner";
import { MainRouter } from "./platform/routes/MainRoute";
import { LoadingComponent } from "./components/customs/loading/LoadingComponent";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});
export const ChampionshipApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ButtonToggleProvider>
        <RouterProvider router={MainRouter} />
        <ReactQueryDevtools initialIsOpen={false} />
      </ButtonToggleProvider>
      <LoadingComponent />
      <Toaster />
    </QueryClientProvider>
  );
};
