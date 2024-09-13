import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import axios from "axios";

export const ContextGlobal = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTAS":
      return { ...state, dentistas: action.payload };
    default:
      throw new Error("Error de instruccion");
    case "CHANGE_THEME":
      return { ...state, theme: state.theme === "dark" ? "light" : "dark" }
  }
};
const initialState = {
  dentistas: [],
  theme: "dark",
  data: [],
};
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // Get data form the api
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    axios(url).then((res) => {
      dispatch({ type: "GET_DENTISTAS", payload: res.data });
    });
  }, []);

  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => {
  //ya con esto tengo acceso desde los componentes que son "children" del Context
  return useContext(ContextGlobal);
};
