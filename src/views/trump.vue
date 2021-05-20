<template>
  <div class="rubrik">
    <h1>Randomize for trump quotes</h1>
  </div>
  <img alt="trump bild" class="picture1" src="../assets/trump.jpg"/>
  <form class="pure-form">
  
    <button class="myButton"  @click="radomize"> genegera qoute</button>
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
  

}
.myButton {
	box-shadow:inset 0px 1px 0px 0px #f29c93;
	background:linear-gradient(to bottom, #fe1a00 5%, #ce0100 100%);
	background-color:#fe1a00;
	border-radius:6px;
	border:1px solid #d83526;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #b23e35;
}
.myButton:hover {
	background:linear-gradient(to bottom, #ce0100 5%, #fe1a00 100%);
	background-color:#ce0100;
}
.myButton:active {
	position:relative;
	top:1px;
}

        


</style>