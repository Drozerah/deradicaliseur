<template>
  <article class="extraits">
    <header class="article-header">
      <h1 class="article-title">{{ title }}</h1>
            <CarouselExtraits/>
    </header>
  </article>
</template>

<script>

import CarouselExtraits from '@/components/tools/CarouselExtraits.vue'
export default {
  name: 'Extraits',
    components: {
      CarouselExtraits
  },
  data(){
    return{
      title: "Extraits"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>