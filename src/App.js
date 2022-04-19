import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./Layouts/MainLayout";
import Login from "./pages/Login";
import LoginLayout from "./Layouts/LoginLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><Home  /></MainLayout>} />
        <Route path="/login" element={<LoginLayout><Login  /></LoginLayout>} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
