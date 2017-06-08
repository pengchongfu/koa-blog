<template>
  <v-layout row wrap>
    <v-flex xs8 offset-xs2>
      <div class="title">{{ this.title }}</div>
      <div class="user">{{ this.user }}</div>
      <div class="content" v-html="marked(content)"></div>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'
import marked from 'marked'

export default {
  data () {
    return {
      title: '',
      user: '',
      content: ''
    }
  },
  methods: {
    marked (value) {
      return marked(value)
    }
  },
  created () {
    axios.get(`/api/article/${this.$route.params.title}`)
    .then((data) => {
      this.title = data.data.title
      this.content = data.data.content
      this.user = data.data.user
    })
  }
}
</script>

<style scoped>
.title {
  text-align: center;
  margin: 50px 0 0;
}
.user {
  text-align: center;
  line-height: 30px;
}
.content p {
  line-height: 50px;
}
</style>
