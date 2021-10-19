import { AiTwotoneEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
const ListItemMuda = ({ el }) => {
  const dateMuda = JSON.stringify(el.inputDate);
  return (
    <div className="control__item mudasItem">
      <div className="control__itemPreview control__item__container">
        <div>{dateMuda.substring(1, 11)}</div>
        <div>{el.observaciones}</div>
        <div className="icons-container">
          <AiTwotoneEdit className="icon-edit" />

          <FaTrashAlt className="icon-delete" />
        </div>
      </div>
    </div>
  );
};

export default ListItemMuda;
