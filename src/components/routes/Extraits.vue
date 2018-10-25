<template>
  <article class="extraits">
    <header class="article-header">
      <h1 class="article-title">{{ title }}</h1>
            <Slider/>
            <br>
            <br>
            <br>
    </header>
  </article>
</template>

<script>

import Slider from '@/components/Slider.vue'
export default {
  name: 'Extraits',
    components: {
      Slider
  },
  data(){
    return{
      title: "Extraits component title"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>