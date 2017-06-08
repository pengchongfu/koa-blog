<template>
  <div>
    <p>{{ list }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Index',
  data () {
    return {
      list: []
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
</style>
