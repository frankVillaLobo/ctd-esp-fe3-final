import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state, dispatch } = useContextGlobal();

  useEffect(() => {
    const fetchFavoriteDentistas = async () => {
      const favsList = JSON.parse(localStorage.getItem("favorites")) || [];
      const requests = favsList.map((favId) =>
        axios.get(`https://jsonplaceholder.typicode.com/users/${favId}`)
      );
      try {
        const responses = await Promise.all(requests);
        const favsDentistas = responses.map((response) => response.data);
        dispatch({ type: "GET_DENTISTAS_FAVS", payload: favsDentistas });
      } catch (error) {
        console.error("Error fetching favorite dentists:", error);
      }
    };

    fetchFavoriteDentistas();
  }, [dispatch]);

  return (
    <>
      <div className={state.theme === "dark" ? "favs-dark" : "favs"}>
        <h1>Dentists Favs</h1>
        <div className="card-grid">
          {/* este componente debe consumir los destacados del localStorage */}
          {/* Deberan renderizar una Card por cada uno de ellos */}
          {state.favsDentistas.length > 0 ? (
            state.favsDentistas.map((dentista) => (
              <Card
                key={dentista.id}
                name={dentista.name}
                username={dentista.username}
                id={dentista.id}
              ></Card>
            ))
          ) : (
            <>
              <h1>No hay dentistas Favoritos</h1>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Favs;
