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
            routines: [...state.routines,action.payload],
    }),
    [ACTIONS.ADD_USER]: (state,action) =>({
        ...state,
        routines: action.payload,
    }),
    [ACTIONS.UPDATE_USER]: (state,action) =>({
        ...state,
        routines: action.payload,
    }),
    [ACTIONS.DELETE_USER]: (state,action) =>({
        ...state,
        routines: action.payload,
    }),
    [ACTIONS.SET_ROUTINES]: (state,action) =>({
        ...state,
        routines: action.payload,
    }),
    [ACTIONS.DELETE_ROUTINE]: (state,action) =>({
        ...state,
        routines: state.routines.filter((el) => el.action.payload !== action.payload),
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
        routines:[]
    })

    const {users,routines} = state

    return{
        users,
        routines,
        updateUser: user => 
            dispatch({type: ACTIONS.UPDATE_USER, payload: user}),
        setUser: user => 
            dispatch({type: ACTIONS.SET_USER, payload: user}),
        updateRoutine: routine => 
            dispatch({type: ACTIONS.UPDATE_ROUTINE, payload: routine}),
        setRoutines: routines => 
            dispatch({type: ACTIONS.SET_ROUTINES, payload: routines}),
        deleteRoutine: id => 
            dispatch({type: ACTIONS.SET_ROUTINES, payload: id}),
        
    }

}

