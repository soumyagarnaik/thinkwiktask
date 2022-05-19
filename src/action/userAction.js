import {USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,USER_LOGOUT,
    USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_REGISTER_FAIL,
    } from '../constants/userConstants'

    const userData = [
       {
         "name":'Raj Singh',
         "email":"raj@example.com",
         "userName":'raj035',
         "password":"raj123"
        }
    ]

    export const login = (userName, password) =>  (dispatch) => {
        try {
          dispatch({
            type: USER_LOGIN_REQUEST,
          })

          const data = userData.find(data => data.userName === userName && data.password === password)
      
          dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
          })
      
          localStorage.setItem('userInfo', JSON.stringify(data))
        } catch (error) {
          dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response
          })
        }
      }
      
      export const logout = () => (dispatch) => {
        localStorage.removeItem('userInfo')
        dispatch({ type: USER_LOGOUT })
        document.location.href = '/login'
      }
      
      export const register = (userName, email, password) =>  (dispatch) => {
        try {
          dispatch({
            type: USER_REGISTER_REQUEST,
          })
      
          const data = userData.find(data => data.userName === userName && data.email === email && data.password === password )

      
          dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data,
          })
      
          dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
          })
      
          localStorage.setItem('userInfo', JSON.stringify(data))
        } catch (error) {
          dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response
          })
        }
      }
      