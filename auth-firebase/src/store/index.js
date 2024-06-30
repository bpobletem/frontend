import { createStore } from 'vuex'
import userState from './modules/userState'

export default createStore({
  modules: {
    userState
  }
})
