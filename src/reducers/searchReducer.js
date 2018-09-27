import {
  SEARCH_ON,
  SEARCH_OFF
} from '../actions/searchActions'

const initialState = {
  searchActive: false
}

export default function pageReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ON:
      return {
        ...state,
        searchActive: true
      };
    case SEARCH_OFF:
      return {
        ...state,
        searchActive: false
      };
    default:
      return state;

  }
}
