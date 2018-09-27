import axios from 'axios'

export const FETCH_PAGES_BEGIN   = 'FETCH_PAGES_BEGIN';
export const FETCH_PAGES_SUCCESS = 'FETCH_PAGES_SUCCESS';
export const FETCH_PAGES_FAILURE = 'FETCH_PAGES_FAILURE';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';

const apiUrl = 'http://theordainedbarista.com/wplp/wp-json/wp/v2/pages?per_page=99'
const apiUrlEvents = 'http://theordainedbarista.com/wplp/wp-json/wp/v2/event?per_page=99'

export const getPages = () => async dispatch => {
  const res = await axios.get(apiUrl)
  dispatch({
    type: FETCH_PAGES_SUCCESS,
    payload: res.data
  })
}
export const getEvents = () => async dispatch => {
  const res = await axios.get(apiUrlEvents)
  dispatch({
    type: FETCH_EVENTS_SUCCESS,
    payload: res.data
  })
}
