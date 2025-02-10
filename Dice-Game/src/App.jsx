import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Game from "./components/game";
function App() {
  return (
    <>
      <Routes>
        <Route path="/home?" element={<Home></Home>}/>
        <Route path="/game" element={<Game/>}/>
      </Routes>
    </>
  );
}

export default App;
