import axios from 'axios'
import {SIGNUP} from '../type'

const handlePostUserData=(data)=>({
    type:SIGNUP,
    payload:data
})

export const postUserData=(body)=>{
    return (dispatch,getState) => {
    axios.post('http://localhost:1109/userPostData',body).then((response)=>{
        console.log(response);
        dispatch(handlePostUserData(response));
    }).catch((error)=>{
        console.log(error);
    })
}
}