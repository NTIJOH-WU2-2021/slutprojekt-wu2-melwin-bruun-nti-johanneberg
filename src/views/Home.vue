<template>
  
  <div class="rubrik">
      <h1>Tre APIER, tre mögligheter för storhet</h1>
  </div>
  <div class="main">
    <LandningPage/>
  </div>
  
</template>

<script>
// @ is an alias to /src
import LandningPage from '@/components/landing_page.vue'

export default {
  name: 'Home',
  components:{
    LandningPage
  }
}
</script>

<style scoped>
main{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>