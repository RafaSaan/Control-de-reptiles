import * as aiIcons from "react-icons/ai";

import "./BtnAddRep.css";

const BtnAddRep = ({ openModal1 }) => {
  return (
    <div className="btnAdd__container">
      <div className="btnAdd" onClick={openModal1}>
        Agregar Ejemplar{" "}
        <span>
          <aiIcons.AiOutlinePlus />
        </span>
      </div>
    </div>
  );
};

export default BtnAddRep;
