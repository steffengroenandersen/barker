import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
