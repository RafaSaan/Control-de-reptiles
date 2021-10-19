import { AiTwotoneEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
const ListItemPeso = ({ el }) => {
  const datePeso = JSON.stringify(el.inputDate);
  return (
    <div className="control__item mudasItem">
      <div className="control__itemPreview control__item__container">
        <div>{datePeso.substring(1, 11)}</div>
        <div>{el.peso}</div>
        <div>{el.observaciones}</div>
        {/* <div>fecha</div>
        <div>peso</div>
        <div>observaciones</div> */}
        <div className="icons-container">
          <AiTwotoneEdit className="icon-edit" />

          <FaTrashAlt className="icon-delete" />
        </div>
      </div>
    </div>
  );
};

export default ListItemPeso;
