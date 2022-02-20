import Layaout from "./layaout.js/Layaout";
import { Routes, Route } from "react-router-dom";
import VistaGeneral from "./components/VistaGeneral";
import Nav from './components/Nav'
import Test from "./components/Test";
import CategoriasProvider from './context/CategoriasContex'



function App() {




  return (
    <CategoriasProvider>
      <Nav />
      <Routes>
        <Route index element={<VistaGeneral />} />
        <Route path="Test" element={<Test />} />
      </Routes>
      <Layaout />

    </CategoriasProvider>
  );
}

export default App;
