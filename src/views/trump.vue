<template>
  <div class="rubrik">
    <h1>This is an trump page</h1>
  </div>
  <div class="main">
    <TrumpQuotes/>
  </div>
</template>

<script>
// @ is an alias to /src

import TrumpQuotes from "@/components/TrumpQuotes.vue";


export default {
  name: 'trump',
  components: {
    TrumpQuotes
  }
}
</script>