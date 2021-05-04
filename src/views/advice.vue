<template>
<div class="rubrik"> 
  <h1>Random advice for you</h1>
</div>
<img alt="advice bild" class="picture" src="../assets/advice.jpg"/>
<div class="main">
  <Jokes/>
</div>
</template>


<script>
// @ is an alias to /src
/*to do anropa apiet vid sökning skicka som en prop till jokes*/
/*gör created i dem andra fallen*/ 
import Jokes from '@/components/jokesTemplate.vue'

export default {
  name: ' advice_for_you',
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
  background-color: lightgrey

}

</style>