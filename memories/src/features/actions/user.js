import * as type from '../types'

export const registerUser = (user) => {
    return {
        type: type.CREATE_USER,
        payload:user
    }
}
export const userLogin = (user) => {
    return {
        type: type.USER_LOGIN,
        payload:user
    }
}
export const Logout = (user) => {
    return {
        type: type.LOGOUT,
    }
}

