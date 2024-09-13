
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs"
import Details from "./Routes/Detail"

import { Route, Router, Routes } from "react-router-dom";


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/favs" element={<Favs></Favs>}></Route>
            <Route path="/detail/:id" element={<Details></Details>}></Route>
            <Route path="/*" element={<h1>Pagina no encontrada</h1>}></Route>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
