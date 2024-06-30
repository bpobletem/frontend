<template>
  <div id="app">
    <h1>Usuarios</h1>
    <h4>Firebase</h4>
    <div class="container">
      <UserForm :user="user" @add-user="addUserToFirestore" />
    </div>
    <UserList /> 
  </div>
</template>

<script>
    import UserForm from './components/UserForm.vue'
    import UserList from './components/UserList.vue'

    import { mapActions } from 'vuex'
    
    export default {
      components: {
        UserForm,
        UserList
      },
      data() {
        return {
          user: {
            name:'',
            email:''
          }
        }
      },
      methods: {
        ...mapActions(['addUser']),

        async addUserToFirestore(newUser) {
          await this.addUser(newUser)
        },
      }
    }
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #dddddd;
  background-color: #27272c;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 15px;
}

h1, h4{
  text-align: center;
  margin: .5rem
}

.container{
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>
