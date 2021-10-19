import "./ListControlItem.css";
import { AiTwotoneEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
const ListControlItem = ({ el, handleEdit }) => {
  const dateControl = JSON.stringify(el.inputDate);
  // console.log(el);
  return (
    <div className="control__item">
      <div className="control__itemPreview control__item__container">
        <div className="control__alimento">{el.alimento}</div>
        <div>{el.cantidad}</div>
        <div>{dateControl.substring(1, 11)}</div>
        <div className="icons-container">
          <AiTwotoneEdit className="icon-edit" onClick={() => handleEdit(el)} />

          <FaTrashAlt className="icon-delete" />
        </div>
      </div>
    </div>
  );
};

export default ListControlItem;
