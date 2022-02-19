import Layaout from "./layaout.js/Layaout";
import { Routes, Route } from "react-router-dom";
import VistaGeneral from "./components/VistaGeneral";
import Nav from './components/Nav'
import Test from "./components/Test";



function App() {
  return (
    <div >
      <Nav />
      <Routes>
        <Route index element={<VistaGeneral />} />
        <Route path="Test" element={<Test />} />
      </Routes>
      <Layaout />

    </div>
  );
}

export default App;
