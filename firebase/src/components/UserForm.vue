
<template>
    <form @submit.prevent="addUser">
    <div class="container">
        <div>
            <label for="name">Nombre:</label>
            <input type="text" id="name" v-model="localUser.name" required>
        </div>
        <div>
            <label for="email">Correo electrónico:</label>
            <input type="email" id="email" v-model="localUser.email" required>
        </div>
        <CreateButton type="submit"></CreateButton>
    </div>
    </form>
</template>

<script>
import CreateButton from './CreateButton.vue'

export default {
    components: {
        CreateButton
    },
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            localUser: { ...this.user }
        }
    },
    methods: {
        addUser() {
            this.$emit('add-user', this.localUser)
        }
    }
}
</script>

<style scoped>
.container {
    text-align: center;
    margin: 1rem;
    padding: 1rem;
    border-radius: 15px;
}

label, input {
    margin: .5rem; 
    text-align: center;
    text-indent: 10px; 
    display: block;
    box-sizing: border-box;
    padding: .5rem; 
}

label {
    text-align: center; 
}

input {
    background-color: #e7e7e7;    
    border-radius: 10px;
    box-shadow: 1px 4px 4px;
    border: none;
}

</style>