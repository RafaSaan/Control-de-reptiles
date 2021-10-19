import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Control from "./pages/Control";
import Inicio from "./pages/Inicio";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route path="/control" component={Control} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
