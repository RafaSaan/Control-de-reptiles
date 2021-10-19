import "./ListMudas.css";
import { AiTwotoneEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import Message from "../Message";
import ListItemMuda from "./ListItemMuda";

const ListMudas = ({ data }) => {
  return (
    <div className="controMudas__list">
      <div className="control__itemPreview">
        <div>Fecha</div>
        <div>Observaciones</div>
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
          data.map((el, i) => <ListItemMuda el={el} key={i + Date.now()} />)
        )}
      </div>
    </div>
  );
};

export default ListMudas;
