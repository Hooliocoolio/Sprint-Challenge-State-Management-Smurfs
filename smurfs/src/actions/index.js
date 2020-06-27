import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const LOAD_SMURFS_OK = 'LOAD_SMURFS_OK'
export const ADD_SMURF = 'ADD_SMURF';
export const SMURF_ERR0R = 'SMURF_ERROR';
//-----------------------------------------------------------------------------
// TODO: ADD DELETE_SMURF AND EDIT SMURF 
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
// Api Call
//-----------------------------------------------------------------------------
    export const getSmurfs = (dispatch) => {
         dispatch({ type: FETCH_SMURFS });
            axios
                .get("http:localhost:3333/smurfs")
                .then(res => {
                    console.log( 'Results', res.data );
                    dispatch({ type: LOAD_SMURFS_OK, payload: res.data })
                })
                .catch(err => {
                    console.log(err);
                // dispatch({ type: SMURF_ERROR, payload: err })
                })
        }
