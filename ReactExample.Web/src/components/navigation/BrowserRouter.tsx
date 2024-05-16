import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import SettingsPage from "@/pages/SettingsPage";
import ErrorPage from "@/pages/ErrorPage";
import ChartsPage from "@/pages/ChartsPage";
import CardsPage from "@/pages/CardsPage";
import DataTablePage from "@/pages/DataTablePage";
import InputsPage from "@/pages/InputsPage";
import ButtonsPage from "@/pages/ButtonsPage";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/buttons",
        element: <ButtonsPage />,
      },
      {
        path: "/charts",
        element: <ChartsPage />,
      },
      {
        path: "/data-table",
        element: <DataTablePage />,
      },
      {
        path: "/cards",
        element: <CardsPage />,
      },
      {
        path: "/inputs",
        element: <InputsPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default BrowserRouter;
