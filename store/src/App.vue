<template>
  <div id="container">
    <h1>Lista de Juegos 🎮</h1>
    <ul>
      <li v-for="juego in juegos" :key="juego.codigo">
        {{ juego.nombre }} - Stock: {{ juego.stock }}
        <button @click="decrementarStock(juego.codigo)">-</button>
        <button @click="incrementarStock(juego.codigo)">+</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState(['juegos'])
  },
  methods: {
    incrementarStock(codigo) {
      this.$store.dispatch('modificarStock', { codigo, cantidad: 1 });
    },
    decrementarStock(codigo) {
      this.$store.dispatch('modificarStock', { codigo, cantidad: -1 });
    }
  }
};
</script>

<style>
* {
  font-family: sans-serif;
}

ul, li {
  list-style: none;
}

li{
  margin-bottom: 1rem;
}

button {
  border: 0;
  padding: .3rem;
  margin-right: 8px;
  width: 26px;
  height: 26px;
  background-color: rgb(196, 255, 250)
}

#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #cfcfcf;
  margin: 4%;
  border-radius: 20px;
}
</style>
