import Vue from 'vue'
import 'font-awesome/css/font-awesome.css'

import App from './App'
import './config/bootstrap'
import './config/msg'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// Remover

require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikd1c3Rhdm8gRmFicm8iLCJlbWFpbCI6Imd1c3Rhdm9Ac21va2luZ3NuYWtlcy5jb20uYnIiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTY1NzQxNzQwLCJleHAiOjE1NjYwMDA5NDB9.vplhMW4VXBu9y3Lwxm5wfUkjhsZ6DjU6qubmTo63WLE'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')