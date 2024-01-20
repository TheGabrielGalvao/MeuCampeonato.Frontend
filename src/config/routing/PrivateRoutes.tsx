import { Routes, Route } from "react-router-dom";
import { Simulation } from "../../features/Championship/pages/Simulation";
import { TeamForm } from "../../features/Championship/pages/TeamForm";
import { SidebarMenu } from "../../components/molecules/SidebarMenu";
import { Login } from "../../features/Onboarding/pages/Login";

export const PrivateRoutes = () => {
  return (
    <div className="flex w-full p-sm gap-md">
      <SidebarMenu />
      <div className="flex flex-col w-full h-full gap-xl">
        <Routes>
          <Route key={1} path="/" index element={<Simulation />} />
          <Route key={2} path="/team" element={<TeamForm />} />
          <Route key={3} path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};
