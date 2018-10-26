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
            <router-link to="/" tag="li" active-class="active" exact ><a :class="nav.sidenav">||||||||</a></router-link>
            <router-link to="/histoire" tag="li" active-class="active" ><a :class="nav.sidenav">Histoire</a></router-link>
            <router-link to="/couverture" tag="li" active-class="active" ><a :class="nav.sidenav">La couv</a></router-link>
            <router-link to="/plat_verso" tag="li" active-class="active" ><a :class="nav.sidenav">Le dos</a></router-link>
            <router-link to="/extraits" tag="li" active-class="active" ><a :class="nav.sidenav">Extraits</a></router-link>
            <router-link to="/actualites" tag="li" active-class="active" ><a :class="nav.sidenav">Actu</a></router-link>
            <router-link to="/auteurs" tag="li" active-class="active" ><a :class="nav.sidenav">Auteurs</a></router-link>
            <router-link to="/bonus" tag="li" active-class="active" ><a :class="nav.sidenav">Bonus</a></router-link>
            <router-link to="/disponibilites" tag="li" active-class="active" ><a :class="nav.sidenav">Dispo</a></router-link>
          </ul>
          <a href="#" data-target="nav-mobile" class="sidenav-trigger black-text"><i class="material-icons">menu</i></a>
        </div>
      </nav>
      <!-- Larger than mobile size navigation -->
      <div class="logo-top center">
        <img class="responsive-img" :alt="siteTitle" src="@/assets/bandeau.jpg" v-if="displayLogo">
      </div>
      <nav class="nav white hide-on-small-only flex-container" role="navigation">
        <ul>
            <!-- "exact" this link will only be active at `/` -->
            <!-- https://router.vuejs.org/api/#exact -->
            <router-link to="/" tag="li" active-class="active" exact :class="nav.wavesEffect"><a>||||||||</a></router-link>
            <router-link to="/histoire" tag="li" active-class="active" :class="nav.wavesEffect"><a>Histoire</a></router-link>
            <router-link to="/couverture" tag="li" active-class="active" :class="nav.wavesEffect"><a>La couv</a></router-link>
            <router-link to="/plat_verso" tag="li" active-class="active" :class="nav.wavesEffect"><a>Le dos</a></router-link>
            <router-link to="/extraits" tag="li" active-class="active" :class="nav.wavesEffect"><a>Extraits</a></router-link>
            <router-link to="/actualites" tag="li" active-class="active" :class="nav.wavesEffect"><a>Actu</a></router-link>
            <router-link to="/auteurs" tag="li" active-class="active" :class="nav.wavesEffect"><a>Auteurs</a></router-link>
            <router-link to="/bonus" tag="li" active-class="active" :class="nav.wavesEffect"><a>Bonus</a></router-link>
            <router-link to="/disponibilites" tag="li" active-class="active" :class="nav.wavesEffect"><a>Dispo</a></router-link>
        </ul>
      </nav>
    </header>
    <br>
    <br>
    <main class="main">
      <router-view/>
    </main>
    <footer class="footer container">
      <div class="center">
            <img class="responsive-img" :alt="siteTitle" src="@/assets/bandeau.jpg" v-if="!displayLogo">
            <div>{{ copyright }} -<a href="http://www.editions-rjtp.com/" target="_blanck">{{ editeur }}</a>-</div>
            <!-- avatar -->
<!-- Bonjour, je suis le premier rôle de la BD "Le déradicaliseur".
J'interviens là où personne ne veut aller, pour rencontrer et parler avec quelqu'un qui est rejeté par presque toute la société, et dont peu savent quoi faire.
Une vraie mission impossible, mais sans Tom Cruise ni les acteurs de la série TV. -->
            <br>
            <img class="responsive-img avatar z-depth-1" src="@/assets/avatar_100x100.jpg" alt="Avatar">
            <br>
            <br>
            <br>
            <br>
            <br>   
      </div>     
    </footer>
  </div>
</template>

<script>
import Home from './components/routes/Home.vue'
//import Carousel from './components/tools/CarouselExtraits.vue'
//import Slider from './components/tools/Carousel.vue'
import M from 'materialize-css'

export default {
  name: 'app',
  components: {
    Home
    //Carousel,
    //CarouselExtraits
  },
  data(){
    return{
      siteTitle: 'Le déradicaliseur',
      isSiteTitle: false,
      nav:{
        wavesEffect: 'waves-effect waves-yellow',
        sidenav: 'sidenav-close waves-effect waves-yellow',
      },
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
  /* margin-bottom: 5px; */
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

.avatar {
    vertical-align: middle;
    width: 80px;
    height: 80px;
    border-radius: 50%;
}
</style>
