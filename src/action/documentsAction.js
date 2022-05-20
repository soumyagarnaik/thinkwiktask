import {DOCUMENT_LIST_REQUEST,DOCUMENT_LIST_SUCCESS,DOCUMENT_LIST_FAIL,
DOCUMENT_DETAILS_REQUEST,DOCUMENT_DETAILS_SUCCESS,DOCUMENT_DETAILS_FAIL} from '../constants/documentConstants'
import Documents from '../data/Documents.json'

export const getDocuments = () => async (
    dispatch
  ) => {
    try {
      dispatch({ type: DOCUMENT_LIST_REQUEST })
  
      const data  = Documents
  
      dispatch({
        type: DOCUMENT_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: DOCUMENT_LIST_FAIL,
        payload: error.response 
      })
    }
  }

  export const listProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: DOCUMENT_DETAILS_REQUEST })
  
      const data = Documents.find(data => data.id === id) 
  
      dispatch({
        type: DOCUMENT_DETAILS_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: DOCUMENT_DETAILS_FAIL,
        payload: error.response
      })
    }
  }