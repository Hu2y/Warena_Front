import axios from 'axios'

const DOMAIN = 'http://localhost:3000/api/'


const request = (method, url, id) => {
  return axios({
    method,
    url: DOMAIN + url + id
  }).then(res => res.data)
  .catch(err => {throw Error(err)})
}

export const arena = {
  fetch(id) {
    return request('get','arena/azshara/', id)
  }
}

export const userList = {
  fetch(id) {
    return request('get',id)
  }
}