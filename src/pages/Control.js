import ControlNav from "../components/control/ControlNav";
import HeaderControl from "../components/control/HeaderControl";
import "./Control.css";
import { Route, Switch, useRouteMatch } from "react-router";
import ControlMudas from "./ControlMudas";
import ControlPeso from "./ControlPeso";
import ControlAlimento from "./ControlAlimento";

const Control = () => {
  const { path, url } = useRouteMatch();
  return (
    <section className="control">
      <HeaderControl />
      <ControlNav url={url} />
      <Switch>
        <Route path={`${path}/alimento`} component={ControlAlimento}></Route>
        <Route path={`${path}/mudas`} component={ControlMudas} />
        <Route path={`${path}/peso`} component={ControlPeso} />
      </Switch>
    </section>
  );
};

export default Control;
