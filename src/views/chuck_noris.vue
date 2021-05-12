<template>
  <div class="rubrik">
    <h1>Random Chuck Noris Jokes</h1>
  </div>
  <img alt="CHUCK bild" class="picture" src="../assets/chucknorris.png"/>
  <div class="main">
    <Jokes :thejoke = 'joke' />
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
  },
  data(){
    return{
      joke: {}
    }

  },

  created(){

    fetch("https://api.chucknorris.io/jokes/random").then((response) => {
        if (!response.ok) {
          throw new Error("reload page.");
        } else {
          // Annars konverterar vi svaret till ett JS objekt
          return response.json();
        }        
      }).then((joke) => {
        console.log(joke)
        this.joke = joke.value
      })

  

  },
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