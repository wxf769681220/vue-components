import axios from 'axios'

// GET
export function get(url) {
  return function(params) {
    return axios.get(url, {
      params
    }).then((res) => {
      const { status, data } = res
      if (status === 200) {
        return data
      }
    }).catch(() => {
      // ...
    })
  }
}

// POST
export function post(url) {
  return function(params) {
    return axios.post(url, params).then((res) => {
      const { status, data } = res
      if (status === 200) {
        return data
      }
    }).catch(() => {
      // ...
    })
  }
}
