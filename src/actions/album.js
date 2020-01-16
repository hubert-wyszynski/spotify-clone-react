import axios from 'axios'

import { SET_CURRENT_CONTENT } from 'actions/currentContent'

export const FETCH_ALBUM_TRACKS = 'FETCH_ALBUM_TRACKS'
export const FETCH_ALBUM_TRACKS_FAILURE = 'FETCH_ALBUM_TRACKS_FAILURE'
export const FETCH_ALBUM_TRACKS_SUCCESS = 'FETCH_ALBUM_TRACKS_SUCCESS'

export const fetchAlbumTracks = (albumId,token) => dispatch => {
  dispatch({ type: FETCH_ALBUM_TRACKS })

  return axios
    .get(
      `https://api.spotify.com/v1/albums/${albumId}/tracks`,
      { params: {}, headers: { 'Authorization': 'Bearer ' + token } }
    )
    .then(payload => {
      dispatch({ type: FETCH_ALBUM_TRACKS_SUCCESS, payload })
      dispatch({
        type: SET_CURRENT_CONTENT,
        payload: {
          display: 'list',
          data: 'album',
          header: 'To jest jakiś album'
        }
      })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: FETCH_ALBUM_TRACKS_FAILURE })
    })
}
