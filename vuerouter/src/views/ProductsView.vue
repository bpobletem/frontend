<template>
<div>
    <Card
    :titulo="titulo"
    :descripcion="descripcion"
    :precio="precio"
    :cantidad="cantidad"
    />
</div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
name: 'ProductsView',
components: {
    Card
},
props: {
    titulo: {
    type: String,
    required: true
    },
    descripcion: {
    type: String,
    required: true
    },
    precio: {
    type: Number,
    required: true
    },
    cantidad: {
    type: String,
    required: true
    }
}
};
</script>

<style scoped>

</style>
