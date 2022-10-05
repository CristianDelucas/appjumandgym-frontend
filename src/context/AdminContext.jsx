import {  createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getUsers } from "../_shared/Api/ApiUser";
import { getExercises } from "../_shared/Api/Exercise/ApiExercise";

export const AdminContext = createContext({});



export const AdminProvider = ( { children } ) =>{

    //recoger estas variables en una misma
    const [users, setUsers] = useState([]);
    const [exercises, setExercises] = useState([]);
    const [routines, setRoutines] = useState([]);
    const navigate = useNavigate();
    const removeAdminProvider = () =>{

        setUsers([]);
        setExercises([]);
        setRoutines(undefined);

    }


    const getUsersProvider = async () => {

      try{

            const res = await getUsers();
          if (res.request.status === 200) {
            setUsers(res.data);
          }
          if (res.request.status === 403){
              removeAdminProvider();
              navigate('/login')
      }
      }catch(error){
      }
    };
    const getExercisesProvider = async () => {

      try{

            const res = await getExercises();
          if (res.request.status === 200) {
            setExercises(res.data);
          }
          if (res.request.status === 403){
              removeAdminProvider();
              navigate('/login')
      }
      }catch(error){
      }
    };

    useEffect(() => {
      getUsersProvider();
        getExercisesProvider();
      }, []);


    return(
        <AdminContext.Provider 
        value={{
                users,
                setUsers,
                exercises,
                setExercises,
                routines,
                setRoutines,
                removeAdminProvider
               }}>
            {children}
        </AdminContext.Provider>
    )
}