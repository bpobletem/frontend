<template>
    <button>
        Crear usuario
    </button>
</template>

<script>
export default {
    name: 'CreateButton'
}
</script>

<style scoped>
button {
    margin-top: .5rem;
    border: 0;
    border-radius: 12px;
    padding: 8px 16px;
    background-color: rgb(14, 123, 219);
    color: aliceblue;
    transition: 500ms;
    box-shadow: 1px 4px 4px #1a1a1a;
}

button:hover {
    background-color: rgb(15, 108, 190);
    cursor: pointer;
}
</style>