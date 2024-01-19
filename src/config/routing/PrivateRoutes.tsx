import { Routes, Route } from "react-router-dom";
import { Simulation } from "../../features/Championship/pages/Simulation";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route key={1} path="/" index element={<Simulation />} />
    </Routes>
  );
};
