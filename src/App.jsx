import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Home />
      <MyFooter />
    </div>
  );
}

export default App;
