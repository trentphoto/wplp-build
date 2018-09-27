import {
  FETCH_POSTS_SUCCESS
} from '../actions/postActions'

const initialState = {
  posts: [],
  postsLoading: true,
  error: null
}

export default function postReducer(state = initialState, action) {
  switch (action.type) {
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
