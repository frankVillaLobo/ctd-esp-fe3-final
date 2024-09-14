import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Detail from "../Routes/Detail";
import { useContextGlobal } from "../Components/utils/global.context";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContextGlobal();
  const [emoji, setEmoji] = useState("");
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    let favs = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favs.includes(id)) {
      favs = favs.filter((favId) => favId !== id);
      localStorage.setItem("favorites", JSON.stringify(favs));
    } else {
      favs.push(id);
      localStorage.setItem("favorites", JSON.stringify(favs));
    }
    // Actualiza el estado local para reflejar el cambio inmediatamente
    setEmoji(favs.includes(id) ? "❤️" : "");
    dispatch({ type: "UPDATE_FAVORITES", payload: favs });
  };
  useEffect(() => {
    // Verifica si el dentista está en los favoritos
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setEmoji(favs.includes(id) ? "❤️" : "");
  }, [addFav,id]);
  return (
    <div className={state.theme==="dark" ? "card-dark":"card"}>
      <Link to={"/detail/" + id}>
        <h1>{name}</h1>
        {/* En cada card deberan mostrar en name - username y el id */}

        <img src="./images/doctor.jpg" alt="doctor-image" />
        <h5>@{username} {emoji}</h5>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      </Link>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
