import * as React from "react"
import { Switch } from "react-router-dom";
import Config from "./config";
import { renderRoutes } from "react-router-config";

class Routers extends React.Component {
  render() {
    return (
      <React.Suspense fallback={null}>
        <Switch>
          {
            renderRoutes(Config)
          }
        </Switch>
      </React.Suspense>
    );
  }
}

export default Routers;
