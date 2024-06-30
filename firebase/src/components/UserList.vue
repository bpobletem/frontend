<script>
import DeleteButton from './DeleteButton.vue';

export default {
    components: {
        DeleteButton
    },
    computed: {
        users() {
            return this.$store.state.users
        }
    },
    methods: {
        deleteUser(userID) {
            this.$store.dispatch('deleteUser', userID)
        }
    },
    created() {
        this.$store.dispatch('fetchUsers')
    }
}
</script>

<template>
    <div class="container" v-if="users.length > 0">
        <table class="tabla">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo electrónico</th>
                    <th>Acciones</th> 
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>
                        <DeleteButton :userID="user.id" @user-delete="deleteUser" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div v-else>
        <p>No hay usuarios registrados.</p>
    </div>
</template>

<style scoped>

</style>