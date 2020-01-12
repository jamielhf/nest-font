import Login from "../pages/Login";
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "../layout/Home";
import Index from "../pages/Index";
import Register from "../pages/Register";

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/home/index",
    component: Home,
    routes: [
      {
        path: "/home/index",
        component: Index,
      },
    ],
  },
  // {
  //   path: "/tacos",
  //   component: Tacos,
  //   routes: [
  //     {
  //       path: "/tacos/bus",
  //       component: Bus
  //     },
  //     {
  //       path: "/tacos/cart",
  //       component: Cart
  //     }
  //   ]
  // }
];

export default function RouteConfig() {
  return (
    <Router >
      <div>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
