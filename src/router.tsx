import { createBrowserRouter, type RouteObject } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

const routes: RouteObject[] = [
  { path: "/", element: <App></App> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
  },
];

export const router = createBrowserRouter(routes);
