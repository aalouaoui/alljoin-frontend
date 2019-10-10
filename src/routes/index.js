import React, { useEffect } from "react";
import { useRoutes } from "hookrouter";
import Home from "./Home";
import Entry from "./Entry";

const routes = {
  "/": () => <Home />,
  "/register": () => <Entry />,
  "/login": () => <Entry />,
  "/products": () => "products",
  "/products/:id": ({ id }) => `Product ${id}`
};

const Routes = () => {
  const Routes = useRoutes(routes);
  useEffect(() => window.scrollTo(0, 0));
  return Routes || "Not Found";
};

export default Routes;
