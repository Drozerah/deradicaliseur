<template>
  <article class="actualites">
    <header class="article-header">
      <h1 class="article-title">{{ title }}</h1>
    </header>
  </article>
</template>

<script>
export default {
  name: 'Actualites',
  data(){
    return{
      title: "Actualités component title"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>