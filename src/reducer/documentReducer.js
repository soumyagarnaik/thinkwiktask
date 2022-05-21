import {DOCUMENT_LIST_REQUEST,DOCUMENT_LIST_SUCCESS,DOCUMENT_LIST_FAIL,
DOCUMENT_DETAILS_REQUEST,DOCUMENT_DETAILS_SUCCESS,DOCUMENT_DETAILS_FAIL,
DOCUMENT_DELETE_REQUEST,DOCUMENT_DELETE_SUCCESS,DOCUMENT_DELETE_FAIL} from '../constants/documentConstants'

export const documentListReducer = (state = { documents: [] }, action) => {
    switch (action.type) {
      case DOCUMENT_LIST_REQUEST:
        return { loading: true, documents: [] }
      case DOCUMENT_LIST_SUCCESS:
        return {
          loading: false,
          documents: action.payload
        }
      case DOCUMENT_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const documentDetailsReducer = (
    state = { document: { } },
    action
  ) => {
    switch (action.type) {
      case DOCUMENT_DETAILS_REQUEST:
        return { ...state, loading: true }
      case DOCUMENT_DETAILS_SUCCESS:
        return { loading: false, document: action.payload }
      case DOCUMENT_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const deleteReducer = (state = {}, action) => {
    switch (action.type) {
      case DOCUMENT_DELETE_REQUEST:
        return { loading: true }
      case DOCUMENT_DELETE_SUCCESS:
        return { loading: false, success: true }
      case DOCUMENT_DELETE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }