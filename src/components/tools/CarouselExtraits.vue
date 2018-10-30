<template>
    <div>
        <div class="flex-container main-content" :class="$mq">
            <div class="carousel-wrapper flex-item">
                <!-- carousel materialize -->
                <div class="carousel carousel-slider carousel-items z-depth-2" ref="carousel" id="carouselExtrait">
                    <!-- Items -->
                    <!-- optional btn -->
                    <div class="carousel-fixed-item" v-if="config.isBtn">
                        <a class="btn waves-effect white grey-text darken-text-2">button</a>
                    </div>
                    <!-- items img -->
                    <div class="carousel-item">
                        <img class="responsive-img" :alt="imgAlt" src="@/assets/la_couv_01_96dpi.jpg">
                        <p>{{ items.item1 }}</p>
                    </div>
                    <div class="carousel-item">
                        <img class="responsive-img" :alt="imgAlt" src="@/assets/planche_45_ST.jpg">
                        <p>{{ items.item2 }}</p>
                    </div>
                    <div class="carousel-item">
                        <img class="responsive-img" :alt="imgAlt" src="@/assets/planche_24_ST.jpg">
                        <p>{{ items.item3 }}</p>
                    </div>
                    <div class="carousel-item">
                        <img class="responsive-img" :alt="imgAlt" src="@/assets/planche_71_ST.jpg">
                        <p>{{ items.item4 }}</p>
                    </div>
                    <div class="carousel-item">
                        <img class="responsive-img" :alt="imgAlt" src="@/assets/planche_40_ST.jpg">
                        <p>{{ items.item5 }}</p>
                    </div>
                    <div class="carousel-item">
                        <img class="responsive-img" :alt="imgAlt" src="@/assets/le_deradicaliseur_dos.jpg">
                        <p>{{ items.item6 }}</p>
                    </div>
                </div>
            </div>
            <div class="text-content flex-item">
                <p>Bonjour,
                <br>
                <br>
                comme vous allez pouvoir le constater, <span class="bold">les extraits et les planches disponibles <span v-if="$mq =='desktop'">ci-contre</span><span v-else>ci-dessus</span> et sur ce site, ne comportent pas les bulles de texte</span>. Pourquoi ?
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
    </div>
</template>
<script>
    import M from 'materialize-css'
    export default {
        name: 'CarouselExtraits',
        mounted() {
            new M.Carousel(this.$refs.carousel, {
                indicators: true,
                fullWidth: true,
                noWrap: true
            })
        },
        methods: {

        },
        data() {
            return {
                imgAlt: 'Le déradicaliseur image BD',
                items: {
                    item1: "- couverture -",
                    item2: "- extrait planche 45 -",
                    item3: "- planche 24 -",
                    item4: "- planche 71 -",
                    item5: "- planche 40 -",
                    item6: "- verso -"
                },
                config: {
                    isBtn:false
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
    padding-left: 50px;
}

/* TABLET LAPTOP */
/* text content */
.tablet .text-content, .laptop .text-content {
    padding:0px 20px 0px 20px;
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