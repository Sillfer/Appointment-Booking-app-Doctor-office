import { Route, Routes } from "react-router-dom";
import AddReservation from "./public/pages/AddReservation";
import SignUp from "./public/pages/SignUp";
import Home from "./public/pages/Home";
import Login from "./public/pages/Login";
function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/AddReservation" element={<AddReservation />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}
export default App;
