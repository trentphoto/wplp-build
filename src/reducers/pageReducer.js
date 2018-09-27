import {
  FETCH_PAGES_SUCCESS,
  FETCH_POSTS_SUCCESS,
  FETCH_EVENTS_SUCCESS
} from '../actions/pageActions'

const initialState = {
  pages: [],
  events: [],
  posts: [],
  pagesLoading: true,
  eventsLoading: true,
  postsLoading: true,
  error: null
}

export default function pageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        eventsLoading: false,
        events: action.payload
      };
    case FETCH_PAGES_SUCCESS:
      return {
        ...state,
        pagesLoading: false,
        pages: action.payload
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        postsLoading: false,
        posts: action.payload
      };
    default:
      return state;

  }
}
