<template>
  <div class="container">
    <h1>¿Quién es ese Pokémon?</h1>
    <h4 v-if="count>0">Pokémones descubiertos: <span> {{ count }} </span></h4>
    <div class="pokemon-container">
      <PokemonCard v-for="(pokemon, index) in pokemonList" :key="index" :pokemon="pokemon" @pokemonGuessed="incrementCount" />
    </div>
  </div>
</template>

<script>
import PokemonCard from './components/PokemonCard.vue'
import { getPokemon, getPokemonInfo } from './helpers/fetchApi.js'

export default {
  name: 'App',
  components: {
    PokemonCard
  },
  data() {
    return {
      pokemonList: [], // Lista de pokemon provenientes de la api
      count: 0 // Contador de Pokémon adivinados
    }
  },
  methods: {
    async getPokemon() {
      const getInfo = await getPokemon();
      await getPokemonInfo(getInfo, this.pokemonList)
    },
    incrementCount() {
      this.count++;
    }
  },
  mounted() {
    this.getPokemon()
  } 
}
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
.container {
  margin: auto;
}
.pokemon-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: auto;
  padding: 1%;
}
h1 {
  margin-bottom: 2rem;
}

span{
  color: rgb(206, 185, 0);
  font-size: 1.5rem;
  font-weight: 600;
  font-family: serif;
}
</style>
