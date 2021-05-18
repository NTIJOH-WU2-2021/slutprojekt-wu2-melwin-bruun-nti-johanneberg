<template>
  <div class="rubrik">
    <h1>Random Chuck Noris Jokes</h1>
  </div>

   <div class="nav" v-if="joke">
     <h2>Random joke of the day</h2>
      <p>{{randomjoke}}</p>
   </div>



  <img alt="CHUCK bild" class="picture" src="../assets/chucknorris.png"/>

   <h2>please select a category and we repli with a joke</h2>
   <form class="pure-form">
    <select 
      type="text"
      class="pure-select"
      @keyup.enter="onsearchclick"
      v-model="search"
    >

    <option>--- Select Category ---</option>
     <option value="animal">animal</option>
     <option value="career">career</option>
     <option value="celebrity">celebrity</option>
     <option value="dev">dev</option>
     <option value="food">food</option>
     <option value="fashion">fashion</option>
     <option value="explicit">explicit</option>
     <option value="history">history</option>
     <option value="money">money</option>
     <option value="movie">movie</option>
     <option value="music">music</option>
     <option value="political">political</option>
     <option value="religion">religion</option>
     <option value="science">science</option>
     <option value="sport">sport</option>
     <option value="travel">travel</option>
    </select>
  
    <button  @click=" onsearchclick">🔍</button>
  </form>

  <div class="main" v-if="joke">
    <Jokes :theitem = 'joke' , :title = 'title' />
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
      joke: {},

      title: {},

      randomjoke:{}
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
      }).then((ChuckJoke) => {
        console.log(ChuckJoke.value)
        this.randomjoke = ChuckJoke.value
        
      })

  
      fetch("https://api.chucknorris.io/jokes/categories").then((response) => {
        if (!response.ok) {
          throw new Error("reload page.");
        } else {
          // Annars konverterar vi svaret till ett JS objekt
          return response.json();
        }        
      }).then((categories) => {
        console.log(categories)
        
        
      })
      this.title = "The best chuck noris joke"
  },
  methods:{

    onsearchclick() {
      fetch(`https://api.chucknorris.io/jokes/random?category=${this.search}`).then((response) => {
        if (!response.ok) {
          throw new Error("reload page.");
        } else {
          // Annars konverterar vi svaret till ett JS objekt
          return response.json();
        }        
      }).then((ChuckJoke) => {
        console.log(ChuckJoke.value)
        this.joke = ChuckJoke.value
      })

  }
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