import { createStore } from 'vuex'
import juegos from '@/assets/data/juegos.json'

export default createStore({
  state: {
    juegos:juegos
  },
  getters: {
    juegos: state => state.juegos
  },
  mutations: {
    modificarStock(state,{codigo, cantidad}) {
      const juego = state.juegos.find(juego => juego.codigo === codigo)
      if (juego) {
        juego.stock = Number(juego.stock) + Number(cantidad);
      }
    }
  },
  actions: {
    modificarStock({ commit }, payload) {
      commit('modificarStock', payload);
    }
  },
  modules: {
  }
})
