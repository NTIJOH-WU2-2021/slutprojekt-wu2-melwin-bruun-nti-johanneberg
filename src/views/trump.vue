<template>
  <div class="rubrik">
    <h1>Search for trump quotes</h1>
  </div>
  <img alt="trump bild" class="picture1" src="../assets/trump.jpg"/>
  <form class="pure-form">
    <input
      type="text"
      class="pure-input"
      placeholder="Sök på key word"
    />
  </form>
  <div class="main">
    <Jokes/>
  </div>
</template>

<script>
// @ is an alias to /src

import Jokes from '@/components/jokesTemplate.vue'


export default {
  name: 'trump',
  components: {
    Jokes
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