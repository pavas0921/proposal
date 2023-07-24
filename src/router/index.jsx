import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Bootstrap } from "../components/bootstrap";
import { Dashboard } from "../components/Dashboard";
import { BootstrapTable } from "../components/bootstrap/BootstrapTable";
import { Login } from "../components/MaterialUI/Login";
import { ResponsiveAppBar } from "../components/MaterialUI/ResponsiveAppBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Bootstrap />,
    errorElement: <div> Hubo un error!!</div>,
  },
  {
    path: "/table",
    element: <BootstrapTable />,
    errorElement: <div> Hubo un error!!</div>,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <div> Hubo un error!!</div>,
  },
  {
    path: "/login-material",
    element: <Login />,
    errorElement: <div> Hubo un error!!</div>,
  },
  {
    path: "/dashboard-material",
    element: <ResponsiveAppBar />,
    errorElement: <div> Hubo un error!!</div>,
  },
]);

const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;

export { CustomRouter };
