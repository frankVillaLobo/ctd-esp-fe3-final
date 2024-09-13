import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state, dispatch } = useContextGlobal();
  console.log(state.dentistas)
  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        {state.dentistas.map((dentista)=>(
          <Card name={dentista.name} username={dentista.username} id={dentista.id}></Card>
        ))}
      </div>
    </main>
  );
};

export default Home;
