import axios from 'axios'

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';

const apiUrlPosts = 'https://theordainedbarista.com/wplp/wp-json/wp/v2/posts?per_page=99&_embed'

export const getPosts = () => async dispatch => {
  const res = await axios.get(apiUrlPosts)
  dispatch({
    type: FETCH_POSTS_SUCCESS,
    payload: res.data
  })
}
