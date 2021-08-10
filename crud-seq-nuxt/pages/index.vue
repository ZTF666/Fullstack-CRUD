<template>
  <v-app id="inspire">
    <center><h1>DATA</h1></center>
    <v-main>
      <v-container>
        <v-row>
          <v-col v-for="frag in data" :key="frag.id" cols="4" >
            <v-card class="mx-auto" color="palevioletred" dark max-width="400" >
                  <v-card-title>
                    <h3>ID : </h3>
                    <span class="black--text text-h6 font-weight-heavy"> {{frag.id}}</span>
                  </v-card-title>
                  <v-card-text class="text-h5 black--text">
                    {{frag.email}}
                  </v-card-text>
                  <v-card-actions>
                    <v-list-item class="grow">
                      <v-list-item-avatar color="grey darken-3">
                        <v-img class="elevation-6" alt=""
                          :src="frag.image"
                        >
                        <template v-slot:placeholder>
                            <v-row
                              class="fill-height ma-0"
                              align="center"
                              justify="center"
                            >
                              <v-progress-circular
                                indeterminate
                                color="grey lighten-5"
                              ></v-progress-circular>
                            </v-row>
                        </template>
                        </v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="pointer black--text" >
                          {{frag.fname}}  {{frag.lname}}
                          </v-list-item-title>
                      </v-list-item-content>
                      <v-row align="center" justify="end" >
                        <span class="subheading mr-2 black--text">N°: 0{{frag.number}}</span>
                      </v-row>
                    </v-list-item>
                  </v-card-actions>
                  <v-card-actions class="justify-center">
                    <v-btn  @click="OpenProfile(frag.id)">View Profile</v-btn>
                  </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <!-- floaty button/image for decoration -->
    <!-- <v-img class="float" src="https://ztf-shop.web.app/9.png" height="80" width="80" /> -->
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
  
  data(){
    return{
      data:[],
      base_url:'http://localhost:3001/select'
    }
    
  },
  methods:{
     async fetchData(){
          let response = await axios.get( this.base_url  )
          this.data=response.data
    },
    OpenProfile(id){
      this.$router.push('/user/'+id)
    }
  },
  created(){
    this.fetchData()
  },


}
</script>

<style scoped>

.pointer{
  cursor: pointer;
}
.pointer:hover{
  color: gold;
}


.float{
  cursor: pointer;
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:transparent;
	color:#FFF;
	border-radius:50px;
	text-align:center;
	/* box-shadow: 2px 2px 3px rgb(157, 71, 197); */
}

.my-float{
	margin-top:22px;
  cursor: pointer;
}

</style>