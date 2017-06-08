<template>
  <div>
    <v-toolbar class="green" light>
      <v-toolbar-side-icon light></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-sm-and-down">博客</v-toolbar-title>
    </v-toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
