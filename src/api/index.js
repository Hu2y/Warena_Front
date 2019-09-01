import axios from 'axios'

const DOMAIN = 'http://localhost:3000/api/arena/azshara/'

const request = (method, url) => {
  return axios({
    method,
    url: DOMAIN + url
  }).then(res => res.data)
  .catch(err => {throw Error(err)})
}

export const arena = {
  fetch(id) {
    return request('get', id)
  }
}