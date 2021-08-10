<template>
        <v-container class="up">
          <v-layout row wrap class="d-flex justify-center">
          <v-flex xs12 sm12 md12>
             <v-row class="d-flex justify-center">
              <div>
                            <!-- alert -->
                        <div>
                            <v-alert
                              v-model="alertup"
                              dismissible
                              color="red"
                              border="left"
                              elevation="2"
                              colored-border
                              icon="mdi-alert-circle"
                            >
                              User Deleted Successfully .
                            </v-alert>
                        </div>
                            <!-- end alert -->
                        <div >
                              <v-img :src="User.data.image" :aspect-ratio="16 / 9">
                              <template v-slot:placeholder>
                                <v-row  class="fill-height ma-0" align="center" justify="center" >
                                  <v-progress-circular indeterminate color="grey lighten-5"
                                  ></v-progress-circular>
                                </v-row>
                              </template>
                              </v-img>
                              <h1>First Name : <small class="data"> {{User.data.fname}}</small></h1>
                              <h1>Last Name : <small class="data"> {{User.data.lname}}</small> </h1>
                              <h1>Email : <small class="data"> {{User.data.email}}</small> </h1>
                              <h1>Phone : <small class="data"> {{User.data.number}}</small> </h1>
                              <v-btn @click="edit(User.data.id)" color="green">Edit</v-btn>
                              <v-btn @click="deleteUser(User.data.id)" color="red">Delete</v-btn>
                        </div>
              </div>
             </v-row>
          </v-flex>
          </v-layout>
        </v-container>
</template>

<script>
import axios from 'axios'
export default {
     async asyncData({ params }){
         let base_url='http://localhost:3001/byid/'

         const User = await axios.get(base_url+params.slug)
         return {User }
     },
  
  data(){
      return{
      delete_url:"http://localhost:3001/delete/",
      alertup:false
  }},
  methods:{
      edit(id){
          this.$router.push('/edit/'+id)
      },
      async deleteUser(id){
          this.alertup=true
         await  axios.delete(this.delete_url+id).then(()=>{
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