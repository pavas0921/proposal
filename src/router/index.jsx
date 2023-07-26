import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AntDesignCalendar } from "../components/AntDesign/AntDesignCalendar";
import { AntDesignForm } from "../components/AntDesign/AntDesignForm";
import { AntDesignLogin } from "../components/AntDesign/AntDesignLogin";
import { NavbarAnt } from "../components/AntDesign/NavbarAnt";
import { Bootstrap } from "../components/bootstrap";
import { BootstrapTable } from "../components/bootstrap/BootstrapTable";
import { BigCalendar } from "../components/Calendar";
import { Dashboard } from "../components/Dashboard";
import { FormMaterial } from "../components/MaterialUI/FormMaterial";
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
  {
    path: "/antd-login",
    element: <AntDesignLogin />,
    errorElement: <div> Hubo un error!!</div>,
  },
  {
    path: "/antd-dashboard",
    element: <NavbarAnt />,
    errorElement: <div> Hubo un error!!</div>,
  },
  {
    path: "/antd-form",
    element: <AntDesignForm />,
    errorElement: <div> Hubo un error!!</div>,
  },
  {
    path: "/antd-calendar",
    element: <AntDesignCalendar />,
    errorElement: <div> Hubo un error!!</div>,
  },
  {
    path: "/form-material",
    element: <FormMaterial />,
    errorElement: <div> Hubo un error!!</div>,
  },
  {
    path: "/calendar",
    element: <BigCalendar />,
    errorElement: <div> Hubo un error!!</div>,
  },
]);

const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;

export { CustomRouter };
