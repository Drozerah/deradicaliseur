<template>
  <div id="app">
    <header>
      <img alt="Vue logo" src="./assets/bandeau.jpg">
      <h1 class="site-title">{{ siteTitle }}</h1>
      <nav class="navigate">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/histoire">Histoire</router-link></li>
        </ul> 
             
      </nav>
    </header>
    <main class="main">
      <router-view/>
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
      siteTitle: 'Le déradicaliseur',
      footer: 'footer content'
    }
  },
  watch: {
    '$route' () {
      /* eslint-disable */
      console.info('App currentRoute:', this.$router.currentRoute.path)
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
nav ul li {
  display: inline;  
  margin-left: 2px;
}

nav ul li a {
  background-color:#CCCCCC;
  padding: 5px;
}

nav ul li:hover a {
  color:yellow;
}

.router-link-exact-active {
  color: yellow;
}

nav ul li a{
color:white;
text-decoration: none;
}
</style>
