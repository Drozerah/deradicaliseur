<template>
  <div id="app">
    <header class="banner" role="banner">
      <!-- App Title -->
      <!-- Mobile size nav -->
      <nav class="yellow hide-on-med-and-up" role="navigation">
        <div class="nav-wrapper ">
          <ul id="nav-mobile" class="sidenav" ref="sidenav">
            <!-- this link will only be active at `/` -->
            <router-link to="/" tag="li" active-class="active" exact><a :class="nav.sidenav">||||||||</a></router-link>
            <router-link to="/histoire" tag="li" active-class="active"><a :class="nav.sidenav">Histoire</a></router-link>
            <router-link to="/couverture" tag="li" active-class="active"><a :class="nav.sidenav">La couv</a></router-link>
            <router-link to="/plat_verso" tag="li" active-class="active"><a :class="nav.sidenav">Le dos</a></router-link>
            <router-link to="/extraits" tag="li" active-class="active"><a :class="nav.sidenav">Extraits</a></router-link>
            <router-link to="/actualites" tag="li" active-class="active"><a :class="nav.sidenav">Actu</a></router-link>
            <router-link to="/auteurs" tag="li" active-class="active"><a :class="nav.sidenav">Auteurs</a></router-link>
            <router-link to="/bonus" tag="li" active-class="active"><a :class="nav.sidenav">Bonus</a></router-link>
            <router-link to="/disponibilites" tag="li" active-class="active"><a :class="nav.sidenav">Dispo</a></router-link>
          </ul>
          <a href="#" data-target="nav-mobile" class="sidenav-trigger black-text"><i class="material-icons">menu</i></a>
        </div>
      </nav>
      <h1 class="center" v-if="displayLogo"><img class="responsive-img" :alt="siteTitle" src="@/assets/bandeau.jpg"></h1>
      <!-- Larger than mobile size navigation -->
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
      <router-view />
    </main>
    <footer class="footer container">
      <div class="center">
        <img class="responsive-img" :alt="siteTitle" src="@/assets/bandeau.jpg" v-if="!displayLogo">
        <div>{{ copyright }} -<a href="http://www.editions-rjtp.com/" target="_blanck">{{ editeur }}</a>-</div>
        <br>
        <!-- avatar -->
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
    data() {
      return {
        siteTitle: 'Le déradicaliseur', // h1
        displayLogo: true, //  conditional logo rendering
        // nav
        nav: {
          wavesEffect: 'waves-effect waves-yellow', // CSS transition
          sidenav: 'sidenav-close waves-effect waves-yellow', // CSS transition
        },
        // footer
        footer: 'footer content', // in case we need
        copyright: null, // default
        editeur: 'Les Editions R.J.T.P.',
        // toast
        toast: {
          config: {
            isToast: true, // conditional toast rendering
            TimeOut: 3000 // show toast after 
          },    
          text: 'Bonjour, je suis le premier rôle de la BD "Le déradicaliseur". J\'interviens là où personne ne veut aller !' // toast string
        },
      }
    },
    mounted() {

      this.isLogo() // function call

      // Sidenav instanciation + config position
      new M.Sidenav(this.$refs.sidenav, {
        edge: 'left',
      })
      // Toast 
      // get current route name 
      const currentRoute = this.$router.currentRoute.name      
      // show toast according to config boolean and route
      setTimeout(() => {
        if (this.toast.config.isToast && currentRoute == 'home') {
          // set toast img src
          let src = window.location.origin
          const path = '/img/avatar_100x100.d7492356.jpg'
          src += path
          // init toast
          M.toast({
            // config toast
            html: `<img class="responsive-img avatar" src="${src}" alt="Avatar"><p>${this.toast.text}</p>`,
            classes: 'black',
            displayLength: 6000,
            // callback when toast leaves
            completeCallback: () => {
              /* eslint-disable */
              console.log('CarouselExtraits.vue says : Your toast was dismissed')
            }
          })
        }
      }, this.toast.config.TimeOut)
    },
    watch: { // watch for route change
      '$route'() {
        this.isLogo() // function call
      }
    },
    methods: {
      // Display logos according to route
      isLogo() {
        // get current route name
        const currentRoute = this.$router.currentRoute.name
        // set this.displayLogo according to current route name
        currentRoute == 'home' ? this.displayLogo = true : this.displayLogo = false
      }
    },
    created() {
      // set current year
      let date = new Date()
      date = date.getFullYear()
      this.copyright = `Copyright ${date}`
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

 .banner h1{
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
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
    background-color: #CCCCCC;
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

  /* Toast */

  .toast p {
    margin-left: 20px;
  }
</style>