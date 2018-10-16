<template>
  <div id="app">
    <header>
      <img alt="Vue logo" src="./assets/bandeau.jpg">
      <h1 class="site-title"></h1>
      <nav class="navigate">
        navigation
      </nav>
    </header>
    <main class="main">
      <Home/>
    </main>
    <footer class="footer">
      {{ footer }}
    </footer>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  },
  data(){
    return{
      footer: 'footer content'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
