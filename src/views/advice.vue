<template>
  <div class="about">
    <h1>This is an Advice page</h1>
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