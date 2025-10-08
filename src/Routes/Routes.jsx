import { createBrowserRouter } from "react-router";
import LayOuts from "../LayOuts/LayOuts";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import AppsAll from "../Components/AppsAll";

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
    ],
  },
]);

export default router;
