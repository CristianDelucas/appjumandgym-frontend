import { useCallback } from "react";
import {  createContext, useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import {  logoutUserExpired } from "../_shared/Api/ApiLogout";
import { getUsersAndExercises } from "../_shared/Api/AxiosAll/AxiosAll";

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

    const getUsersAndExercisesProvider = useCallback(() =>{
      const post = async () =>{
        const {_users,_exercises,_routines,status} = await getUsersAndExercises();

        console.log(_exercises)

        if(status === 200){
          setUsers(_users);
          setExercises(_exercises);
          setRoutines(_routines);
        }
        if(status === 403){
          removeAdminProvider();
            await logoutUserExpired();
            navigate('/login')
        }

      }
      post();
    },[navigate])

    useEffect(() => {
      getUsersAndExercisesProvider()
      }, [getUsersAndExercisesProvider]);


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