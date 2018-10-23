<template>
<div>  
    <div class="hello">
        <div class="carousel" ref="carousel">
            <div v-for="elem in images" :key="elem.id">
                <a class="carousel-item" :href="elem.link" @click='click'><img :src="elem.img" :alt="elem.link"></a>
            </div>
        </div>
    </div>
    <button @click="prev">{{ prevTxt }}</button>
    <button @click="next">{{ nextTxt }}</button>
</div>

</template>
<script>
  import M from 'materialize-css'
  export default {
    name: 'Carousel',
    mounted () {
 /* eslint-disable */
        var go = function(){
                console.log('test')
            } 
        new M.Carousel(this.$refs.carousel, {
            //indicators: true,
            numVisible: 2,
            onCycleTo: go(),
            fullWidth: false,
            dist:0,
        });
    },
    methods:{
        click(e){
            e.preventDefault()
        },
        next(){
            M.Carousel.getInstance(this.$refs.carousel).next()          
        },
        prev(){
            M.Carousel.getInstance(this.$refs.carousel).prev() 
        }    
    },
    data () {
      return {
        nextTxt: ">",
        prevTxt: "<",
        msg: 'Welcome to Your Carousel Component',
        images: [
          {
            img: 'https://le-deradicaliseur.fr/la_couv_01_96dpi.jpg',
            link: '#'
          },
          {
            img: 'https://le-deradicaliseur.fr/le_deradicaliseur_dos.jpg',
            link: '#'
          },
                    {
            img: 'https://le-deradicaliseur.fr/la_couv_01_96dpi.jpg',
            link: '#'
          },
          {
            img: 'https://le-deradicaliseur.fr/le_deradicaliseur_dos.jpg',
            link: '#'
          }
          
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
    background-color: aqua;
}
</style>