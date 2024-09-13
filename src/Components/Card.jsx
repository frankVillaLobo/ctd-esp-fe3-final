import React from "react";
import { Link } from "react-router-dom";
import Detail from "../Routes/Detail";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className="card">
      <Link to={"/detail/" + id}>
        <h1>{name}</h1>
        {/* En cada card deberan mostrar en name - username y el id */}

        <img src="./images/doctor.jpg" alt="doctor-image" />
        <h5>@{username} </h5>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">
          Add fav
        </button>
      </Link>
    </div>
  );
};

export default Card;
