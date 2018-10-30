<template>
  <article class="Entrevue">
    <header class="article-header">
      <h1 class="article-title">{{ title }}</h1>
    </header>
  </article>
</template>

<script>
export default {
  name: 'Entrevue',
  data(){
    return{
      title: "Entrevue component title"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>