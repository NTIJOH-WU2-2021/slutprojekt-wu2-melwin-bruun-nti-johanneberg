<template>
  <div class="rubrik">
    <h1>Randomize for trump quotes</h1>
  </div>
  <img alt="trump bild" class="picture1" src="../assets/trump.jpg"/>
  <form class="pure-form">
  
    <button  @click="radomize"> genegera qoute</button>
  </form>
  <div class="main">
    <Jokes :theitem = 'quote' , :title = 'title'/>
  </div>
</template>

<script>
// @ is an alias to /src

import Jokes from '@/components/jokesTemplate.vue'


export default {
  name: 'trump',
  components: {
    Jokes
  },
   

   data(){
    return{
      quote: {},

      title: {}
    }

  },
  created(){
    this.title = " The best donald trumps quotes"
  },

  methods:{

    radomize() {
      fetch(`https://www.tronalddump.io/random/quote`).then((response) => {
        if (!response.ok) {
          throw new Error("reload page.");
        } else {
          // Annars konverterar vi svaret till ett JS objekt
          return response.json();
        }        
      }).then((quote) => {
        console.log(quote)
        this.quote = quote.value
      })

  }
  }

  /*to do anropa apiet vid sökning skicka som en prop till jokes*/
  /*methoed lägga till för onclick*/
  
}
</script>


<style scoped>

.picture{
  height: 20rem;
  width: 30rem;
}

.picture1{
  height: 25rem;
  width: 20rem;
}

.main{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 30rem;
  height: 30rem;
  background-color: sandybrown;

}


</style>