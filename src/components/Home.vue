<template>
  <article class="home">
    <header class="article-header">
      <h1 class="article-title">{{title }}</h1>
    </header>
  </article>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      title: "Home component title"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
