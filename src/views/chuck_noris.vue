<template>
  <div class="rubrik">
    <h1>Random Chuck Noris Jokes</h1>
  </div>

   <div class="nav" v-if="joke">
     <h2 >Random joke of the day</h2>
      <p>{{randomjoke}}</p>
   </div>



  <img alt="CHUCK bild" class="picture" src="../assets/chucknorris.png"/>

   <h2>please select a category and we reply with a joke</h2>

<div class="select">
   <select 
      type="text"
      @keyup.enter="onsearchclick"
      v-model="search"
    >

    <option value="">--- Select Category ---</option>
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
  
    
</div>
<button class="myButton" @click=" onsearchclick">🔍</button>

   
    
 
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

.nav{
  background-color: #f39c12;
  margin: auto;
  width: 50rem;
  box-shadow:inset 0px 1px 0px 0px #fce2c1;
	background:linear-gradient(to bottom, #ffc477 5%, #fb9e25 100%);
	background-color:#ffc477;
	border-radius:18px;
	border:1px solid #eeb44f;
  margin-bottom: 2rem;
}

.nav h2 {    
    font-size: 24px;
}

.nav p {
  font-size: 20px;
}

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

.myButton {
	box-shadow:inset 0px 1px 0px 0px #fce2c1;
	background:linear-gradient(to bottom, #ffc477 5%, #fb9e25 100%);
	background-color:#ffc477;
	border-radius:18px;
	border:1px solid #eeb44f;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #cc9f52;
}
.myButton:hover {
	background:linear-gradient(to bottom, #fb9e25 5%, #ffc477 100%);
	background-color:#fb9e25;
}
.myButton:active {
	position:relative;
	top:1px;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: #2c3e50;
  background-image: none;
  font-size: 15px ;
}
/* Remove IE arrow */
select::-ms-expand {
  display: none;
}
/* Custom Select */
.select {
  position: relative;
  display: flex;
  align-items: center;
  width: 20rem;
  height: 3em;
  line-height: 3;
  background: #2c3e50;
  overflow: hidden;
  border-radius: .25em;
  margin: auto
}
select {
  flex: 1;
  padding: 0 .5em;
  color: #fff;
  cursor: pointer;
  
}
/* Arrow */
.select::after {
  content: '\25BC';
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 1em;
  background: #34495e;
  cursor: pointer;
  pointer-events: none;
  -webkit-transition: .25s all ease;
  -o-transition: .25s all ease;
  transition: .25s all ease;
}
/* Transition */
.select:hover::after {
  color: #f39c12;
}



</style>