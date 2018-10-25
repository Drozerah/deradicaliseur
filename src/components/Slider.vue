<template>
    <div>  
        <div class="slider-wrapper">
            <div class="carousel carousel-slider center" ref="slider">
                <div class="carousel-fixed-item center">
                    <a class="btn waves-effect white grey-text darken-text-2">button</a>
                </div>
                <div class="carousel-item red white-text" href="#one!">
                    <h2>First Panel</h2>
                    <p class="white-text">This is your first panel</p>
                </div>
                <div class="carousel-item amber white-text" href="#two!">
                    <h2>Second Panel</h2>
                    <p class="white-text">This is your second panel</p>
                </div>
                <div class="carousel-item green white-text" href="#three!">
                    <h2>Third Panel</h2>
                    <p class="white-text">This is your third panel</p>
                </div>
                <div class="carousel-item blue white-text" href="#four!">
                    <h2>Fourth Panel</h2>
                    <p class="white-text">This is your fourth panel</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import M from 'materialize-css'
  export default {
    name: 'Slider',
    mounted () {    
        new M.Carousel(this.$refs.slider, {
            //indicators: true,
            fullWidth: true
        })
    },
    methods:{
        
    },
    data () {
      return {
          title: 'Ceci est un slider'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.slider {
    color: red;
}

</style>