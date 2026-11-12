import "./Header.css";
import {logo} from "../../assets/icons";

function Header(props) {
  return (
    <header>
      <h1 className="logo-title">
        <img src={logo} alt="Logo da empresa" />
        {props.title}
      </h1>
      <p>{props.description}</p>
    </header>
  );
}

// permite que o componente seja importado em outros arquivos
export default Header;
