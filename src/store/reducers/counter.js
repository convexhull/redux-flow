import * as actionTypes from '../../store/actions/actionTypes/actionTypes'
import {updateObject} from '../utils';

const initialState = {
    counter : 0
}

const reducer = (state = initialState , action ) => {


    switch(action.type){
        case actionTypes.INCREMENT:
            return updateObject(state, { counter : state.counter + 1})
        case actionTypes.DECREMENT:
            return updateObject(state, { counter : state.counter - 1})
        case actionTypes.ADD:
            return updateObject(state, { counter : state.counter + action.value})
        case actionTypes.SUB:
            return updateObject(state, { counter : state.counter - action.value})
    }   
    return state;
}



export default reducer;