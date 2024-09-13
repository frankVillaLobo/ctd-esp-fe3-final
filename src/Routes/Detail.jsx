import React from "react";
import { useParams } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";
import { useEffect } from "react";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const params = useParams();
  const { state, fetchDentistaById } = useContextGlobal();
  const id = params.id;
  useEffect(() => {
    if (id) {
      fetchDentistaById(id);
    }
  }, []);
  console.log(state.selectedDentista);
  return (
    <div>
      {state.selectedDentista ? (
        <div
          className={state.theme === "dark" ? "dentistId-dark" : "dentistId"}
        >
          <h2>{state.selectedDentista.name}</h2>
          <img src="../../public/images/doctor.jpg" alt="doctor-image" />
          <p>{state.selectedDentista.email}</p>
          <p>{state.selectedDentista.phone}</p>
          <p>{state.selectedDentista.website}</p>
          {/* Render other details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;
