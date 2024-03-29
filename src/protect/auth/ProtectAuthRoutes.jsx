
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
}

export default ProtectAuthRoutes;


