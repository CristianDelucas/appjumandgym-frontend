import { useReducer } from "react"

const ACTIONS = {
    SET_USERS: 'set_users',
    ADD_USER: 'add_users',
    UPDATE_USER: 'update_user',
    DELETE_USER: 'delete_users',

    SET_EXERCISES: 'set_exercises',
    ADD_EXERCISE: 'add_exercise',
    UPDATE_EXERCISE: 'update_exercise',
    DELETE_EXERCISE: 'delete_exercise',

    SET_ROUTINES: 'set_routines',
    ADD_ROUTINE: 'add_routine',
    UPDATE_ROUTINE: 'update_routine',
    DELETE_ROUTINE: 'delete_routine',
}

const ACTIONS_REDUCERS = {

    [ACTIONS.SET_USERS]: (state,action) =>({
            ...state,
            users: action.payload,
    }),
    [ACTIONS.ADD_USER]: (state,action) =>({
        ...state,
        users: [...state.users,action.payload]
    }),
    [ACTIONS.UPDATE_USER]: (state,action) =>({
        ...state,
        users: state.users.map((el) => (el._id === action.payload._id ? action.payload : el))
    }),
    [ACTIONS.DELETE_USER]: (state,action) =>({
        ...state,
        users: state.users.filter((el) => el._id !== action.payload),
    }),

    [ACTIONS.SET_EXERCISES]: (state,action) =>({
        ...state,
        exercises: action.payload,
    }),
    [ACTIONS.ADD_EXERCISE]: (state,action) =>({
        ...state,
        exercises: [...state.exercises,action.payload]
    }),
    [ACTIONS.UPDATE_EXERCISE]: (state,action) =>({
        ...state,
        exercises: state.exercises.map((el) => (el._id === action.payload._id ? action.payload : el))
    }),
    [ACTIONS.DELETE_EXERCISE]: (state,action) =>({
        ...state,
        exercises: state.exercises.filter((el) => el._id !== action.payload),
    }),

    [ACTIONS.SET_ROUTINES]: (state,action) =>({
        ...state,
        routines: action.payload,
    }),
    [ACTIONS.ADD_ROUTINE]: (state,action) =>({
        ...state,
        routines: [...state.routines,action.payload]
    }),
    [ACTIONS.UPDATE_ROUTINE]: (state,action) =>({
        ...state,
        routines: state.routines.map((el) => (el._id === action.payload._id ? action.payload : el))
    }),
    [ACTIONS.DELETE_ROUTINE]: (state,action) =>({
        ...state,
        routines: state.routines.filter((el) => el._id !== action.payload),
    }),
    
}

const REDUCER = (state, action) =>{

    const actionReducer = ACTIONS_REDUCERS[action.type]
        return actionReducer ? actionReducer(state,action): state;
    // switch(action.type){
    //     case ACTIONS.UPDATE_USER: 
    //         return {
    //             ...state,
    //             users: action.payload,
    //         }
    //     case ACTIONS.SET_USER:
    //         return {
    //             ...state,
    //             users: action.payload,
    //         }
    //         default:
    //             return state;
    // }
}


export default function useReducerAdmin(){

    const [state, dispatch] = useReducer(REDUCER,{
        users: [],
        exercises:[],
        routines:[]
    })

    const {users,exercises,routines} = state

    return{
        users,
        routines,
        exercises,
        _setUsers: users => 
            dispatch({type: ACTIONS.SET_USERS, payload: users}),
        _addUser: user => 
            dispatch({type: ACTIONS.ADD_USER, payload: user}),  
        _updateUser: user => 
            dispatch({type: ACTIONS.UPDATE_USER, payload: user}),
        _deleteUser: id => 
            dispatch({type: ACTIONS.DELETE_USER, payload: id}),
        _setExercises: exercises => 
            dispatch({type: ACTIONS.SET_EXERCISES, payload: exercises}),
        _addExercise: exercise => 
            dispatch({type: ACTIONS.ADD_EXERCISE, payload: exercise}),  
        _updateExercise: exercise => 
            dispatch({type: ACTIONS.UPDATE_EXERCISE, payload: exercise}),
        _deleteExercise: id => 
            dispatch({type: ACTIONS.DELETE_EXERCISE, payload: id}),
        _setRoutines: routines => 
            dispatch({type: ACTIONS.SET_ROUTINES, payload: routines}),
        _addRoutine: routine => 
            dispatch({type: ACTIONS.ADD_ROUTINE, payload: routine}),  
        _updateRoutine: routine => 
            dispatch({type: ACTIONS.UPDATE_ROUTINE, payload: routine}),
        _deleteRoutine: id => 
            dispatch({type: ACTIONS.DELETE_ROUTINE, payload: id}),
        
    }

}

