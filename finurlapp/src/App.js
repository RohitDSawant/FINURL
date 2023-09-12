import { useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Common/Navbar";
import Router from "./Router/Routes";
import AOS from "aos"
import 'aos/dist/aos.css'; 

function App() {

  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Router />
    </div>
  );
}

export default App;
