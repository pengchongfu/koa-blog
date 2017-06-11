<template>
  <v-layout row wrap>
    <v-flex xs8 offset-xs2>
      <v-card v-for="(item, index) in list" class="card" :key="index">
        <v-card-row class="blue darken-1">
          <v-card-title>
            <span class="white--text">{{ item.title }}</span>   
          </v-card-title>
        </v-card-row>
        <v-card-text>
          <v-card-row height="75px">
            <div>
              <div>{{ item.user }}</div><div v-html="marked(item.content.slice(0, 30))"></div>
            </div>
          </v-card-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-row actions>
          <v-btn flat class="green--text darken-1" @click.native="goToDetail(item.title)">查看</v-btn>
        </v-card-row>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'
import marked from 'marked'

export default {
  name: 'Index',
  data () {
    return {
      list: []
    }
  },
  methods: {
    marked (value) {
      return marked(value)
    },
    goToDetail (title) {
      this.$router.push(`/${title}`)
    }
  },
  created () {
    axios.get('/api/article/')
    .then(data => {
      this.list = data.data
    })
  }
}
</script>

<style scoped>
.card {
  margin: 50px 0;
}
</style>
