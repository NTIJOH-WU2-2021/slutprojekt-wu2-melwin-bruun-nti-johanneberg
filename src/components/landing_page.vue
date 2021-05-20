<template>
  <div class="box">
    <h2>Dette är en Chuck Noris Jokes API.</h2>
    <img alt="CHUCK bild" class="picture" src="../assets/chucknorris.png"/>
    <router-link to="/Chuck_Noris_Jokes">Chuck Noris Jokes</router-link> 
    <p> Detta apiet ger dig chuck norris skämt efter varje knap tryckningen. Där du kan skratta med chuck han själv.</p>
  </div>
  <div class="box">
    <h2>Dette är en Trump Quotes API.</h2>
    <img alt="trump bild" class="picture1" src="../assets/trump.jpg"/>
    <router-link to="/TrumpQuotes">Trupms quotes</router-link> 
    <p>Detta apiet ger dig Trump quotes. Bara trycka på knappen så kommer the bästa av trump</p>
  </div>
  <div class="box">
    <h2>Dette är en Advice For you API.</h2>
    <img alt="advice bild" class="picture" src="../assets/advice.jpg"/>
    <router-link to="/Advice_For_you">Advice For you</router-link> 
    <p>Du får en random advice. Vilken kan förbätra din vardag</p>
  </div>
</template>

<script>

export default {
  name: 'LandningPage',
  components:{
    
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  font-weight: bold;
  color: #2c3e50;
}
a:hover {
  color: #42b983;
}

.picture{
  height: 20rem;
  width: 30rem;
}

.picture1{
  height: 25rem;
  width: 20rem;
}

.box{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}

</style>
