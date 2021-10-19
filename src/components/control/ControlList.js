import "./ControlList.css";
import ListControlItem from "./ListControlItem";
import Message from "../Message";
import { AiTwotoneEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

const ControlList = ({ data, handleEdit }) => {
  return (
    <div className="controlList">
      <div className="control__itemPreview">
        <div>Alimento</div>
        <div>Cantidad</div>
        <div>Fecha</div>
        <div className="icons-container">
          <AiTwotoneEdit className="icon-edit preview" />

          <FaTrashAlt className="icon-delete preview" />
        </div>
      </div>

      <div className="">
        {data.length === 0 ? (
          <Message
            message="No existe ningun registro."
            action="Haz click en Agregar* para añadir un nuevo control."
          />
        ) : (
          data.map((el, i) => (
            <ListControlItem
              el={el}
              key={i + Date.now()}
              handleEdit={handleEdit}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ControlList;
