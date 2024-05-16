import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import DashboardPage from "@/pages/DashboardPage";
import SettingsPage from "@/pages/SettingsPage";
import ErrorPage from "@/pages/ErrorPage";
import ChartsPage from "@/pages/ChartsPage";
import CardsPage from "@/pages/CardsPage";
import DataTablePage from "@/pages/DataTablePage";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
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
        path: "settings",
        element: <SettingsPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default BrowserRouter;
