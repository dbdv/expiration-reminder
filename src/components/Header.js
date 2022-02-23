import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import '../styles/header.css'

function Header() {
  return (
    <div>
      <header className="header">
        <FontAwesomeIcon icon={faClock} className="header-icon" />
        <h1 className="header-name">Control de vencimientos</h1>
      </header>
    </div>
  );
}

export default Header;
