import axios from 'axios'

export default {
  install: (app) => {
    app.config.globalProperties.$http = axios.create({
      baseURL: 'https://vue-task-list-firebase-default-rtdb.firebaseio.com/',
    })
    
    app.config.globalProperties.$http.interceptors.response.use(response => {
      if (response.config.method === 'get') {
        const data = [] 
        
        for (let id in response.data) {
          data.unshift({
            id, ...response.data[id]
          })
        }
        
        response.data = data
      } else if (response.config.method === 'post') {
        const payload = response.config.data
        const { name } = response.data
        const data = JSON.parse(payload)
    
        response.data = { ...data, name }
      }

      return response
    }, error => Promise.reject(error))
  }
}