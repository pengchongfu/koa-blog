<template>
  <v-layout row wrap class="admin">
    <v-flex xs8 offset-xs2>
      <v-layout row>
        <v-flex xs4>
          <v-subheader>标题</v-subheader>
        </v-flex>
        <v-flex xs8>
          <v-text-field
            label="标题"
            v-model="title"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <textarea ref="mde"></textarea>
      <v-btn light class="green--text darken-1" @click.native="submit">提交</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import SimpleMDE from 'simplemde'
import axios from 'axios'
import 'simplemde/dist/simplemde.min.css'

export default {
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    submit () {
      axios.post('/api/article', {
        title: this.title,
        content: this.content
      })
      .then(data => {
        console.log(data.data)
      })
    }
  },
  mounted () {
    let simplemde = new SimpleMDE({
      element: this.$refs.mde
    })
    simplemde.codemirror.on('change', () => {
      this.content = simplemde.value()
    })
  }
}
</script>

<style scoped>
.admin {
  padding: 56px 0 0;
}
</style>
