<template>
    <h1>SignUp</h1>

    <div class="register">
        <input type="text" name="" id="f" placeholder="First Name" v-model="first">
        <input type="text" name="" id="m" placeholder="Middle Name" v-model="middle">
        <input type="text" name="" id="l" placeholder="Last Name" v-model="last">
        <input type="text" name="" id="b" placeholder="Born Year" v-model="born">
        <input type="email" name="" id="e" placeholder="Email" v-model="email">
        <input type="password" name="" id="p" placeholder="Password" v-model="password">
        <button v-on:click="signup">SignUp</button>
    </div>

 


</template>

<script>

import axios from 'axios'
export default {
  name: 'Signup',
  props: {

  },
  data(){
      return {
          first:"",
          middle:"",
          last:"",
          born:"",
          email:"",
          password:"",
          id: "" ,
      
        
      }
  },
  methods:{
     
      async signup(){
          let result = await axios.post('http://localhost:4000/api/user/register',{
                first:this.first,middle:this.middle,last:this.last,born:this.born,email:this.email,password:this.password,id:String(Math.floor((Math.random() * 1000) + 1))
                })  
            console.log(result.data.token)



          await axios.post('http://localhost:4000/api/user/emaillink',{ // email
               email:this.email,
               token:result.data.token
           })

           alert("Check Your Mail")
           this.$router.push({name:"login"})
        //    const myInterval =setInterval( async () => {  // check verification
        //         let re = await axios.get(`http://localhost:4000/api/user/getByName/${this.first}`)
        //         if(re.data.data[0].Verify)    {
        //             alert("You Verify")
        //             localStorage.setItem("user",result.data.token)
        //             localStorage.setItem("name",result.data.name)
        //             this.$router.push({name:"Home"})
        //             clearInterval(myInterval)
        //         }else {
        //             console.log(re.data.data[0])
        //         }
                     
        //   }, 10000);

                  
            // alert("Data Added Successfully...")   
            // console.log(result.data)
            // localStorage.setItem("user",result.data.token)
            // localStorage.setItem("name",result.data.name)
            // this.$router.push({name:"Home"})
       
      }
  },
  mounted(){
      let user = localStorage.getItem('user')
      if(user){
          this.$router.push({name:"Home"}) 
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
