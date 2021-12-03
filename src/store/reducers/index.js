import * as type from '../type'

const initialState={
    userData:{}
}

export default function reducer(state=initialState,action){
    switch(action.type){
        case type.SIGNUP:
            return{
                ...state,
                userData: action.payload
            };
            default:
                return state;
    }
}