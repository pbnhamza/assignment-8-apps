import { createBrowserRouter } from "react-router";
import LayOuts from "../LayOuts/LayOuts";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import AppsAll from "../Components/AppsAll";
import Installation from "../Components/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    Component: LayOuts,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p>Loading.....</p>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allApps",
        Component: AppsAll,
      },
      {
        path: "/apps/:id",
        Component: Apps,
      },
      {
        path: "/install",
        Component: Installation,
      },
    ],
  },
]);

export default router;
