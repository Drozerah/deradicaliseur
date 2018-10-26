<template>
    <div class="row">
        <div class="flex-container">
            <!-- <div class="red" style="width:567px;">test</div>
            <div class="red" style="width:567px;">test</div> -->

            <div class="carousel-wrapper z-depth-2">
                <div class="carousel carousel-slider center" ref="carousel" id="carouselExtrait">

                    <!-- <div class="carousel-fixed-item center">
                        <a class="btn waves-effect white grey-text darken-text-2">button</a>
                    </div> -->
                    <div class="carousel-item white-text">
                        <!-- <h4>First Panel</h4> -->
                        <img class="responsive-img" alt="Le déradicaliseur image BD" src="@/assets/planche_45_ST.jpg">
                        <p class="white-text">{{ items.item1 }}</p>
                    </div>
                    <div class="carousel-item white-text">
                        <!-- <h4>Second Panel</h4> -->
                        <img class="responsive-img" alt="Le déradicaliseur image BD" src="@/assets/planche_24_ST.jpg">
                        <p class="white-text">{{ items.item2 }}</p>
                    </div>
                    <!--  <div class="carousel-item green white-text" href="#three!">
                        <h2>Third Panel</h2>
                    <p class="white-text">This is your third panel</p>
                    </div>
                    <div class="carousel-item blue white-text" href="#four!">
                        <h2>Fourth Panel</h2>
                        <p class="white-text">This is your fourth panel</p>
                    </div> -->
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
        },
        methods: {

        },
        data() {
            return {
                title: 'Ceci est un slider',
                items: {
                    item1: "(extrait planche 45)",
                    item2: "(planche 24)",
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
<style>
    /* Not in scope */

    #carouselExtrait .indicators .indicator-item {
        background-color: grey;
    }

    #carouselExtrait .indicators .indicator-item.active {
        background-color: yellow;
    }
</style>