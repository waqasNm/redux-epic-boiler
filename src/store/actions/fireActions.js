import {
    FIRE_SIGNUP, FIRE_SIGNUP_SUCCESS, FIRE_SIGNUP_FAILURE,
    FIRE_LOGIN, FIRE_LOGIN_SUCCESS, FIRE_LOGIN_FAILURE,
    LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE
} from '../constants'

export default class FireActions {

    static signup(user) {
        return {
            type: FIRE_SIGNUP,
            payload: user
        }
    }

    static signupSuccess(data) {
        return {
            type: FIRE_SIGNUP_SUCCESS,
            payload: data
        }
    }

    static signupFailure(error) {
        return {
            type: FIRE_SIGNUP_FAILURE,
            error: error
        }
    }

    static signin(user) {
        return {
            type: FIRE_LOGIN,
            payload: user
        }
    }

    static signinSuccess(data) {
        return {
            type: FIRE_LOGIN_SUCCESS,
            payload: data
        }
    }

    static signinFailure(error) {
        return {
            type: FIRE_LOGIN_FAILURE,
            error: error
        }
    }

    static logout() {
        return {
            type: LOGOUT
        }
    }

    static logoutSuccess() {
        return {
            type: LOGOUT_SUCCESS
        }
    }

    static logoutFailure(error) {
        return {
            type: LOGOUT_FAILURE,
            error: error
        }
    }
}