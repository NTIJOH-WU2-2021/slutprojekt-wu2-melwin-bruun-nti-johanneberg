<template>
<div class="rubrik"> 
  <h1>This is an Advice page</h1>
</div>
<div class="main">
  <AdviceForYou/>
</div>
</template>


<script>
// @ is an alias to /src
import AdviceForYou from '@/components/advice_for_you.vue'

export default {
  name: ' advice_for_you',
  components: {
    AdviceForYou
  }
}
</script>