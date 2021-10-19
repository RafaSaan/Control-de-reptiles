import "./CardReptil.css";
import * as ioIcons from "react-icons/io";
import { Link } from "react-router-dom";
const CardReptil = ({ el, i }) => {
  const { fase, id, inputDate, nombre, sexo } = el;
  console.log(id);
  const dateLocal = JSON.stringify(inputDate);
  return (
    <div className="cardReptil">
      <h3>{nombre}</h3>
      <p>Fase: {fase} </p>
      <p>Sexo: {sexo}</p>
      <p>Nacimiento: {dateLocal.substring(1, 11)}</p>

      <Link to="/control/alimento" className="card__btn">
        Control de alimentacion <ioIcons.IoIosArrowDropright />{" "}
      </Link>
    </div>
  );
};

export default CardReptil;
