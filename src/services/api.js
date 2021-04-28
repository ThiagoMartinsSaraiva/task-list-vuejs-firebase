import axios from 'axios'

const api = axios.create({
  baseURL: 'https://vue-task-list-firebase-default-rtdb.firebaseio.com/',
})

api.interceptors.response.use(response => {
  if (response.config.method === 'get') {
    const data = [] 
    
    for (let id in response.data) {
      data.push({
        id, ...response.data[id]
      })
    }
    
    response.data = data
    
    return response
  } else if (response.config.method === 'post') {
    const payload = response.config.data
    const { name } = response.data
    const data = JSON.parse(payload)

    response.data = { ...data, name }

    return response
  }
}, error => Promise.reject(error))

export { api }