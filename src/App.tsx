import { BrowserRouter } from "react-router-dom";
import "./util/styles/global.css";
import { GlobalProvider } from "./context/GlobalContext";
import { AuthProvider } from "./context/AuthContext";
import { PublicRoutes } from "./config/routing";
import { PrivateRoutes } from "./config/routing/PrivateRoutes";

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <AuthProvider>
          <PrivateRoutes />
          <PublicRoutes />
        </AuthProvider>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
