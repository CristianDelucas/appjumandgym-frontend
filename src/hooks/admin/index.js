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
  updateImageExerciseByID,
} from "../../_shared/Api/Exercise/ApiExercise";
import { deleteRoutineById, registerRoutine, updateRoutineByID } from "../../_shared/Api/Routine/ApiRoutine";
import { logoutUser } from "../../_shared/Api/Auth/ApiAuth";

function useAdmin() {
  const [state, setState] = useState({ loading: false, error: false });

  const {
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
    removeAdminProvider,
  } = useContext(AdminContext);

  const navigate = useNavigate();

  //getUsers
  const getUsersAPI = useCallback(() => {
    setState({ loading: true, error: false });

    const post = async () => {
      try {
        // console.log('estoy pasando por aqui')

        const {data,status} = await new Promise(getUsers());

        console.log("hola");
        console.log(status);
        if (status === 200) {
         _setUsers(data);

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
  }, [_setUsers, navigate, removeAdminProvider]);

  //creación de usuario
  const createUser = useCallback(
    (_data) => {
      const post = async () => {
        try {
          setState({ loading: true, error: false });
          //modificar
          _data.password = "123456";
          _data.movil = 123456;
          const {data,status} = await new Promise(registerUser(_data));

          if (status === 201) {
            _addUser(data);
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
    [navigate, _addUser, removeAdminProvider]
  );

  //actualización de usuario
  const updateExistUser = useCallback(
    (_data) => {
      const post = async () => {
        try {
          setState({ loading: true, error: false });
          const {data,status} = await updateUser(_data._id, _data);

          if (status === 200) {
            _updateUser(data)
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
    [navigate, _updateUser, removeAdminProvider]
  );

  //eliminación de usuario
  const deleteUser = useCallback(
    (_id) => {
      setState({ loading: true, error: false });
      const post = async () => {
        try {
          const {status} = await deleteUserById(_id);

          if (status === 204) {
            _deleteUser(_id);
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
    [navigate, _deleteUser, removeAdminProvider]
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
          _setExercises(data);

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
  }, [navigate,_setExercises,removeAdminProvider]);

  //creación de usuario
  const createExercise = useCallback((_data) => {
    const post = async () => {
      try {
        setState({ loading: true, error: true });
        console.log("creando ejercicio");
        const {data,status} = await registerExercise(_data);
        console.log(status);
        if (status === 201) {
          _addExercise(data);
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
  }, [navigate,_addExercise,removeAdminProvider]);

  //actualización de ejercicio
  const updateExercise = useCallback((_data) => {
    const post = async () => {
      try {
        const {data,status} = await updateExerciseByID(_data._id, _data);

        if (status === 200) {
          _updateExercise(data);

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
  }, [navigate,_updateExercise,removeAdminProvider]);


   //actualización imagen ejercicio
   const updateImageExercise = useCallback((_data) => {
    const post = async () => {
      try {
        const {data,status} = await updateImageExerciseByID(_data._id);

        if (status === 200) {
          _updateExercise(data)

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
  }, [navigate,_updateExercise,removeAdminProvider]);

  //eliminación de ejercicio
  const deleteExercise = useCallback((_id) => {
    const post = async () => {
      try {
        const {status} = await deleteExerciseById(_id);
        console.log(status);
        if (status === 204) {
          _deleteExercise(_id);
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
  }, [navigate,_deleteExercise,removeAdminProvider]);


  //creación de rutina
  const createRoutine = useCallback(
    (_data) => {
      const post = async () => {
        try {
          setState({ loading: true, error: false });
          //modificar
          const {data,status} = await registerRoutine(_data);

          if (status === 201) {
            _addRoutine(data);
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
    [navigate,_addRoutine ,removeAdminProvider]
  );

  const updateRoutine = useCallback((_data) => {
    const post = async () => {
      try {
        console.log('editando')
        const {data,status} = await updateRoutineByID(_data._id, _data);

        if (status === 200) {
          // setRoutines((routines) =>
          //   routines.map((el) => (el._id === data._id ? data : el))
          // );
          _updateRoutine(data);
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
  }, [navigate,_updateRoutine,removeAdminProvider]);

    //eliminación de rutina
    const deleteRoutine = useCallback((_id) => {
      const post = async () => {
        try {
          const {status} = await deleteRoutineById(_id);
          
          if (status === 204) {

            _deleteRoutine(_id)

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
    }, [navigate,_deleteRoutine,removeAdminProvider]);


  return {
    getUsersAPI,
    createUser,
    updateExistUser,
    deleteUser,
    getExercisesAPI,
    createExercise,
    updateExercise,
    updateImageExercise,
    deleteExercise,
    createRoutine,
    updateRoutine,
    deleteRoutine,
    loadingAuth: state.loading,
    hashError: state.error,
  };
}

export default useAdmin;
