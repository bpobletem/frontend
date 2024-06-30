<script>
export default {
    methods: {
        loginWithGoogle() {
            this.$emit('login-google')
        }
    }
}
</script>

<template>
    <button @click="loginWithGoogle">Iniciar Sesión con Google</button>
</template>

<style scoped> 

button{
    background-color: #4285f4;
    color: white;

    padding: .7rem 1.2rem;
    border: none;
    border-radius: 15px;

    cursor: pointer;

    display: flex;
    align-items: center;

    font-size: 1rem;
    
    transition: .5s
}

button:hover {
    box-shadow: 0px 0px 25px #d4d4d4;
}
</style>