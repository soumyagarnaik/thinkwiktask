import { createStore, combineReducers,applyMiddleware } from 'redux'
import { userLoginReducer,userRegisterReducer } from './reducer/userReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
  }

  const middleware = [thunk]

const store = createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store