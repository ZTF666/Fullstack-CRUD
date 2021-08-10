<template>
  <v-main>
          <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="dark palevioletred--text"
      class="hidden-xs-only"
    >
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2 img"
        contain
        :src="logo"
        transition="scale-transition"
        width="40"
      />
      <v-toolbar-title v-text="title" />


      <v-spacer />
      <v-btn text class="palevioletred--text"  href="/" >Home</v-btn>
      <v-btn text class="palevioletred--text"  href="/addUser" >Add User</v-btn>
      <v-btn text class="palevioletred--text"  href="/inspire" >Me</v-btn>
      <v-btn icon class="palevioletred--text"  href="https://github.com/ZTF666/" target="_blank"><v-icon>mdi-github</v-icon></v-btn>
    </v-app-bar>

    <!-- mobile app bar -->
    <v-app-bar :clipped-left="clipped" fixed app color="dark" class="hidden-sm-and-up">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2 img"
        contain
        :src="logo"
        transition="scale-transition"
        width="40"
      />
      <v-toolbar-title v-text="title" class="palevioletred--text" />
      <v-spacer></v-spacer>
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <!-- <v-list-item> -->
          <v-list-item-content>


            <!-- <v-spacer></v-spacer> -->
            <v-btn text class="palevioletred--text"  href="/" >Home</v-btn>
            <v-btn text class="palevioletred--text"  href="/addUser" >Add User</v-btn>
            <v-btn text class="palevioletred--text"  href="/inspire" >Me</v-btn>
            <v-btn icon class="palevioletred--text" href="https://github.com/ZTF666" target="_blank"><v-icon>mdi-github </v-icon></v-btn>
            
          </v-list-item-content>

          <!-- </v-list-item> -->
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- end mobile app bar -->
  </v-main>
</template>

<script>
export default {

    data(){
        return{
            logo:'https://ztf-shop.web.app/9.png',
            title:'Nuxt-Mysql-Express-Node',
            clipped: false,
        }
    }

}
</script>

<style>

</style>