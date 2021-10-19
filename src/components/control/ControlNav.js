import { NavLink } from "react-router-dom";

import "./ControlNav.css";
const ControlNav = ({ url }) => {
  return (
    <div className="control__nav">
      <div className="nav-container">
        <h3>Control de "Nombre del ejemplar"</h3>
        <div className="control__menu">
          <NavLink to={`${url}/alimento`} activeClassName="nav-active">
            Alimento
          </NavLink>
          <NavLink to={`${url}/mudas`} activeClassName="nav-active">
            Mudas
          </NavLink>
          <NavLink to={`${url}/peso`} activeClassName="nav-active">
            Peso
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ControlNav;
