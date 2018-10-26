<template>
    <div class="row">
        <div class="flex-container">
            <div class="carousel-wrapper z-depth-2">
                <!-- carousel -->
                <div class="carousel carousel-slider center" ref="carousel" id="carouselExtrait">
                    <div class="carousel-fixed-item center" v-if="config.isBtn">
                        <a class="btn waves-effect white grey-text darken-text-2">button</a>
                    </div>
                    <div class="carousel-item white-text">
                        <img class="responsive-img" :alt="imgAlt" src="@/assets/planche_45_ST.jpg">
                        <p class="white-text">{{ items.item1 }}</p>
                    </div>
                    <div class="carousel-item white-text">
                        <img class="responsive-img" :alt="imgAlt" src="@/assets/planche_24_ST.jpg">
                        <p class="white-text">{{ items.item2 }}</p>
                    </div>
                    <div class="carousel-item white-text">
                        <img class="responsive-img" :alt="imgAlt" src="@/assets/planche_71_ST.jpg">
                        <p class="white-text">{{ items.item4 }}</p>
                    </div>
                    <div class="carousel-item white-text">
                        <img class="responsive-img" :alt="imgAlt" src="@/assets/planche_40_ST.jpg">
                        <p class="white-text">{{ items.item2 }}</p>
                    </div>
                </div>
            </div>
            <p>|||||||||||||</p>
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

            // Toast

            if (this.toast.isToast) {
                // get toast image url
                let src = window.location.origin
                let path = '/img/avatar_100x100.d7492356.jpg'
                src += path
                // init toast
                M.toast({
                    html: `<img class="responsive-img avatar" src="${src}" alt="Avatar"><p>${this.toast.text}</p>`,
                    classes: 'black',
                    displayLength: 6000,
                    completeCallback: () => {
                        /* eslint-disable */
                       console.log('CarouselExtraits.vue says : Your toast was dismissed') 
                    } 

                })
            }

        },
        methods: {

        },
        data() {
            return {
                imgAlt: 'Le déradicaliseur image BD',
                items: {
                    item1: "(extrait planche 45)",
                    item2: "(planche 24)",
                    item3: "(planche 71)",
                    item4: "(planche 40)",
                },
                toast:{
                    isToast: true,
                    text: 'Bonjour, je suis le premier rôle de la BD "Le déradicaliseur". J\'interviens là où personne ne veut aller !'
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
    .flex-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .carousel {
        cursor: pointer;
    }

    .carousel p {
        padding: 0px;
        margin: 0px;
        color: #333 !important;
    }

    img {
        max-width: 100%;
    }

    /* Mobile Devices <= 600px */

    @media only screen and (max-width: 600px) {
        p {
            color: red;
        }

        #carouselExtrait {
            height: 560px !important;
            width: 350px !important;
        }
    }


    /* Tablet an up Devices > 600px */

    @media only screen and (min-width: 601px) {

        #carouselExtrait {
            height: 850px !important;
            width: 567px !important;
        }
    }



    /* Tablet Devices > 600px & <= 992px */

    @media only screen and (min-width: 601px) and (max-width: 992px) {
        p {
            color: blue;
        }
    }

    /* Desktop Devices > 992 & <= 1200px */

    @media only screen and (min-width: 993px) and (max-width: 1200px) {

        p {
            color: purple;
        }

    }

    /* Large Desktop Devices  > 1200px */

    @media only screen and (min-width: 1201px) {

        p {
            color: greenyellow;
        }

    }
</style>

<!-- Add none "scoped" attribute to extend CSS to global app styles -->
<style>
    
    #carouselExtrait .indicators .indicator-item {
        background-color: grey;
    }

    #carouselExtrait .indicators .indicator-item.active {
        background-color: yellow;
    }

    .toast p {
        margin-left:20px;
    }
</style>