import { request, success, failure } from './../dispatcher'
import { authConstants } from './../constants'

export const authenticate = () => {
    return dispatch => {
        dispatch(request(authConstants.AUTH_REQUEST));
        return () => {
            dispatch(success(authConstants.AUTH_SUCCESS));
            Promise.resolve()
        }
    }
}