<template>
 
 <h1>Hello, Welcome to Home Page</h1>
</template>

<script>



export default {
  name: 'Home',
  props: {

  },
  components:{

  },
   mounted(){
      let user = localStorage.getItem('user')
      if(!user){
          this.$router.push({name:"signup"}) 
      }
  }
 
}
</script>