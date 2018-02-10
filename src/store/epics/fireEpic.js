import {
    FIRE_SIGNUP, FIRE_SIGNUP_SUCCESS, FIRE_SIGNUP_FAILURE,
    FIRE_LOGIN, FIRE_LOGIN_SUCCESS, FIRE_LOGIN_FAILURE,
} from '../constants'
import 'rxjs';
import { Observable, dispatch } from 'rxjs';
import { ActionsObservable } from 'redux-observable';
import { HttpService } from './../../services/http';
import Path from './../../config/path';
import * as firebase from 'firebase';
import config from '../../config/firebaseConfig';
firebase.initializeApp(config);
//** Epic Middlewares For Auth **//
export default class FireEpic {

    //Epic middleware for login
    static signinEpic = (action$) =>
    action$.ofType(FIRE_LOGIN)
        .switchMap(({payload}) => {
            return Observable.fromPromise(firebase.auth().signInWithEmailAndPassword(payload.email, payload.password))
                .catch(err => {
                    console.log('err ', err)
                    return Observable.of(err);
                })
                .switchMap((d) => {
                    console.log('d login ecpis', d)
                    if (d.message) {
                        // error
                        return Observable.of({
                            type: FIRE_LOGIN_FAILURE,
                            payload: d.message
                        });
                    } else {
                        return Observable.fromPromise(firebase.database().ref('/').child(`users/${d.uid}`).once('value'))
                            .map(u => {
                                //set local storage
                                localStorage.setItem('user', JSON.stringify(u.val()));
                                return {
                                    type: FIRE_LOGIN_SUCCESS,
                                    payload: u.val()
                                }
                            })
                    }
                })
        })


    //Epic middleware for signup
    static signupEpic = (action$) =>
        action$.ofType(FIRE_SIGNUP)
            .switchMap(({ payload }) => {
                return Observable.fromPromise(
                    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                )
                .catch((err) => {
                    return {
                        type:FIRE_SIGNUP_FAILURE,
                        payload:err.message
                    }
                })
                .map((d) =>{
                    console.log("signup epic",d)
                    if(d.type === FIRE_SIGNUP_FAILURE){
                        return d;
                    }

                    delete payload.password;
                    let user = {
                        uid: d.uid,
                        email: payload.email,
                        username: payload.username,
                    };
                    firebase.database().ref('/').child(`users/${d.uid}`).set(user);
                    console.log('user created suucessfully!')
                    return {
                        type: FIRE_SIGNUP_SUCCESS,
                        payload: user
                    }
                })
            })
}