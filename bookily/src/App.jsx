import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import AddListing from "./pages/AddListing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/> 
      <Routes>
        <Route path="/home?" element={<Home/>} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/add" element={<AddListing />} />
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
