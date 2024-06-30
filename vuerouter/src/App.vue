<template>
  <Navbar />
  <main>
    <router-view/>
  </main>
  <medios-pago/>
  <Footer />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import MediosPago from '@/components/MediosPago.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Footer,
    MediosPago
  }
}
</script>

<style scoped>
main {
  padding-top: 80px;
}
</style>