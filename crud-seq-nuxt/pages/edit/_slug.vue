<template>
  <v-main>
        <!-- alert input  -->
          <div>
              <v-alert
                v-model="alert"
                dismissible
                color="red"
                border="left"
                elevation="2"
                colored-border
                icon="mdi-alert-circle"
              >
                Please Make Sure All The Required Fields Are Filled Out ! Thank you 🙏 .
              </v-alert>
              <!-- alert delete -->
              <v-alert
                v-model="alertup"
                dismissible
                color="green"
                border="left"
                elevation="2"
                colored-border
                icon="mdi-alert-circle"
              >
                User data updated successfully .
              </v-alert>
          </div>

        <!-- end alert -->


        <v-form  ref="form" v-model="valid" lazy-validation  > 

          <v-row>
            <v-col cols="12" md="12"  >
                <!-- fname -->
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                label="First name"
                required
              ></v-text-field>
                <!-- lname -->
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                label="Last name"
                required
              ></v-text-field>
                <!-- email -->
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
                <!-- phone number -->
                <v-text-field
                v-model="number"
                :rules="numberRules"
                label="Phone Number"
                required
              ></v-text-field>
                <!-- submit btn -->
              <v-btn type="submit" class="mr-4" @click.prevent="validate" :disabled="!valid" > Update User  </v-btn>
            </v-col>
          </v-row>
        </v-form>

  </v-main>
</template>

<script>
import axios from 'axios'
export default {

         async asyncData({ params }){
         let base_url='http://localhost:3001/byid/'

         const User = await axios.get(base_url+params.slug)
         return {User }
     },
data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      number:'',
      email:'',
      nameRules: [
        v => !!v || 'Field required',
        v => v.length <= 30 || 'Name must be less than 10 characters',
      ],
      numberRules: [
        (v) => !!v || 'Field required',
        (v) => !isNaN(v) || 'Must enter numbers only',
      ],
      emailRules: [
        v => !!v || 'Field required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      base_url:"http://localhost:3001",
      alert:false,
      alertup:false
    }),

      methods:{
        //   add data to database
      async UpdateData(){
        //   the body could be constructed outside of the request if that's how you roll 
        // i like my shit to be this way lol
             await axios.put(this.base_url+'/edit/'+this.User.data.id,{
                  	"fname":this.firstname,
                    "lname":this.lastname,
                    "email":this.email,
                    "number":this.number
              }).then(()=>{
                  this.alertup=true
                  this.lastname=''
                  this.firstname=''
                  this.number=''
                  this.email=''
                  this.resetValidation()
                   setTimeout(() => {
                     this.alertup=false
                     this.$router.push('/')
                   }, 2000);
                  
              })
      },
    //   validating the form's inputs
        validate () {
            // ok
            if(this.$refs.form.validate()){
                this.UpdateData()
            }else{ //something's wrong
                this.alert = true
            }
      },
    //   resetting the validation after clearing data from form to avoid false positives
        resetValidation () {
        this.$refs.form.resetValidation()
      },
      gettingDataReady(){
      this.firstname=this.User.data.fname
      this.lastname=this.User.data.lname
      this.number=this.User.data.number
      this.email=this.User.data.email
      }

  },
  created(){
      this.gettingDataReady()
  }
}

</script>

