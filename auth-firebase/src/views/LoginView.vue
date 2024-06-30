<script>
import { mapGetters, mapActions } from 'vuex'
import LoginForm from '../components/LoginForm.vue'

export default {
    components: {
        LoginForm
    },
    computed: {
        ...mapGetters('userState', ['getUser'])
    },
    methods: {
        ...mapActions('userState', ['login', 'loginWithGoogle']),

        async loginWithEmailAndPassword(user) {
            await this.login(user)
            alert(`Bienvenido ${user.email}`)
            this.$router.push('/')
        },
        async loginWithGoogleAsync() {
            try {
                await this.loginWithGoogle(),
                alert(`Bienvenido ${this.getUser.email}`)
                this.$router.push('/')
                
            } catch (error) {
                console.error('Problemas al iniciar Sesion: ', error)
            }
        }
    }
}
</script>

<template>
    <div>
        <LoginForm :user="getUser" @login-user="loginWithEmailAndPassword" @login-google="loginWithGoogleAsync" />
    </div>


</template>

<style>

</style>