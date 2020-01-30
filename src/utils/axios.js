import axios from 'axios'

export const createAxiosInstance = (store) => {
  const token = store.getState().token.token

  return axios.create({
    baseURL: 'https://api.spotify.com/v1/',
    headers: { Authorization: 'Bearer ' + token }
  })
}
