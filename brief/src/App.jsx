import { Route, Routes } from "react-router-dom";
import AddReservation from "./pages/AddReservation";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/AddReservation" element={<AddReservation />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  );
}
export default App;