import { useContext } from "react";
import { useCallback, useState } from "react";
import { deleteUserById, getUsers, registerUser, updateUser } from "../../_shared/Api/ApiUser";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AdminContext } from "../../context/AdminContext";
import { deleteExerciseById, getExercises, registerExercise, updateExerciseByID } from "../../_shared/Api/Exercise/ApiExercise";


function useAdmin() {
  
  const [state, setState] = useState({ loading: false, error: false });
  
  const { users, setUsers,exercises, setExercises, addUserState } = useContext(AdminContext);

  const navigate = useNavigate();

  //getUsers
  const getUsersAPI = useCallback(() => {
    setState({ loading: true, error: false });
    
    const post = async () => {
      try {
        
       // console.log('estoy pasando por aqui')

        const res = await getUsers();
        
        
        console.log(res.status)
        if (res.status === 200) {
          
          setUsers(res);

          toast.success('¡Usuarios cargados ✅!');
          setState({ loading: false, error: false });
        }
        if (res.status === 403){
          toast.warn('¡Sesión caducada!');
          navigate("/login");
        }
        
      } catch (err) {
        setState({ loading: false, error: true });
        console.error(err);
      }
    };
    post();
  }, [setUsers]);

  //creación de usuario
  const createUser = useCallback((data,vUsers) => {
    const post = async () => {
      try {
        data.password = '123456';
        data.movil = 123456
        const res = await registerUser(data);
        console.log(res.status);
        if (res.status === 201) {           
          toast.success('¡Usuario creado correctamente!');
          setUsers([...vUsers,res.data])
          setState({ loading: false, error: false });   
        }
      } catch (err) {        
        setState({ loading: false, error: true });
        console.error(err);
      }
    };
    post();
  }, []);

  //actualización de usuario
  const updateExistUser = useCallback((data,vUsers) => {
    const post = async () => {
      try {
        
        const res = await updateUser(data._id,data);

        if (res.status === 200) {           
          
          let newUsers = vUsers.map(el => el._id === res.data._id ? res.data : el);
          setUsers(newUsers);
          toast.success('¡Usuario actualizado correctamente!');
          setState({ loading: false, error: false });   
        }
      } catch (err) {        
        setState({ loading: false, error: true });
        console.error(err);
      }
    };
    post();
  }, []);

  //eliminación de usuario
  const deleteUser = useCallback((_id) => {
    const post = async () => {
      try {
        const res = await deleteUserById(_id);
        console.log(res.status);
        if (res.status === 204) {           
          toast.success(`Usuario con ${_id} borrado`);
          setState({ loading: false, error: false });  
        }
      } catch (err) {        
        setState({ loading: false, error: true });
        console.error(err);
      }
    };
    post()
  }, []);


  //ejercicios
  const getExercisesAPI = useCallback(() => {
    setState({ loading: true, error: false });
    
    const post = async () => {
      try {
        
       // console.log('estoy pasando por aqui')

        const res = await getExercises();
        
        
        console.log(res.status)
        if (res.status === 200) {
          
          setExercises(res);

          toast.success('¡Ejercicios cargados ✅!');
          setState({ loading: false, error: false });
        }
        if (res.status === 403){
          toast.warn('¡Sesión caducada!');
          navigate("/login");
        }
        
      } catch (err) {
        setState({ loading: false, error: true });
        console.error(err);
      }
    };
    post();
  }, [setExercises]);

  //creación de usuario
  const createExercise = useCallback((data,vExercises) => {
    const post = async () => {
      try {

        const res = await registerExercise(data);
        console.log(res.status);
        if (res.status === 201) {    
          setExercises([...vExercises,res.data])
          toast.success('Ejercicio creado correctamente!');
          setState({ loading: false, error: false });   
        }
      } catch (err) {        
        setState({ loading: false, error: true });
        console.error(err);
      }
    };
    post();
  }, []);

  //actualización de ejercicio
  const updateExercise = useCallback((data,vExercises) => {
    const post = async () => {
      try {
        
        const res = await updateExerciseByID(data._id,data);

        if (res.status === 200) {     
          
          let newExercises = vExercises.map(el => el._id === res.data._id ? res.data : el);
          
          setExercises(newExercises);
          toast.success('Ejercicio actualizado correctamente!');
          setState({ loading: false, error: false });   
        }
      } catch (err) {        
        setState({ loading: false, error: true });
        console.error(err);
      }
    };
    post();
  }, []);

   //eliminación de usuario
   const deleteExercise = useCallback((_id) => {
    const post = async () => {
      try {
        const res = await deleteExerciseById(_id);
        console.log(res.status);
        if (res.status === 204) {           
          toast.success(`Ejercicio con ${_id} borrado`);
          setState({ loading: false, error: false });  
        }
      } catch (err) {        
        setState({ loading: false, error: true });
        console.error(err);
      }
    };
    post()
  }, []);
  

  return {
    getUsersAPI,
    createUser,
    updateExistUser,
    deleteUser,
    getExercisesAPI,
    createExercise,
    updateExercise,
    deleteExercise,
    loadingAuth: state.loading,
    hashError: state.error
  };
}

export default useAdmin;
