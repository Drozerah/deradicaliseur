<template>
    <div>
        <div 
            class="flex-container main-content" 
            :class="$mq"
        >

            <div class="carousel-wrapper flex-item flex-container">
                <!-- btn left -->
                <div 
                    class="nav-btn nav-btn-left black-text" 
                    v-show="$mq == 'laptop' || $mq == 'desktop'"
                    @click="prev" 
                >
                    <i class="material-icons md-45">keyboard_arrow_left</i>
                </div>
                <!-- carousel materialize -->
                <div class="carousel carousel-slider carousel-items z-depth-2" 
                    id="carouselExtrait"
                    ref="carousel" 
                >
                    <!-- Items -->
                    <!-- optional btn -->
                    <div 
                        class="carousel-fixed-item" 
                        v-if="config.isBtn"
                    >
                        <a class="btn waves-effect white grey-text darken-text-2">button</a>
                    </div>
                    <!-- items img -->
                    <div v-for="item in items" 
                        :key="item.id"
                    >
                        <div class="carousel-item">
                            <img 
                                class="responsive-img"
                                :src="item.src"
                                :alt="imgAlt" 
                            >
                            <p>- {{ item.title }} -</p>
                        </div>
                    </div>
                </div>
                <!-- btn right -->
                <div 
                    class="nav-btn nav-btn-right black-text" 
                    v-show="$mq == 'laptop' || $mq == 'desktop'"
                    @click="next" 
                >
                    <i class="material-icons md-45">keyboard_arrow_right</i>
                </div>
            </div>
            <div class="text-content flex-item">
                <p>Bonjour,
                <br>
                <br>
                Comme vous allez pouvoir le constater, <span class="bold">les extraits et les planches disponibles <span v-if="$mq =='desktop'">ci-contre</span><span v-else>ci-dessus</span> et sur ce site, ne comportent pas les bulles de texte</span>. Pourquoi ?
                C'est une BD sans bulle ? Non, 94 % des cases en sont pourvues.<br>
                Est-ce un oubli ?<br>
                Est-ce par "fourberie" ? Oui et Non.</p>

                <p>
                Nous avons choisi de ne pas mettre le texte parce qu'il serait forcément sorti de son contexte, et il serait difficile de saisir la progression, la stratégie du déradicaliseur.
                Pour voir le texte correspondant à chaque image ci-dessous, il faudra donc aller chez votre libraire favori, et au pire, le commander sans savoir de quoi il en retourne. Mais rassurez vous, nous avons travaillé avec beaucoup d'application pour que vous ne regrettiez pas d'avoir cette BD entre les mains. 
                </p>

                <p>
                Comme pour la précédente BD "Joanne Lebster, le début d'un nouveau monde", réalisée par Mathieu et Marc, préparez-vous à aller où peu de BDs (de part leur theme) vous ont déjà emmené.
                :)
                </p>
                <!-- DESKTOP only -->
                <b v-if="$mq == 'desktop'">
                    <br>
                    <div class="divider"></div>
                    <br>
                </b>

                <p> 
                voir aussi :   
                </p>    
                <div class="center">
                    <router-link to="entrevue" class="btn waves-effect waves-yellow grey lighten-1 black-text darken-text-2">Interview présentation de l'ouvrage</router-link>
                </div>
            </div>
        </div>
        <!-- Modal Trigger -->
        <div 
            data-target="modal1" 
            class="fixed-action-btn modal-trigger" 
            v-if="$mq == 'desktop' || $mq == 'laptop'"
        >
            <a class="btn-floating btn-large waves-effect waves-light yellow">
                <i class="material-icons black-text">
                    <!-- announcement -->
                    <!-- new_releases -->
                    <!-- contact_support -->
                    <!-- settings -->
                    <!-- live_help -->
                    <!-- wallpaper -->
                    <!-- image -->
                    <!-- add_photo_alternate -->
                    <!-- photo_library -->
                    <!-- photo -->
                    <!-- mms -->
                    compare_arrows                 
                </i>
            </a>
        </div>
        <!-- Modal Structure -->
        <div id="modal1" 
            class="modal bottom-sheet black center" 
            ref="modal"
        >
            <i class="material-icons modal-close white-text">close</i>     
            <div class="modal-content white-text">Utilisez les flèches latérales de votre clavier <b class="material-icons white-text">arrow_left</b><b class="material-icons white-text">arrow_right</b> pour visionner les images/extraits</div>
        </div>
    </div>
