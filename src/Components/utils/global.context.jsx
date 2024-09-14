import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
  useMemo,
} from "react";
import axios from "axios";

export const ContextGlobal = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTAS":
      return { ...state, dentistas: action.payload };
    case "CHANGE_THEME":
      return { ...state, theme: state.theme === "dark" ? "light" : "dark" };
    case "GET_DENTISTAS_ID":
      return { ...state, selectedDentista: action.payload };
    case "GET_DENTISTAS_FAVS":
      return { ...state, favsDentistas: action.payload };
    case "UPDATE_FAVORITES":
      // Fetch updated data
      return {
        ...state,
        favsDentistas: action.payload.map((id) =>
          state.dentistas.find((dentista) => dentista.id === id)
        ),
      };
    default:
      throw new Error("Error de instruccion");
  }
};
const initialState = {
  //lista de dentista a renderizar
  dentistas: [],
  //tema de la pagina
  theme: "dark",
  selectedDentista: null,
  //Me hace falta lo de favs
  favsDentistas: [],
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

  const fetchDentistaById = async (id) => {
    try {
      const response = await axios.get(url + "/" + id);
      dispatch({ type: "GET_DENTISTAS_ID", payload: response.data });
    } catch (error) {
      console.error("Error fetching dentist by ID:", error);
    }
  };
  const fetchFavoriteDentistas = async (favs) => {
    try {
      // primero mapeo las peticiones
      const requests = favs.map((favId) => axios.get(`${url}/${favId}`));
      const responses = await Promise.all(requests);

      // Acumula los resultados en un array
      const newFavsDentistas = responses.map((response) => response.data);
      // Despacha una única acción con el array completo
      dispatch({ type: "GET_DENTISTAS_FAVS", payload: newFavsDentistas });
    } catch (error) {
      console.error("Error fetching dentist by ID:", error);
    }
  };

  const value = useMemo(
    () => ({
      state,
      dispatch,
      fetchDentistaById,
      fetchFavoriteDentistas,
    }),
    [state]
  );

  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => {
  //ya con esto tengo acceso desde los componentes que son "children" del Context
  return useContext(ContextGlobal);
};
