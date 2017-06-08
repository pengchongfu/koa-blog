<template>
  <div>
    <v-toolbar class="green top" light>
      <v-toolbar-side-icon light></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-sm-and-down">博客</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon light @click.native="backToHome" v-if="$route.path !== '/'">
        <v-icon>reply</v-icon>
      </v-btn>
    </v-toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    backToHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.top {
  position: fixed;
}
</style>
