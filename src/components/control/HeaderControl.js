import "./HeaderControl.css";
import logo from "../../media/rsanLogo.svg";
import * as bsIcons from "react-icons/bs";
import { Link } from "react-router-dom";

const HeaderControl = () => {
  return (
    <div>
      <header className="header header-control">
        <img src={logo} alt="logo" />
        <Link to="/">
          <bsIcons.BsFillArrowLeftCircleFill className="header__prev" />
        </Link>
      </header>
    </div>
  );
};

export default HeaderControl;
