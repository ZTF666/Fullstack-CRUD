<template>
  <v-main>
        <!-- alert -->
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
            <v-file-input
            required
            show-size
            v-model="img"
            label="File input"
            :rules="imgRules"
          ></v-file-input>
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
        <v-btn type="submit" class="mr-4" @click.prevent="validate" :disabled="!valid" > Add User  </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-main>
</template>

<script>
import axios from 'axios'
import bucket from '../firestore/storage'
export default {
data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      number:'',
      email:'',
      img:[],
      nameRules: [
        v => !!v || 'Field required',
        // v => v.length <= 60 || 'Name must be less than 60 characters',
      ],
      imgRules: [
        v => !!v || 'Field required',

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

   
    }),

      methods:{
      uploadData(){
      
            let fname =this.firstname
            let lname =this.lastname
            let email =this.email
            let img =this.img
            let number =this.number
            let baseurl = this.base_url

          
            let stg = bucket.ref('/images/'+this.img.name)
            let uptask = stg.put(img)
            uptask.on('state_changed',(snapshot)=>{
              let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                  console.log(progress + ' <===')
            },
            (error)=>{ console.log(error.message) },
            ()=>{ uptask.snapshot.ref.getDownloadURL().then(async (url)=>{
                  //   add data to database
              await axios.post(baseurl+'/insert',{
                          "fname":fname,
                          "lname":lname,
                          "email":email,
                          "number":number,
                          'image':url
                            }).then(()=>{ this.$router.push('/') })
              })})
      },

    //   validating the form's inputs
        validate () {
            // ok
            if(this.$refs.form.validate()){
              this.uploadData()
 
            }else{ //something's wrong
                this.alert = true
            }
      },
    //   resetting the validation after clearing data from form to avoid false positives
        resetValidation () {
        this.$refs.form.resetValidation()
      },
      }

  }


</script>

