import "./App.css";
import Navbar from "./componentes/Navbar";
/*    /* display: flex!important*/

function App() {
  return (
    <div className="App">
     <Navbar
     linkUno="Home"
     linkDos="Chicos/as"
     linkTres="Bebes"
     linkCuatro="Descuentos"/>
    </div>
  );
}

export default App;
