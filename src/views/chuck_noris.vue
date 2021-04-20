<template>
  <div class="about">
    <h1>This is an norris page</h1>
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