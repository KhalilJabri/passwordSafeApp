import axios from 'axios';

import { link } from '../link';

export const LOGIN = 'LOGIN'
export const REGISTER = 'REGISTER'
export const LOGOUT = 'LOGOUT'
export const MODIFY_PROFILE = 'MODIFY_PROFILE'
export const RESET_PASSWORD = 'RESET_PASSWORD'
export const SET_CODE = 'SET_CODE'

export const register = (email, name, phone, password) => {
    return async dispatch => {
        // try {
            // const response = await axios.post(`${link}/account/register/`, {
            //     email: email,
            //     name: name,
            //     // numero: phone,
            //     password: password,
            //     password2: password
            // }, {
            //     headers: {
            //         'Content-Type': 'application/json',
            //     }
            // })
            const response = await fetch(`${link}/account/register/`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        name: name,
                        password: password,
                        password2: password
                        // returnSecureToken: true
                    })
                });

            if(response.status === 404) {
                throw new Error('problem')
            }
            console.log('zzzzz');
            console.log(response.status);
            // dispatch({type: REGISTER})
            // return response.data;

        // } catch (err){
        // // //     console.log(err.response.data['message']);
        //     // const msg = err.response.data['message'];
        // // //     // console.log(typeof(msg));
        //     throw err
        // // console.log('aaaaaa');
        // // console.log(err.response.status);
        // }
    }
}

export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${link}/account/login/`, {
                email: email,
                password: password
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    // 'Authorization': `Bearer ${token}`
                }
            })
            // console.log(response);
            // dispatch({ type: LOGIN, })

        } catch (err) {
            throw new Error(err.response.data['message']);
        }
    }
}
