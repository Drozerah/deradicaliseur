<template>
  <div id="app">
    <header role="banner">
      <!-- App Title -->
      <h1 class="site-title" v-show=isSiteTitle>{{ siteTitle }}</h1>
      <!-- Mobile size nav -->
      <nav class="yellow hide-on-med-and-up" role="navigation">
        <div class="nav-wrapper ">
          <!-- <a id="logo-container" href="#" class="brand-logo center black-text">Le Déradicaliseur</a> -->
          <ul id="nav-mobile" class="sidenav" ref="sidenav">
            <!-- this link will only be active at `/` -->
            <router-link to="/" tag="li" active-class="active" exact><a class="sidenav-close">||||||||</a></router-link>
            <router-link to="/histoire" tag="li" active-class="active"><a class="sidenav-close">Histoire</a></router-link>
            <router-link to="/couverture" tag="li" active-class="active"><a class="sidenav-close">La couv</a></router-link>
            <router-link to="/plat_verso" tag="li" active-class="active"><a class="sidenav-close">Le dos</a></router-link>
            <router-link to="/extraits" tag="li" active-class="active"><a class="sidenav-close">Extraits</a></router-link>
            <router-link to="/actualites" tag="li" active-class="active"><a class="sidenav-close">Actu</a></router-link>
            <router-link to="/auteurs" tag="li" active-class="active"><a class="sidenav-close">Auteurs</a></router-link>
            <router-link to="/bonus" tag="li" active-class="active"><a class="sidenav-close">Bonus</a></router-link>
            <router-link to="/disponibilites" tag="li" active-class="active"><a class="sidenav-close">Dispo</a></router-link>
          </ul>
          <a href="#" data-target="nav-mobile" class="sidenav-trigger black-text"><i class="material-icons">menu</i></a>
        </div>
      </nav>
      <!-- Larger than mobile size navigation -->
      <div class="flex-container logo-top">
        <img class="responsive-img" :alt="siteTitle" src="@/assets/bandeau.jpg" v-if="displayLogo">
      </div>
      <nav class="nav white hide-on-small-only flex-container" role="navigation">
        <ul>
            <!-- this link will only be active at `/` -->
            <!-- https://router.vuejs.org/api/#exact -->
            <router-link to="/" tag="li" active-class="active" exact><a>||||||||</a></router-link>
            <router-link to="/histoire" tag="li" active-class="active"><a>Histoire</a></router-link>
            <router-link to="/couverture" tag="li" active-class="active"><a>La couv</a></router-link>
            <router-link to="/plat_verso" tag="li" active-class="active"><a>Le dos</a></router-link>
            <router-link to="/extraits" tag="li" active-class="active"><a>Extraits</a></router-link>
            <router-link to="/actualites" tag="li" active-class="active"><a>Actu</a></router-link>
            <router-link to="/auteurs" tag="li" active-class="active"><a>Auteurs</a></router-link>
            <router-link to="/bonus" tag="li" active-class="active"><a>Bonus</a></router-link>
            <router-link to="/disponibilites" tag="li" active-class="active"><a>Dispo</a></router-link>
        </ul>
      </nav>
    </header>
    <br>
    <br>
    <main class="main container">
      <router-view/>
    </main>
    <footer class="footer container">
      <div class="center">
            <img class="responsive-img" :alt="siteTitle" src="@/assets/bandeau.jpg" v-if="!displayLogo">
            <div>{{ copyright }} -<a href="http://www.editions-rjtp.com/" target="_blanck">{{ editeur }}</a>-</div>      
      </div>     
    </footer>
  </div>
</template>

<script>
import Home from './components/routes/Home.vue'
//import Carousel from './components/Carousel.vue'
//import Slider from './components/Slider.vue'
//import M from 'materialize-css'

export default {
  name: 'app',
  components: {
    Home,
    //Carousel,
    //Slider
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
      new M.Sidenav(this.$refs.sidenav, {
            edge: 'left',
      })
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

/* General */

.flex-container {
  display: flex;
  justify-content: center;
  align-items: center; 
}

/* Header */

.logo-top {
  margin-bottom: 5px;
}

/* Navigation */

.nav {
  margin-top: 0px;
}

.nav a {
  color: #333;
}

/* Article */

article h1 {
  text-align: center;
}

/* Footer */

footer {
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
