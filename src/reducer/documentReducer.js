import {DOCUMENT_LIST_REQUEST,DOCUMENT_LIST_SUCCESS,DOCUMENT_LIST_FAIL} from '../constants/documentConstants'

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