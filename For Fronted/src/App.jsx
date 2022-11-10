import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Link,
} from "react-router-dom";
import { Home } from "./Components/Home";
import { Addproduct } from "./Components/Addproduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/addproduct" element={<Addproduct />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
