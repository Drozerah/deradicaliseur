<template>
  <div id="app">
    <header>
      <!-- App Title -->
      <h1 class="site-title" v-show=isSiteTitle>{{ siteTitle }}</h1>
      <!-- Mobile nav -->
      <nav class="yellow hide-on-med-and-up" role="navigation">
        <div class="nav-wrapper ">
          <!-- <a id="logo-container" href="#" class="brand-logo center black-text">Le Déradicaliseur</a> -->
          <ul id="nav-mobile" class="sidenav">
            <li><router-link to="/" >||||||||</router-link></li>
            <li><router-link to="/histoire">Histoire</router-link></li>
            <li><router-link to="/couverture">La couv</router-link></li>
            <li><router-link to="/plat_verso">Le dos</router-link></li>
            <li><router-link to="/extraits">Extraits</router-link></li>
            <li><router-link to="/actualites">Actu</router-link></li>
            <li><router-link to="/auteurs">Auteurs</router-link></li>
            <li><router-link to="/bonus">Bonus</router-link></li>
            <li><router-link to="/disponibilites">Dispo</router-link></li>
          </ul>
          <a href="#" data-target="nav-mobile" class="sidenav-trigger black-text"><i class="material-icons">menu</i></a>
        </div>
      </nav>
      <!-- large screen nav -->
      <div class="center">
            <img class="responsive-img" alt="Bandeau du site" src="./assets/bandeau.jpg" v-if="displayLogo">
      </div>
      <nav class="white flex-container hide-on-med-and-down" role="navigation">
        <ul class="nav-1">
            <li><router-link to="/" >||||||||</router-link></li>
            <li><router-link to="/histoire">Histoire</router-link></li>
            <li><router-link to="/couverture">La couv</router-link></li>
            <li><router-link to="/plat_verso">Le dos</router-link></li>
            <li><router-link to="/extraits">Extraits</router-link></li>
            <li><router-link to="/actualites">Actu</router-link></li>
            <li><router-link to="/auteurs">Auteurs</router-link></li>
            <li><router-link to="/bonus">Bonus</router-link></li>
            <li><router-link to="/disponibilites">Dispo</router-link></li>
        </ul>
      </nav>
    </header>
  <br>
  <br>










<!--     <header>
      <Carousel></Carousel>
      <img alt="Bandeau du site" src="./assets/bandeau.jpg" v-if="displayLogo">
      <h1 class="site-title" v-show=isSiteTitle>{{ siteTitle }}</h1>
      <nav class="navigate">
        <ul>
          <li><router-link to="/" >||||||||</router-link></li>
          <li><router-link to="/histoire">Histoire</router-link></li>
          <li><router-link to="/couverture">La couv</router-link></li>
          <li><router-link to="/plat_verso">Le dos</router-link></li>
          <li><router-link to="/extraits">Extraits</router-link></li>
          <li><router-link to="/actualites">Actu</router-link></li>
          <li><router-link to="/auteurs">Auteurs</router-link></li>
          <li><router-link to="/bonus">Bonus</router-link></li>
          <li><router-link to="/disponibilites">Dispo</router-link></li>
        </ul>          
      </nav>
    </header> -->



    <main class="main">
      <router-view/>
    </main>
    <footer class="footer">
      <img alt="Bandeau du site" src="./assets/bandeau.jpg" v-if="!displayLogo">
      <div>{{ copyright }} -<a href="http://www.editions-rjtp.com/" target="_blanck">{{ editeur }}</a>-</div>      
    </footer>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Carousel from './components/Carousel.vue'
export default {
  name: 'app',
  components: {
    Home,
    Carousel
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
  margin-top: 0px;
}

/* Global rules */

/* navigation */

.nav-1 li{
  display: inline-block;
}

.nav-1 a{
  color: #333;
}

.flex-container{
  display: flex;
  justify-content: center;
  align-items: center; 
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
  /* Best accessibility contrast */
  /* background-color:#010300; */
  color: yellow;
}
</style>
