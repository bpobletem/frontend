<template>
  <div class="container">
    <div v-if="randomUserList.length === 0">No hay usuario en la lista</div>
    <div class="app-container" v-else>
      <div v-for="(user, index) in randomUserList" :key="user.email" :class="[index % 2 === 0 ? 'leftUser' : 'rightUser']">
        <UserComponent :user="user" :index="index" @message-sent="handleMessageSent"></UserComponent>
      </div>
      <div class="chat">
        <ChatBubble :messages="messageHistory" />
      </div>
    </div>
  </div>
</template>

<script>
import ChatBubble from './components/ChatBubble.vue'
import UserComponent from './components/UserComponent.vue'
import { getUser } from './helpers/fetchApi.js'

export default {
  name: 'App',
  components: {
    ChatBubble,
    UserComponent,
  },
  data () {
    return {
      randomUserList: [], // lista de usuarios
      messageHistory: [], // lista de mensajes
      leftUser: Object,
      rightUser: Object,
    }
  },
  mounted() {
    this.setRandomUserList();
  },
  methods: {
    async setRandomUserList() {
      const randomUserListData = await getUser();
      this.randomUserList = randomUserListData;
    },
    handleMessageSent(message) {
      this.messageHistory.push(message);
    },
  },
}
</script>

<style>
*{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.container{
  padding: 1%;
}
.app-container {
  display: flex;
  gap: 8px;
}
.leftUser {
  flex: 1;
  order: 1;
  margin-right: auto;
}

.rightUser {
  flex: 1;
  order: 3;
  margin-left: auto;
}

.chat {
  flex: 2;
  order: 2;
  border-radius: 16px;
  background-color: #ebebeb;
  padding: 1rem;
  max-width: 50%;
}

</style>