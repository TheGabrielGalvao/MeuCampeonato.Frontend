import { Routes, Route } from "react-router-dom";
import { Login } from "../../features/Onboarding/pages/Login";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route key={1} path="/login" element={<Login />} />
    </Routes>
  );
};