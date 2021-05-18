<template>
    <h2>{{title}}</h2>
    <p>{{theitem}}</p>


    
</template>



<script>
// @ is an alias to /src


export default {
  name: 'Jokes',
  components: {
   
  },
  props:{
    theitem: Object,
    title: Object
     

  }
}
</script>