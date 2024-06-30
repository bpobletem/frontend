import {
    auth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from '../../config/firebase.config.js'


const state = {
    user: null
}

const getters = {
    getUser: state => state.user,
    isAuthenticated: state => !!state.user
}

const mutations = {
    setUser: (state, user) => state.user = user
}

const actions = {
    async registerUser({ commit }, { email, password }) {
        try {
            const userSignUp = await createUserWithEmailAndPassword(auth, email, password)
            commit('setUser', userSignUp.user)
        } catch (error) {
            console.error('Error al crear el Usuario', error)
        }
    },
    async login({ commit }, { email, password }) {
        try {
            const userLogin = await signInWithEmailAndPassword(auth, email, password);
            commit('setUser', userLogin.user)
        } catch (error) {
            console.error('Error al iniciar sesión: ', error)
        }
    },
    async logout({ commit }) {
        try {
            await signOut(auth),
            commit('setUser', null)
        } catch(error) {
            console.error('Error al cerrar sesión: ', error)
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}