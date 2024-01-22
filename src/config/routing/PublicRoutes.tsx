import { Routes, Route } from "react-router-dom";
import { Login } from "../../features/Onboarding/pages/Login";
import { Register } from "../../features/Onboarding/pages/Register";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route key={4} path="/login" element={<Login />} />
      <Route key={5} path="/register" element={<Register />} />
    </Routes>
  );
};
