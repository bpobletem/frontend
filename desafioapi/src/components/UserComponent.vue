<template>
  <div class="container">
      <img :src="user.picture.large" :alt="user.name.first"/>
      <h3>{{ user.name.first }}</h3>
      <input type="color" value="#fff" v-model="color"/>
      <textarea v-model="message" style="max-height: 200px; width: 80%; height: 200px;"></textarea>
      <ChatButton buttonText="Enviar" @click="sendMessage"></ChatButton>
  </div>
</template>

<script>
import ChatButton from './ChatButton.vue';
export default {
  components: {
    ChatButton
  },
  props: {
    user: {
      type: Object,
      required: true
    },
    index: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      message: '', // variable para almacenar el mensaje
      name: '',
      color:'#ffffff',
      align: this.index % 2 === 0 ? 'left' : 'right'
    };
  },
  methods: {
    sendMessage() {
      if (this.message.trim() !== '') {
        this.$emit('message-sent', {
          name: this.user.name.first,
          message: this.message,
          color: this.color,
          align: this.align,
        }); // emitir evento con el usuario y el mensaje
        this.message = ''; // limpiar el textarea después de enviar
      }
    }
  }
};
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    background-color: #ebebeb;
    border-radius: 16px;
    padding: 8px
}

img {
    border-radius: 100%;
}

textarea {
  background-color: whitesmoke;
}
</style>