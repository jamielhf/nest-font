import React, { Children } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Switch, Route } from "react-router";

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

export default ({routes}: any) => {
  return(
    <div>
    <Header></Header>
    <Switch>
        {routes.map((route: any, i: number) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
      <Footer></Footer>
    </div>
  );
};
