<template>
  <div id="app">
    <Navbar/>
    <Welcome/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Welcome from './components/Welcome.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Welcome
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
