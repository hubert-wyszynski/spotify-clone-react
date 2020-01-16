import axios from 'axios'

import { SET_CURRENT_CONTENT } from 'actions/currentContent'

export const FETCH_PLAYLIST_TRACKS = 'FETCH_PLAYLIST_TRACKS'
export const FETCH_PLAYLIST_TRACKS_FAILURE = 'FETCH_PLAYLIST_TRACKS_FAILURE'
export const FETCH_PLAYLIST_TRACKS_SUCCESS = 'FETCH_PLAYLIST_TRACKS_SUCCESS'

export const fetchPlaylistTracks = (playlistId, playlistName, token) => dispatch => {
  dispatch({ type: FETCH_PLAYLIST_TRACKS })

  return axios
    .get(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      { params: {}, headers: { 'Authorization': 'Bearer ' + token } }
    )
    .then(payload => {
      dispatch({ type: FETCH_PLAYLIST_TRACKS_SUCCESS, payload })
      dispatch({
        type: SET_CURRENT_CONTENT,
        payload: {
          display: 'list',
          data: 'playlist',
          header: `${playlistName}`
        }
      })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: FETCH_PLAYLIST_TRACKS_FAILURE })
    })
}
