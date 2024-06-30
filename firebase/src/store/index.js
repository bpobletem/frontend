import { createStore } from 'vuex'
import { db } from '../config/firebase.config.js'
import { collection, doc, getDocs, addDoc, deleteDoc } from 'firebase/firestore'


export default createStore({
  state: {
    users: []
  },
  getters: {
    getUsers(state) {
      return state.users
    }
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    addUser(state, user) {
      state.users.push(user)
    },
    deleteUser(state, userID) {
      state.users = state.users.filter(user => user.id !== userID)
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const usersRefCollection = await collection(db, 'usuarios')
        const usersDocs = await getDocs(usersRefCollection)
  
        const users = usersDocs.docs.map(userDoc => ({
          id: userDoc.id,
          ...userDoc.data()
        }));
  
        commit('setUsers', users)
        
      } catch (error) {
        console.error(error)
      }
    },

    async addUser({ commit }, newUser) {
      try {
        const usersRefCollection = await collection(db, 'usuarios')
        const userRef = await addDoc(usersRefCollection, newUser)

        commit('addUser', {id: userRef.id, ...newUser})
      } catch (error) {
        console.error('Error al crear un usuario', error)
      }
    },

    async deleteUser({ commit }, userID) {
      try {
        await deleteDoc(doc(db, 'usuarios', userID));
        commit('deleteUser', userID)
      } catch (error) {
        console.error('No pudimos eliminar al usuario', error)
      }
    }
  },
})
