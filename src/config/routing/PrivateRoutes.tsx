import { Routes, Route, useNavigate } from "react-router-dom";
import { Simulation } from "../../features/Championship/pages/Simulation";
import { TeamForm } from "../../features/Championship/pages/TeamForm";
import { SidebarMenu } from "../../components/molecules/SidebarMenu";
import { History } from "../../features/Championship/pages/History";
import { isValidUUID } from "../../util/styles/helper/stringHelper";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";

export const PrivateRoutes = () => {
  const { userInfo } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isValidUUID(userInfo?.uuid)) {
      setShowMenu(isValidUUID(userInfo?.uuid));
    } else {
      navigate("/login");
    }
  }, [userInfo]);

  return (
    <div className="flex w-full p-sm gap-md">
      {showMenu && <SidebarMenu />}
      <div className="flex flex-col w-full h-full gap-xl">
        <Routes>
          <Route key={1} path="/" index element={<Simulation />} />
          <Route key={2} path="/team" element={<TeamForm />} />
          <Route key={3} path="/history" element={<History />} />
        </Routes>
      </div>
    </div>
  );
};
