import { AuthContext } from "../../context/auth";
import { useContext } from "react";
import { useCallback, useState } from "react";
import { loginUser } from "../../_shared/Api/ApiLogin";
import { registerUser } from "../../_shared/Api/ApiUser";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../_shared/Api/ApiLogout";


function useAuth() {
  const [state, setState] = useState({ loading: false, error: false });
  const { jwt, setJWT, removeUserProvider } = useContext(AuthContext);
  const navigate = useNavigate();

  //login
  const signIn = useCallback((data) => {
    setState({ loading: true, error: false });
    
    const post = async () => {
      try {
        
        const res = await loginUser(data);
        
        
        console.log(res.status)
        if (res.status === 201) {
          window.sessionStorage.setItem("token", JSON.stringify(res.data));
          setState({ loading: false, error: false });
          setJWT(res.data);
          navigate('/');
        }
      } catch (err) {
        window.sessionStorage.removeItem("token");
        setState({ loading: false, error: true });
        console.error(err);
      }
    };
    post();
  }, [setJWT]);

  //registro
  const signUp = useCallback((data) => {
    const post = async () => {
      try {
        const res = await registerUser(data);
        if (res.status === 201) {                    
          setState({ loading: false, error: false });                    
        }
      } catch (err) {        
        setState({ loading: false, error: true });
        console.error(err);
      }
    };
    post()
  }, []);

  //desconexión
  const logout = useCallback(() => {
    const post = async () => {
      try {
        const res = await logoutUser();
        if (res.status === 204) {                    
          setState({ loading: false, error: false });
          setJWT(undefined);
          removeUserProvider();  
          window.sessionStorage.removeItem("token");
          console.log('Desconectado')  
          navigate('/login')              
        }
      } catch (err) {        
        setState({ loading: false, error: true });
        console.error(err);
      }
    };
    post()
  }, []) 

  return {
    signIn,
    signUp,
    logout,
    loadingAuth: state.loading,
    hashError: state.error,
    isLogged: Boolean(jwt),
  };
}

export default useAuth;
