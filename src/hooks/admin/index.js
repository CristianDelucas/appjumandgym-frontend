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
      setState({ loading: true, error: false });
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
  const createUser = useCallback((data) => {
    const post = async () => {
      try {
        setState({ loading: true, error: false });
        data.password = '123456';
        data.movil = 123456
        const res = await registerUser(data);

        if (res.status === 201) {           
          toast.success('¡Usuario creado correctamente!');
          setUsers(users=> [...users,res.data])
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
  const updateExistUser = useCallback((data) => {
    const post = async () => {
      try {
        setState({ loading: true, error: false });
        const res = await updateUser(data._id,data);

        if (res.status === 200) {   

          setUsers(users => users.map(el => el._id === res.data._id ? res.data : el));
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
    setState({ loading: true, error: false });
    const post = async () => {
      try {
        
        const res = await deleteUserById(_id);

        if (res.status === 204) {           
          toast.success(`Usuario con ${_id} borrado`);
          setUsers(users => users.filter(el => el._id !== _id))
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
  }, []);

  //creación de usuario
  const createExercise = useCallback((data) => {
    const post = async () => {
      try {
        setState({ loading: true, error: true });
        console.log('creando ejercicio')
        const res = await registerExercise(data);
        console.log(res.status);
        if (res.status === 201) {    
          setExercises(exercises => [...exercises,res.data])
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
  const updateExercise = useCallback((data) => {
    const post = async () => {
      try {
        
        const res = await updateExerciseByID(data._id,data);

        if (res.status === 200) {     
          
          setExercises(exercises => exercises.map(el => el._id === res.data._id ? res.data : el));
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

   //eliminación de ejercicio
   const deleteExercise = useCallback((_id) => {
    const post = async () => {
      try {
        const res = await deleteExerciseById(_id);
        console.log(res.status);
        if (res.status === 204) {           
          toast.success(`Ejercicio con ${_id} borrado`);
          setExercises(exercises => exercises.filter(el => el._id !== _id))
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
