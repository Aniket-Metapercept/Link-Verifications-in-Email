<template>

    <h1>Login</h1>
    <div class="register">
        
        <input type="email" name="" id="e" placeholder="Email" v-model="email">
        <input type="password" name="" id="p" placeholder="Password" v-model="password">
        <button v-on:click="login">Login</button>
    </div>
    <small>Dont have Account? <router-link to="/signup">signup</router-link> </small>

</template>

<script>

import axios from 'axios'
export default {
  name: 'Login',
 
   props: {
     
 
   },
   data(){
      return {
          email:"",
          password:"",
      }
    },
    methods:{

      async login(){
          
          let url = `http://localhost:4000/api/user/login`
          let result = await axios.post(url,{email:this.email,password:this.password})
          console.log(result.data)  

          if(result.data.token){
              
              let re = await axios.get(`http://localhost:4000/api/user/getByName/${result.data.name}`)
                if(re.data.data[0].Verify)    {
                    alert("You Verify")
                    localStorage.setItem("user",result.data.token)
                    localStorage.setItem("name",result.data.name)
                    this.$router.push({name:"Home"})
                   
                }else {
                    await axios.post('http://localhost:4000/api/user/emaillink',{ // email
                        email:this.email,
                        token:result.data.token
                    })
                    alert("Kindly Check Your Mail")
                }
          } else {
              alert("Invalid User")
          }

        }
    }


  }
</script>


<style scoped>
    img{
        width: 100px;
    }
    .register input{
        width: 300px;
        height: 40px;
        padding-left:20px;
        display: block;
        margin-bottom: 30px;
        margin-left: auto;
        margin-right: auto;
        border: 1px solid skyblue;
    }

    .register button{
        width: 320px;
        height: 40px;
        border: 1px solid skyblue;
        color: white;
        background: skyblue;
        cursor: pointer;
        margin-bottom: 5px;
    }
</style>
