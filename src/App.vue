<template>
  <div id="app">
    <!-- Sending the 'cities' information via props to the child component -->
    <Navigation :cities="cities"/>
    <!-- Place city data inside this router view -->
    <router-view />
  </div>
</template>

<script>
import Navigation from './components/navigation'

export default {
  name: 'App',

  data () {
    return {
      // Bring in the city data
      cities: require('@/assets/navigation.json')
    }
  },

  components: {
    Navigation
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: Silver;
  margin-top: 60px;
}
</style>
