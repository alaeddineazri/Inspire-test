import { GET_ALL_CANDIDATES_FAILED, GET_ALL_CANDIDATES_LOADING, GET_ALL_CANDIDATES_SUCCESS } from "./CandidatsTypes"

export const getAllCandidates = () => async dispatch => {
    dispatch({ type: GET_ALL_CANDIDATES_LOADING })
    try {
        dispatch({
            type: GET_ALL_CANDIDATES_SUCCESS,
        })
    } catch (err) {
        dispatch({
            type: GET_ALL_CANDIDATES_FAILED,
            payload: err.response.data.errors

        })
    }
}