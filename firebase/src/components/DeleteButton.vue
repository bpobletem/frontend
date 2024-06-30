<template>
<button @click="deleteUser">
    Eliminar
</button>
</template>

<script>
    export default {
        name: 'DeleteButton',
        props: {
            userID: {
                type: String,
                required: true
            }
        },
        methods: {
            deleteUser() {
                this.$emit('user-delete', this.userID)
            }
        }
    }
</script>

<style scoped>
button {
    margin-top: .5rem;
    border: 0;
    border-radius: 12px;
    padding: 8px 16px;
    background-color: rgb(180, 3, 3);
    color: aliceblue;
    transition: 500ms;
    box-shadow: 1px 4px 4px #1a1a1a;
}

button:hover {
    background-color: rgb(160, 14, 14);
    cursor: pointer;
}
</style>