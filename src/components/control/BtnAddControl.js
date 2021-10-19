import "./BtnAddControl.css";
import * as aiIcons from "react-icons/ai";
const BtnAddControl = ({ openModal }) => {
  return (
    <div className="btnAddControl">
      <div className="btnAdd" onClick={openModal}>
        Agregar{" "}
        <span>
          <aiIcons.AiOutlinePlus />
        </span>
      </div>
    </div>
  );
};

export default BtnAddControl;
