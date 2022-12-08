import { useCallback } from "react";
import {  createContext, useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import useReducerAdmin from "../hooks/useReducerAdmin";
import { logoutUserExpired } from "../_shared/Api/Auth/ApiAuth";
import {  getUsersExercisesRoutines } from "../_shared/Api/AxiosAll/AxiosAll";

export const AdminContext = createContext({});



export const AdminProvider = ( { children } ) =>{

    //recoger estas variables en una misma
    //const [users, setUsers] = useState([]);
    //const [exercises, setExercises] = useState([]);
    //const [routines, setRoutines] = useState([]);

    const {
      users,
      exercises,
      routines,
      _setUsers,
      _addUser,
      _updateUser,
      _deleteUser,
      _setExercises,
      _addExercise,
      _updateExercise,
      _deleteExercise,
      _setRoutines,
      _updateRoutine,
      _deleteRoutine,
      _addRoutine
    } = useReducerAdmin();
    const navigate = useNavigate();
    const removeAdminProvider = () =>{

        _setUsers([]);
        _setExercises([]);
        _setRoutines([]);

    }

    const getUsersAndExercisesRoutinesProvider = useCallback(() =>{
      const post = async () =>{
        const {_users,_exercises,_routines,status} = await getUsersExercisesRoutines();

        console.log(_exercises)

        if(status === 200){
          _setUsers(_users);
          _setExercises(_exercises);
          _setRoutines(_routines);
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
      getUsersAndExercisesRoutinesProvider()
      }, [getUsersAndExercisesRoutinesProvider]);


    return(
        <AdminContext.Provider 
        value={{
          users,
          exercises,
          routines,
          
          _setUsers,
          _addUser,
          _updateUser,
          _deleteUser,
          _setExercises,
          _addExercise,
          _updateExercise,
          _deleteExercise,
          _updateRoutine,
          _deleteRoutine,
          _addRoutine,
                
          removeAdminProvider
               }}>
            {children}
        </AdminContext.Provider>
    )
}