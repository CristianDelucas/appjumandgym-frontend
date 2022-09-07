
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/auth";

function ProtectAppRoutes({ children }) {
  const { isLogged } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) navigate("/login");
  }, [isLogged, navigate]);

  return <>{isLogged && <>{children}</>}</>;
}

export default ProtectAppRoutes;