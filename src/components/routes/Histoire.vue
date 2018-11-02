<template>
  <article 
    class="histoire" 
    :class="$mq"
  >
    <header class="article-header">
      <h1 class="article-title">{{ title }}</h1>
    </header>
    <div class="content flex-container">
      <p class="text-content flex-item">
          Après un entretien avec des responsables du département de la justice, un déradicaliseur est autorisé à communiquer avec un détenu.<br> 
          Ils vont ainsi parler de presque tout, sans tabou,<br>
          quitte à remettre en question l'impensable...
      </p>
      <br>
      <div class="z-depth-2 img-card flex-item">
        <img class="responsive-img"  src="@/assets/planche_27_ST.jpg">
        <div class="center">- extrait planche 27 -</div>
      </div>
      <div class="flex-item">
      <br>
      <br>
      <div class="divider"></div>
      <br>
      <p>
      Plusieurs extraits sont disponibles en suivant le lien ci-dessous :
      </p>
      <br>
      <div class="center">
          <router-link to="extraits" class="btn waves-effect waves-yellow grey lighten-1 black-text darken-text-2">Extraits</router-link>
      </div>
      </div>
      <br>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Histoire',
  data(){
    return{
      title: "L'histoire"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* FlexBox */

.flex-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.flex-item {
  color:#333;
  width: 567px;
  padding: 10px;
}

.text-content {
  margin-top: 0px;
  padding-top: 0px;
}

.mobile .flex-item {
  width: 350px;
}

.img-card {
  /* padding: 10px 10px 20px 10px; */
  padding-bottom: 15px;
}

</style>
