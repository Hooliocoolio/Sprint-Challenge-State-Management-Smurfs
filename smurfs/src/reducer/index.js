import { LOAD_SMURFS_OK } from '../actions';
import { ADD_SMURF } from '../actions/index';

const initialState = {
    smurfs : [],
    isFetching: false,
    error:''
};

export const reducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case LOAD_SMURFS_OK:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
       
        case ADD_SMURF:
            console.log(ADD_SMURF); 
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ''
            };
        default:
            return state; 
    }
}