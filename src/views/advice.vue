<template>
<div class="rubrik"> 
  <h1>Random advice for you</h1>
</div>
<img alt="advice bild" class="picture" src="../assets/advice.jpg"/>
<div class="main">
  <Jokes :theitem = 'advice' , :title = 'title'/>
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
  },

  data(){
    return{
      advice: {},

      title: {}
    }

  },

  created(){

      fetch("https://api.adviceslip.com/advice").then((response) => {
        if (!response.ok) {
          throw new Error("reload page.");
        } else {
          // Annars konverterar vi svaret till ett JS objekt
          return response.json();
        }        
      }).then((advice) => {
        console.log(advice.slip.advice)
        this.advice = advice.slip.advice
      })

  
      this.title = "The best advice you can get"
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
  

}

</style>