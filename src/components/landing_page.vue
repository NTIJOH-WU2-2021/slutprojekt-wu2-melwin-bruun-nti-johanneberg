<template>
    <h2>Dette är en Chuck Noris Jokes API.</h2>
    <img class="picture" :src="require('./assets/chucknorris.png')"/>

    <h2>Dette är en Trump Quotes API.</h2>
    <img class="picture" :src="require('./assets/trump.jpg')"/>

    <h2>Dette är en Advice For you API.</h2>
    <img class="picture" :src="require('./assets/advice.jpg')"/>
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
  color: #42b983;
}

.picture{
  height: 20rem;
  width: 30rem;
}
</style>
