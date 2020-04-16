import * as actionTypes from '../actionTypes/actionTypes';


const saveResult = (payload) => {
    return {
        type : actionTypes.STORE_RESULT,
        result : payload
    }
}

export const storeResult = (payload) => {
    return (dispatch) =>  {
        setTimeout(() => {
            dispatch(saveResult(payload));
        },2000);  
    }
}

export const deleteResult = (payload) => {
    return {
        type : actionTypes.DELETE_RESULT,
        payload : {
            id : payload
        }
    }
}