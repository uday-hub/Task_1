import Home from "./Home";
import Welcome from "./Welcome";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/" element={<Welcome />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
