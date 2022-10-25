import { useContext } from "react";
import { useCallback, useState } from "react";
import {
  deleteUserById,
  getUsers,
  registerUser,
  updateUser,
} from "../../_shared/Api/ApiUser";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AdminContext } from "../../context/AdminContext";
import {
  deleteExerciseById,
  getExercises,
  registerExercise,
  updateExerciseByID,
} from "../../_shared/Api/Exercise/ApiExercise";
import { logoutUser } from "../../_shared/Api/ApiLogout";
import { deleteRoutineById, registerRoutine, updateRoutineByID } from "../../_shared/Api/Routine/ApiRoutine";

function useAdmin() {
  const [state, setState] = useState({ loading: false, error: false });

  const {
    users,
    setUsers,
    exercises,
    setExercises,
    setRoutines,
    addUserState,
    removeAdminProvider,
  } = useContext(AdminContext);

  const navigate = useNavigate();

  //getUsers
  const getUsersAPI = useCallback(() => {
    setState({ loading: true, error: false });

    const post = async () => {
      try {
        // console.log('estoy pasando por aqui')

        const {data,status} = await getUsers();

        console.log("hola");
        console.log(status);
        if (status === 200) {
          setUsers(data);

          toast.success("¡Usuarios cargados ✅!");
          setState({ loading: false, error: false });
        }
        //sesión caducada
        if (status === 403) {
          await logoutUser();
          removeAdminProvider();
          navigate("/login");
        }
      } catch (err) {
        setState({ loading: false, error: true });
        console.error(err);
      }
    };
    post();
  }, [setUsers, navigate, removeAdminProvider]);

  //creación de usuario
  const createUser = useCallback(
    (_data) => {
      const post = async () => {
        try {
          setState({ loading: true, error: false });
          //modificar
          _data.password = "123456";
          _data.movil = 123456;
          const {data,status} = await registerUser(_data);

          if (status === 201) {
            setUsers((users) => [...users, data]);
            setState({ loading: false, error: false });
          }
          //sesión caducada
          if (status === 403) {
            await logoutUser();
            removeAdminProvider();
            navigate("/login");
          }
        } catch (err) {
          setState({ loading: false, error: true });
          console.error(err);
        }
      };
      post();
    },
    [navigate, setUsers, removeAdminProvider]
  );

  //actualización de usuario
  const updateExistUser = useCallback(
    (_data) => {
      const post = async () => {
        try {
          setState({ loading: true, error: false });
          const {data,status} = await updateUser(_data._id, _data);

          if (status === 200) {
            setUsers((users) =>
              users.map((el) => (el._id === data._id ? data : el))
            );
            setState({ loading: false, error: false });
          }
          //sesión caducada
          if (status === 403) {
            await logoutUser();
            removeAdminProvider();
            navigate("/login");
          }
        } catch (err) {
          setState({ loading: false, error: true });
          console.error(err);
        }
      };
      post();
    },
    [navigate, setUsers, removeAdminProvider]
  );

  //eliminación de usuario
  const deleteUser = useCallback(
    (_id) => {
      setState({ loading: true, error: false });
      const post = async () => {
        try {
          const {status} = await deleteUserById(_id);

          if (status === 204) {
            setUsers((users) => users.filter((el) => el._id !== _id));
            setState({ loading: false, error: false });
          }
          //sesión caducada
          if (status === 403) {
            await logoutUser();
            removeAdminProvider();
            navigate("/login");
          }
        } catch (err) {
          setState({ loading: false, error: true });
          console.error(err);
        }
      };
      post();
    },
    [navigate, setUsers, removeAdminProvider]
  );

  //ejercicios
  const getExercisesAPI = useCallback(() => {
    setState({ loading: true, error: false });

    const post = async () => {
      try {
        // console.log('estoy pasando por aqui')

        const {data,status} = await getExercises();

        console.log(status);
        if (status === 200) {
          setExercises(data);

          setState({ loading: false, error: false });
        }
        //sesión caducada
        if (status === 403) {
          await logoutUser();
          removeAdminProvider();
          navigate("/login");
        }
      } catch (err) {
        setState({ loading: false, error: true });
        console.error(err);
      }
    };
    post();
  }, [navigate,setExercises,removeAdminProvider]);

  //creación de usuario
  const createExercise = useCallback((_data) => {
    const post = async () => {
      try {
        setState({ loading: true, error: true });
        console.log("creando ejercicio");
        const {data,status} = await registerExercise(_data);
        console.log(status);
        if (status === 201) {
          setExercises((exercises) => [...exercises, data]);
          setState({ loading: false, error: false });
        }
        if (status === 403) {
          //sesión caducada
          await logoutUser();
          removeAdminProvider();
          navigate("/login");
        }
      } catch (err) {
        setState({ loading: false, error: true });
        console.error(err);
      }
    };
    post();
  }, [navigate,setExercises,removeAdminProvider]);

  //actualización de ejercicio
  const updateExercise = useCallback((_data) => {
    const post = async () => {
      try {
        const {data,status} = await updateExerciseByID(_data._id, _data);

        if (status === 200) {
          setExercises((exercises) =>
            exercises.map((el) => (el._id === data._id ? data : el))
          );

          setState({ loading: false, error: false });
        }
        if (status === 403) {
          //sesión caducada
          await logoutUser();
          removeAdminProvider();
          navigate("/login");
        }
      } catch (err) {
        setState({ loading: false, error: true });
        console.error(err);
      }
    };
    post();
  }, [navigate,setExercises,removeAdminProvider]);

  //eliminación de ejercicio
  const deleteExercise = useCallback((_id) => {
    const post = async () => {
      try {
        const {status} = await deleteExerciseById(_id);
        console.log(status);
        if (status === 204) {
          setExercises((exercises) => exercises.filter((el) => el._id !== _id));
          setState({ loading: false, error: false });
        }
        //sesión caducada
        if (status === 403) {
          await logoutUser();
          removeAdminProvider();
          navigate("/login");
        }
      } catch (err) {
        setState({ loading: false, error: true });
        console.error(err);
      }
    };
    post();
  }, [navigate,setExercises,removeAdminProvider]);


  //creación de rutina
  const createRoutine = useCallback(
    (_data) => {
      const post = async () => {
        try {
          setState({ loading: true, error: false });
          //modificar
          const {data,status} = await registerRoutine(_data);

          if (status === 201) {
            setRoutines((routines) => [...routines, data]);
            setState({ loading: false, error: false });
          }
          //sesión caducada
          if (status === 403) {
            await logoutUser();
            removeAdminProvider();
            navigate("/login");
          }
        } catch (err) {
          setState({ loading: false, error: true });
          console.error(err);
        }
      };
      post();
    },
    [navigate,setRoutines ,removeAdminProvider]
  );

  const updateRoutine = useCallback((_data) => {
    const post = async () => {
      try {
        console.log('editando')
        const {data,status} = await updateRoutineByID(_data._id, _data);

        if (status === 200) {
          setRoutines((routines) =>
            routines.map((el) => (el._id === data._id ? data : el))
          );

          setState({ loading: false, error: false });
        }
        if (status === 403) {
          //sesión caducada
          await logoutUser();
          removeAdminProvider();
          navigate("/login");
        }
      } catch (err) {
        setState({ loading: false, error: true });
        console.error(err);
      }
    };
    post();
  }, [navigate,setRoutines,removeAdminProvider]);

    //eliminación de rutina
    const deleteRoutine = useCallback((_id) => {
      const post = async () => {
        try {
          const {status} = await deleteRoutineById(_id);
          
          if (status === 204) {
            setRoutines((routines) => routines.filter((el) => el._id !== _id));
            setState({ loading: false, error: false });
          }
          //sesión caducada
          if (status === 403) {
            await logoutUser();
            removeAdminProvider();
            navigate("/login");
          }
        } catch (err) {
          setState({ loading: false, error: true });
          console.error(err);
        }
      };
      post();
    }, [navigate,setRoutines,removeAdminProvider]);


  return {
    getUsersAPI,
    createUser,
    updateExistUser,
    deleteUser,
    getExercisesAPI,
    createExercise,
    updateExercise,
    deleteExercise,
    createRoutine,
    updateRoutine,
    deleteRoutine,
    loadingAuth: state.loading,
    hashError: state.error,
  };
}

export default useAdmin;
