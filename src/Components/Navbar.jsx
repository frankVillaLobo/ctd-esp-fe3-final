import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContextGlobal();
  const handleClick = ()=>{
    dispatch({ type: "CHANGE_THEME"})
  }
  return (
    <nav className={state.theme==="dark" ? "navbar-dark":"navbar"}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/contact">
        <h4>Contacto</h4>
      </Link>
      <Link to='/favs'>
        <h4>Favoritos</h4>
      </Link>
      <button onClick={handleClick}>Change theme</button>
    </nav>
  );
};

export default Navbar;
