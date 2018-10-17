<template>
  <article class="disponible">
    <header class="article-header">
      <h1 class="article-title">{{ title }}</h1>
    </header>
  </article>
</template>

<script>
export default {
  name: 'Disponible',
  data(){
    return{
      title: "Disponibilités component title"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>