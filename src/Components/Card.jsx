import React from "react";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className="card">
      <h1>Card</h1>
      {/* En cada card deberan mostrar en name - username y el id */}
      <a href="/dentista/2">
          <img src="./images/doctor.jpg" alt="doctor-image" />
          <h4>Nombre: {name}</h4>
          <h5>user: @{username} </h5>
          <h3>id: {id} </h3>
        </a>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
      {/* <div class="card dark-theme">
        <a href="/dentista/2">
          <img src="./images/doctor.jpg" alt="doctor-image" />
          <h4>Ervin Howell</h4>
          <h5>@Antonette </h5>
        </a>
        <button class="favButton">Add Favorite</button>
      </div> */}
    </div>
  );
};

export default Card;
