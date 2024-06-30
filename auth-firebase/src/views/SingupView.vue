<script>
import { mapGetters, mapActions } from 'vuex'

import RegisterUser from '../components/RegisterForm.vue'

export default {
    components: {
        RegisterUser
    },
    computed: {
        ...mapGetters('userState', ['getUser'])
    },
    methods: {
        ...mapActions('userState', ['registerUser']),
        async registerUserWithEmail(user) {
            await this.registerUser(user)
            this.$router.push('/')
        }
    }
}
</script>

<template>
    <div>
        <div>
            <RegisterUser :user="getUser" @register-user="registerUserWithEmail"/>
        </div>    
    </div>

</template>

<style>

</style>