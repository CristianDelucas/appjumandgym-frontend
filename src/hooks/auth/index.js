import { AuthContext } from "../../context/auth";
import { useContext } from "react";
import { useCallback, useState } from "react";
import { loginUser } from "../../_shared/Api/ApiLogin";
import { registerUser } from "../../_shared/Api/ApiUser";
import { useNavigate } from "react-router-dom";


function useAuth() {
  const [state, setState] = useState({ loading: false, error: false });
  const { jwt, setJWT } = useContext(AuthContext);
  const navigate = useNavigate();

  const signIn = useCallback((data) => {
    setState({ loading: true, error: false });
    
    const post = async () => {
      try {
        const res = await loginUser(data);
        if (res.status === 201) {
          window.sessionStorage.setItem("token", res.data);
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
  }, []) 

  return {
    signIn,
    signUp,
    loadingAuth: state.loading,
    hashError: state.error,
    isLogged: Boolean(jwt),
  };
}

export default useAuth;
