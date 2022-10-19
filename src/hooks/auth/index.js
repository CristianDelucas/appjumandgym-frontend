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
  const signIn = useCallback((_data) => {
    setState({ loading: true, error: false });
    
    const post = async () => {
      try {
        
        const {data,status} = await loginUser(_data);
        
        
        console.log(status)
        if (status === 201) {
          window.sessionStorage.setItem("token", JSON.stringify(data));
          setJWT(data);
          setState({ loading: false, error: false });
          navigate('/');
        }
        if(status === 0){
          window.sessionStorage.removeItem("token");
          setState({ loading: false, error: true });
        }
      } catch (err) {
        window.sessionStorage.removeItem("token");
        setState({ loading: false, error: true });
        console.error(err);
      }
    };
    post();
  }, [setJWT,navigate]);

  //registro
  const signUp = useCallback((data) => {
    const post = async () => {
      try {
        const res = await registerUser(data);
        if (res.status === 201) {                  
          setState({ loading: false, error: false });      
          navigate('/');              
        }
      } catch (err) {        
        setState({ loading: false, error: true });
        console.error(err);
      }
    };
    post()
  }, [navigate]);

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
          navigate('/login')              
        }
      } catch (err) {        
        setState({ loading: false, error: true });
        console.error(err);
      }
    };
    post()
  }, [navigate,removeUserProvider,setJWT]) 

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
