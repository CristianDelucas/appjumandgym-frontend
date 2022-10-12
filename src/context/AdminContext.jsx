import { useCallback } from "react";
import {  createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { logoutUser } from "../_shared/Api/ApiLogout";
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

        setUsers(users=>[]);
        setExercises(exercises=>[]);
        setRoutines(routines=>[]);

    }


    const getUsersProvider = useCallback(async () => {

      try{
            const res = await getUsers();
            console.log(res)
          if (res.request.status === 200) {
            setUsers(res.data);
          }
          if (res.request.status === 403 || undefined){
              removeAdminProvider();
              await logoutUser();
              navigate('/login')
      }
      }catch(error){
      }
    },[navigate]);
    const getExercisesProvider = useCallback(async () => {

      try{

            const res = await getExercises();
          if (res.request.status === 200) {
            setExercises(res.data);
          }
          if (res.request.status === 403 || undefined){
              removeAdminProvider();
              await logoutUser();
              navigate('/login')
            }
      }catch(error){
      }
    },[navigate]);

    useEffect(() => {
        getUsersProvider();
        getExercisesProvider();
      }, [getUsersProvider,getExercisesProvider]);


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