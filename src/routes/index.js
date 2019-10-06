import { useEffect } from "react";
import { useRoutes } from "hookrouter";
import Home from "./Home";

const routes = {
  "/": Home,
  "/about": () => "about",
  "/products": () => "products",
  "/products/:id": ({ id }) => `Product ${id}`
};

const Routes = () => {
  const Routes = useRoutes(routes);
  useEffect(() => window.scrollTo(0, 0));
  return Routes || "Not Found";
};

export default Routes;