</template>
<script>
    import M from 'materialize-css'
    export default {
        name: 'CarouselExtraits',
        mounted() {
            // init carousel
            new M.Carousel(this.$refs.carousel, {
                indicators: true,
                fullWidth: true,
                noWrap: false // infinite cycle through items
            })
            // init modal
            new M.Modal(this.$refs.modal, {
                opacity:0.2,
                outDuration:250,
                preventScrolling: false
            })
            // launch auto cycle (config)
            if(this.config.isStartCycle === true){
                // set carousel auto first item
                this.CarouselInstance.set(1)
                // then return to item 1
                setTimeout(()=>{ 
                    this.CarouselInstance.set(0) 
                }, 1500)
            }
            //
            window.addEventListener('keydown', this.getKeyCode)
        },
        computed:{
            // get data object items length
            carouselItemsLength(){
                return Object.keys(this.items).length
            },
            // get carousel instance
            CarouselInstance(){
                return M.Carousel.getInstance(this.$refs.carousel)
            }
        },
        methods: {
            prev(){
                //alert('prev')
                // move to next item
                this.CarouselInstance.prev()
            },
            next(){
                //alert('next')
                // move to next item
                this.CarouselInstance.next()                
            },
            getKeyCode(e){               
                // if current route = extraits and media queries = desktop or laptop 
                if ((this.$router.currentRoute.name === 'extraits') && (this.$mq == 'desktop' || this.$mq == 'laptop')) {                    
                    // if event key code === 39 (arrow left)
                    if (e.which === 39) {
                        this.next()
                    }
                    // if event key code === 39 (arrow left)
                    if (e.which === 37) {
                        this.prev()
                    }
                }               
            }
        },
        data() {
            return {
                imgAlt: 'Le déradicaliseur image BD', 
                    items: [
                    { 
                        title: "couverture",
                        src: require('@/assets/la_couv_01_96dpi.jpg')
                                        
                    },
                    {  
                        title: "extrait planche 45",
                        src: require('@/assets/planche_45_ST.jpg')
                    },
                    {   
                        title: "planche 24",
                        src: require('@/assets/planche_24_ST.jpg')
                    },
                    {   
                        title: "planche 71",
                        src: require('@/assets/planche_71_ST.jpg')
                    },
                    {   
                        title: "planche 40",
                        src: require('@/assets/planche_40_ST.jpg')
                    },
                    {   
                        title: "verso",
                        src: require('@/assets/le_deradicaliseur_dos.jpg')
                    }                    
                    ],
                config: {
                    isBtn: false,
                    isStartCycle: true
                }
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /* FlexBox main element */
    .flex-container {
        display: flex;
        flex-direction: row;
        justify-content: center;      
        flex-wrap: wrap;
    }

    .main-content .carousel {
        cursor: pointer;
        /* default */
        margin-bottom: 25px;
    }

    /* Items */

    .main-content .carousel .carousel-item img {
        max-width: 100%;
    }

    /* carousel nav */
    .main-content .carousel .carousel-item p {
        color:#333;
        text-align: center;
        margin: 0px;
    }

    /* arrow nav */

    .material-icons.md-45 {
        font-size: 45px;
        line-height: 45px;
    }

    .main-content .carousel-wrapper .nav-btn i::selection {
        background: transparent;
    }

    /* .nav-btn transition */
    .main-content .carousel-wrapper .nav-btn i {
        opacity :0.5;
        transition: opacity .6s;
    }
    
    .main-content .carousel-wrapper .nav-btn i:hover {
        cursor: pointer;
        opacity: 1;
        transition: opacity .4s;
    }

    /* Text content */

    .main-content .text-content {
        width: 567px;
        /* flexBox rule */
        align-self: flex-start;
        color: #333;
    }

    .main-content .text-content p .bold {
        font-weight: 700;
    }
    
    .main-content .text-content .btn {
        text-transform: none;
    }

    /* RESPONSIVE RULES */

    /* 
        Media Queries Breackpoints :
        mobile: 600,
        tablet: 992,
        laptop: 1200,
        desktop: Infinity,
    */

    /* MOBILE */
    /* carousel size */
    .mobile .carousel{
        height: 560px !important;
        width: 350px !important;
    }

    /* text content */
    .mobile .text-content{
        width: 330px;
        padding:0px 10px 0px 0px;
    }

    /* DESKTOP - TABLET - LAPTOP */
    /* carousel size */
    .desktop .carousel, .tablet .carousel, .laptop .carousel {
        height: 850px !important;
        width: 567px !important;
    }

    /* DESKTOP */
    /* text content */
    .desktop .text-content {
        padding-left: 10px;
    }

    /* TABLET LAPTOP */
    /* text content */
    .tablet .text-content, .laptop .text-content {
        padding:0px 20px 0px 20px;
    }

    /* MODAL */
    #modal1 i{
        float: right;
        position: relative;
        top:10px;
        right: 10px;
    }

    #modal1 i::selection, #modal1 .modal-content::selection{
        background: transparent;
    }

    #modal1 .modal-content {
        font-size: 20px;
    }
    #modal1 .modal-content b {
        vertical-align: -6px;
    }

</style>

<!-- Add none "scoped" attribute to extend CSS to global app styles -->
<style>   
    /* Carousel  */
    #carouselExtrait .indicators .indicator-item {
        background-color: grey;
    }

    #carouselExtrait .indicators .indicator-item.active {
        background-color: yellow;
    }
</style>