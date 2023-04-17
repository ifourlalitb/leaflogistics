import NewsSearch from "../pages/NewsSearch";
import NewsDetails from "../pages/NewsDetails";

const appRoutes = [
  { path: "search", element: NewsSearch },
  { path: "/:slug", element: NewsDetails },
];

const userRoutes = [];

const noUserRoutes = [];

export { appRoutes, userRoutes, noUserRoutes };
