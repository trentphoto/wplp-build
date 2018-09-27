export const SEARCH_ON = 'SEARCH_ON';
export const SEARCH_OFF = 'SEARCH_OFF';

export const searchOn = () => async dispatch => {
  dispatch({
    type: SEARCH_ON
  })
}
export const searchOff = () => async dispatch => {
  dispatch({
    type: SEARCH_OFF
  })
}
