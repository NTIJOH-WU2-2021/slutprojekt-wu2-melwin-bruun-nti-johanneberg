<template>
  <div class="home">
    <Home/>
    <p>Home</p> 
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/landing_page.vue'

export default {
  name: 'Home',
  components: {
    Home
  }
}
</script>
