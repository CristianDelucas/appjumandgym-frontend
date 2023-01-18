import { useReducer } from "react"

const ACTIONS = {
    UPDATE_USER: 'update_user',
    SET_USER: 'set_user',
    UPDATE_ROUTINE:'update_routine',
    SET_ROUTINE:'set_routine'
}

const ACTIONS_REDUCERS = {
    [ACTIONS.SET_USER]: (state,action) =>({
        ...state,
        user: action.payload,
    }),
    [ACTIONS.UPDATE_USER]: (state,action) =>({
            ...state,
            user: action.payload,
    }),
    [ACTIONS.SET_ROUTINE]: (state,action) =>({
        ...state,
        routine: action.payload,
    }),
    [ACTIONS.UPDATE_ROUTINE]: (state,action) =>({
        ...state,
        routine: action.payload,
    })
}

const REDUCER = (state, action) =>{

    const actionReducer = ACTIONS_REDUCERS[action.type]
        return actionReducer ? actionReducer(state,action): state;
}


export default function useUser(){

    const [state, dispatch] = useReducer(REDUCER,{
        user: null,
        routine:null
    })

    const {user,routine} = state

    return{
        user,
        routine,
        updateUser: user => 
            dispatch({type: ACTIONS.UPDATE_USER, payload: user}),
        setUser: user => 
            dispatch({type: ACTIONS.SET_USER, payload: user}),
        updateRoutine: routine => 
            dispatch({type: ACTIONS.UPDATE_ROUTINE, payload: routine}),
        setRoutine: routine => 
            dispatch({type: ACTIONS.SET_ROUTINE, payload: routine}),
        
    }

}

