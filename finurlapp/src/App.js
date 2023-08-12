import "./App.css";
import Footer from "./Components/Common/Footer";
import Navbar from "./Components/Common/Navbar";
import Router from "./Router/Routes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
