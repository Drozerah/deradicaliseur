<template>
  <div id="app">
    <header>
      <img alt="Vue logo" src="./assets/bandeau.jpg" v-if="displayLogo">
      <h1 class="site-title" v-show=isSiteTitle>{{ siteTitle }}</h1>
      <nav class="navigate">
        <ul>
          <li><router-link to="/">||||||||</router-link></li>
          <li><router-link to="/histoire">Histoire</router-link></li>
          <li><router-link to="/disponibilites">Dispo</router-link></li>
        </ul>          
      </nav>
    </header>
    <main class="main">
      <router-view/>
    </main>
    <footer class="footer">
      <img alt="Vue logo" src="./assets/bandeau.jpg" v-if="!displayLogo">
      <div>{{ copyright }} -<a href="http://www.editions-rjtp.com/" target="_blanck">{{ editeur }}</a>-</div>      
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
      isSiteTitle: false,
      footer: 'footer content',
      displayLogo: true,
      copyright: '',
      editeur: 'Les Editions R.J.T.P.'
    }
  },
  mounted(){
      this.isLogo()
  },
  watch: {
    '$route' () {
      this.isLogo()
    }
  },
  methods:{
    isLogo(){
      // get current url path
      let path = this.$router.currentRoute.path
      // set this.displayLogo according to path
      path == '/' ? this.displayLogo = true : this.displayLogo = false
    }
  },
  created() {
    let date = new Date()
    this.copyright = 'Copyright ' + date.getFullYear()
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

/* navigation */

nav ul li {
  display: inline;  
  margin-left: 2px;
}

nav ul li a {
  background-color:#CCCCCC;
  padding: 5px;
  color:white;
  text-decoration: none;
}

nav ul li:hover a {
  color:yellow;
}

.router-link-exact-active {
  color: yellow;
}

/* footer */

footer{
  margin-top: 20px;
}

footer a {
  padding: 5px;
  color: inherit;
}

footer a:hover {
  background-color:#CCCCCC;
  color: yellow;
}
</style>
