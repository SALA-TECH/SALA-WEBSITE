
import NavBar from "./components/NavBar";
//import Home from "./pages/Home";
import "./App.css";
import Logo from "/images/logo.png"; // logo in public/images

function App() {
  return (
    <>
     <div className="App">
      <NavBar brandName="SALA" logoSrc={Logo} />
      <div className="page-content">
        Welcome to SALA
      </div>
    </div>
    </>
   
  );
}

export default App;

