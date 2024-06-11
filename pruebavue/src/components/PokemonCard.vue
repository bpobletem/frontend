<template>
    <div class="pokemon-card">
      <img :src="pokemon.front_default" :style="blurStyle">
      <p :style="blurStyle">{{ pokemon.name }}</p>
      <input type="text" v-model="guess" :disabled="guessed" v-if="!guessed">
      <p v-if="showTryAgainText" class="try-again-text">¡Intenta de nuevo!</p>
      <SendButton :disabled="guessed" :text="'Descubrir'" @click="checkAnswer" v-if="!guessed"></SendButton>
    </div>
  </template>
  
  <script>
  import SendButton from './SendButton.vue'
  
  export default {
    props: {
      pokemon: {
        type: Object,
        required: true,
      },
    },
    components: {
      SendButton
    },
    data() {
      return {
        guessed: false,
        guess: '',
        showTryAgainText: false
      };
    },
    computed: {
      blurStyle() {
        return {
          filter: this.guessed ? 'none' : 'blur(10px) grayscale(100%)'
        };
      },
    },
    methods: {
      checkAnswer() {
        if (this.guess.toLowerCase() === this.pokemon.name.toLowerCase()) { // Revisamos la condicion del nombre
          this.guessed = true;
          this.$emit('pokemonGuessed'); // Mandamos un evento para el contador en el componente padre
        } else {
          this.showTryAgainText = true;
          setTimeout(() => {
            this.showTryAgainText = false;
          }, 2000); // Ocultar el texto después de 2 segundos
        }
      }
    }
  }
  </script>
  
<style scoped>
  input {
    border-radius: 8px;
    border: none;
    box-shadow: 1px 1px 5px #e2e2e2;
    height: 1.2rem;
    margin-bottom: 14px;
  }
  
  img {
    width: 150px;
    height: 150px;
  }
  
  p {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
  }
  
  .pokemon-card {
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 1px 5px #e2e2e2;
    padding: 1%;
    border-radius: 16px;
    transition: 180ms;
  }
  
  .pokemon-card:hover {
    transform: scale(1.1);
  }
  
  .try-again-text {
    color: red;
  }

</style>
  