<template>
    <div class="container">
        <h3>Sign up</h3>
        <form class="input-container" @submit.prevent="registerUser">
            <label for="email">
                Email
            </label>
            <input type="text" id="email" v-model="localUser.email" required>
            <label for="password">
                Password
            </label>
            <input type="password" id="password" v-model="localUser.password" required>
            <button type="submit">Sign up</button>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            localUser: {...this.user}
        }
    },
    methods: {
        registerUser(){
            this.$emit('register-user', this.localUser)
        }
    }
}
</script>



<style scoped>

h3 {
    text-align: center
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

form{
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
}

input,label {
    width: 240px;
    margin-top: .5rem;
}

input {
    border: 1px solid #bebebe;
    border-radius: 1rem;
    padding: .2rem;
}

button {
    border-radius: 1rem;
    border: 0;
    padding: 8px 16px 10px;
    margin-top: .5rem;
    background-color: rgb(0, 119, 255);
    color: #f5f5f5;
}

button:hover {
    background-color: rgb(0, 101, 216);
    cursor: pointer;
}

</style>