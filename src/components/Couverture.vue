<template>
  <article class="couverture">
    <header class="article-header">
      <h1 class="article-title">{{ title }}</h1>
    </header>
  </article>
</template>

<script>
export default {
  name: 'Couverture',
  data(){
    return{
      title: "Couverture component title"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>