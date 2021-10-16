<template>
  <v-main class="up">
  <div>
  <!-- alert -->
  <div>
    <v-alert  v-model="alertup" dismissible
      color="red" border="left" elevation="2"
      colored-border icon="mdi-alert-circle" >
      User Deleted Successfully .
    </v-alert>
  </div>
   <!-- end alert -->
   <center> <h1>USER DATA</h1> </center>

    <v-card class="mx-auto mt-15" max-width="400" >
    <v-img
      class="white--text align-end"
      height="300px"
      :src="User.image"
    >
    </v-img>

    <v-card-subtitle class="pb-0 mb-5">
      <div><h1>ID :  <span class="data"> {{User.id}}</span></h1></div>
    </v-card-subtitle>

    <v-card-text class="text--primary mt-2">
      <div><h1>First Name :  <span class="data"> {{User.fname}}</span></h1></div>
    </v-card-text>
    <v-card-text class="text--primary mt-2">
      <div><h1>Last Name :  <span class="data"> {{User.lname}}</span></h1></div>
    </v-card-text>
    <v-card-text class="text--primary mt-2">
      <div><h1>E-mail :  <span class="data"> {{User.email}}</span></h1></div>
    </v-card-text>
    <v-card-text class="text--primary mt-2">
      <div><h1>Phone :  <span class="data"> {{User.number}}</span></h1></div>
    </v-card-text>
    <v-card-actions class="justify-center">
      <v-btn  nuxt :to="'/edit/'+User.id" color="green">Edit</v-btn>
      <v-btn @click="deleteUser(User.id)" color="red">Delete</v-btn>
    </v-card-actions>
  </v-card>
</div>
            
</v-main>
</template>

<script>
export default {
     async asyncData({ $axios,params }){
         const User = await $axios.$get('get/'+params.slug)
         return { User }
     },
  data(){
      return{
      alertup:false
  }},
  methods:{
      async deleteUser(id){
          this.alertup=true
         await  this.$axios.$delete('delete/'+id).then(()=>{
             setTimeout(() => {
                 this.alertup=false
                 this.$router.push('/')
             }, 2000);
         })
      }
  }

}
</script>

<style scoped>
/* shitty fix for testing only  */
.up{
  margin-top: -200px;
}
.data{
  color: palevioletred;
}

</style>