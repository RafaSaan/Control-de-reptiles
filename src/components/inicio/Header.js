import "./Header.css";
import logo from "../../media/rsanLogo.svg";
const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
    </header>
  );
};

export default Header;
