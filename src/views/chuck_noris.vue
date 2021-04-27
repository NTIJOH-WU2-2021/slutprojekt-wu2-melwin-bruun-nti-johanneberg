<template>
  <div class="rubrik">
    <h1>This is an norris page</h1>
  </div>
  <div class="main">
    <ChuckNorisJokes/>
  </div>
</template>

<script>
// @ is an alias to /src

import ChuckNorisJokes from "@/components/chuck_noris_jokes.vue";


export default {
  name: 'chuck',
  components: {
    ChuckNorisJokes
  }
}
</script>