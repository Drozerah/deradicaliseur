<template>
  <article class="home">
    <header class="article-header row">
      <h1 class="article-title" v-show="isTitle">{{ title }}</h1>
      <div class="flex-container s12 m12 l12">
        <div class="flex-item"><img class="responsive-img" alt="Le déradicaliseur image BD" src="../assets/le_deradicaliseur_p.jpg"></div>
        <p class="flex-item">
          Lui, <br>
          il va au coeur des mécaniques <br>
          et qu'importe si certains rouages <br>
          n'aiment pas être exposés...
        </p>
      </div>
    </header>
  </article>
</template>

<script>
  export default {
    name: 'Home',
    data(){
      return{
        title: "Le déradicaliseur",
        isTitle: false
        
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

header p {
  font-size: 20px;
  /* font-size: 2vw; */
  text-align: left;
  /* font-weight: 400; */
}

.flex-container{
  display: flex;
  justify-content: center;
  align-items: center; 
}
</style>
