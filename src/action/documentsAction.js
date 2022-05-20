import {DOCUMENT_LIST_REQUEST,DOCUMENT_LIST_SUCCESS,DOCUMENT_LIST_FAIL} from '../constants/documentConstants'
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