<template>
  <div class="rubrik">
    <h1>Random Chuck Noris Jokes</h1>
  </div>
  <img alt="CHUCK bild" class="picture" src="../assets/chucknorris.png"/>
  <div class="main">
    <Jokes/>
  </div>
</template>

<script>
// @ is an alias to /src

import Jokes from '@/components/jokesTemplate.vue'
/*to do anropa apiet vid sökning skicka som en prop till jokes*/
/*gör created i dem andra fallen*/ 

export default {
  name: 'chuck',
  components: {
    Jokes
  }
}
</script>


<style scoped>

.picture{
  height: 20rem;
  width: 30rem;
}


.main{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 30rem;
  height: 30rem;
  background-color: lightblue;

}

</style>