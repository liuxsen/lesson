import axios from 'axios'
import Promise from 'promise'
export interface TypeOptions {
  method: 'get' | 'post'
  url: string
  params?: any
  data?: any
}

// Add a request interceptor
axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response.data
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error)
  }
)

export default function util(options: TypeOptions) {
  return axios(options)
}
