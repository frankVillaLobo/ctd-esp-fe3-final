import React, { useState } from "react";

const Form = () => {
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const handleChangeName = (event) => {
    setCustomer({ ...customer, name: event.target.value });
  };

  const handleChangeEmail = (event) => {
    setCustomer({ ...customer, email: event.target.value });
  };

  const reset = () => {
    setCustomer({ name: "", email: "" });
    setShow(false);
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validaciones
    const nameIsValid = customer.name.trim().length > 5;
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email.trim());

    if (nameIsValid && emailIsValid) {
      setShow(true);
      setError("");
    } else {
      setError("Por favor verifique su información nuevamente");
    }
  };

  return (
    <div>
      {show ? (
        <>
          <h4>Gracias {customer.name}, te contactaremos cuanto antes vía mail</h4>
        </>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <label>Nombre completo:</label>
            <input
              type="text"
              value={customer.name}
              onChange={handleChangeName}
              placeholder="Nombre completo"
            />
            <label>Email:</label>
            <input
              type="text"
              value={customer.email}
              onChange={handleChangeEmail}
              placeholder="tuemail@example.com"
            />
            <button type="submit">Enviar</button>
          </form>
          <button onClick={reset}>Reset Form</button>
        </>
      )}

      {error ? (
        <h4 style={{ color: "red" }}>{error}</h4>
      ) : null}
    </div>
  );
};

export default Form;
