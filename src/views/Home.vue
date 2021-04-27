<template>
  
  <div class="rubrik">
      <h1>This is a start page</h1>
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
