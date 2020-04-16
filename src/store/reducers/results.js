import * as actionTypes from '../../store/actions/actionTypes/actionTypes';
import {updateObject} from '../utils';

const initialState = {
    results : []
}

const reducer = (state = initialState , action ) => {


    switch(action.type){
        case actionTypes.STORE_RESULT:
            let results = [...state.results];
            results.push({id : new Date(), value : action.result});
            return updateObject(state, {results})
        case actionTypes.DELETE_RESULT:
            let res = [...state.results];
            return updateObject(state, {results : res.filter((el) => el.id !== action.payload.id)})
    }   
    return state;
}



export default reducer;