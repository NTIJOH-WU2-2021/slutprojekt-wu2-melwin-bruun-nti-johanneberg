<template>
    <h2>{{theitem.title}}</h2>
    <p>{{theitem.value}}</p>


    
</template>



<script>
// @ is an alias to /src


export default {
  name: 'Jokes',
  components: {
   
  },
  props:{
    theitem: Object
     

  }
}
</script>