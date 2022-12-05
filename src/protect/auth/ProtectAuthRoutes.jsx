
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ProtectAuthRoutes = ({ allowedRoles, children }) => {

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  
  
  const resultado = user?.roles?.find(role => allowedRoles?.includes(role));
  

  useEffect(() => {
    
    if(!resultado) navigate('/')
  }, []);

  return (
    <>{resultado && <>{children}</>}</>
  )

  // return (
  //   roles?.find(role => allowedRoles?.includes(role))
  //   ? <Outlet/>
  //   :isLogged
  //     ? <Navigate to="/unauthorized" state={{ from: location }}  replace />
  //     :  <Navigate to="/login" state={{ from: location }} replace />
  // );
}

export default ProtectAuthRoutes;


