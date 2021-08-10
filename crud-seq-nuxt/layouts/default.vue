<template>
  <v-app dark>

      <AppBar />
 
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer
      
      permanent
      app
      color="palevioletred--text"
      
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {


     
    }
  }
}
</script>
