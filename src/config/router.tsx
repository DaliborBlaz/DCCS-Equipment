import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { EmployeeContext } from "../AppContext/employeeContext";
import RoutesConstants from "./routesConstants";
import { Error404 } from "../components/Error/404";
import { Error403 } from "../components/Error/403";

import { Header } from "../components/Header/header";
import { Error401 } from "../components/Error/401";

const ReactRouterSetup: React.FC<any> = () => {
  const { setUser, currentUser } = useContext(EmployeeContext);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user && setUser) {
      setUser(JSON.parse(user));
    }
  }, []);

  const { employees } = useContext(EmployeeContext);
  const isAuthenticated = () => {
    if (currentUser) {
      
      const foundIndex = (employees || []).findIndex(
        (user: Employee) => user._id === currentUser._id
      );
      if (foundIndex > -1) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const routDirector = (role: string) => {
    if (role === "admin") {
      return RoutesConstants.authorized.admin.path;
    } else {
      return RoutesConstants.authorized.employee.path;
    }
  };

  const renderAuthorizedRoutes = (routes: any) => {
    if (!isAuthenticated()) {
      return <Error401 />;
    }

    return Object.keys(routes).map((key) => {
      const route = routes[key];

      const hasPermission =
        (route.visibleFor || []).findIndex(
          (role: string) => currentUser && currentUser._role === role
        ) > -1;

      if (!hasPermission) {
       
        return (
          <Route key={route.path} path={route.path}>
            <Error403 />
          </Route>
        );
      } else {
        return (
          <Route key={route.path} path={route.path}>
            <Header />
            <route.component></route.component>
          </Route>
        );
      }
    });
  };

  const renderUnauthorizedRoutes = (routes: any) => {
    return Object.keys(routes).map((key) => {
      let redirectComponent: any = "";
      if (isAuthenticated()) {
        
        redirectComponent =
          currentUser && currentUser._role === "admin" ? (
            <Redirect to={RoutesConstants.authorized.admin.path} />
          ) : (
            <Redirect to={RoutesConstants.authorized.employee.path} />
          );
        redirectComponent = (
          <Redirect to={routDirector(currentUser?._role || "")} />
        );
      }
      const route = routes[key];
      return (
        <Route exact key={route.path} path={route.path}>
          {redirectComponent}
          <Header />
          <route.component></route.component>
        </Route>
      );
    });
  };
  return (
    <Router>
      <Switch>
        {renderUnauthorizedRoutes(RoutesConstants.unAuthorized)}
        {renderAuthorizedRoutes(RoutesConstants.authorized)}
        <Route exact path="*">
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
