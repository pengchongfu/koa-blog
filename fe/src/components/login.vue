<template>
  <v-layout row wrap>
    <v-flex xs8 offset-xs2>
      <v-card class="grey lighten-4 elevation-0 login" v-if="status === 'login'">
        <v-card-text>
          <v-container fluid>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>邮箱</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  label="邮箱"
                  v-model="email"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>密码</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  label="密码"
                  v-model="password"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-btn light primary @click.native="submit()">登录</v-btn>
            </v-layout>
            <v-layout>
              <v-btn flat primary @click.native="status = 'register'">注册</v-btn>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>
      <v-card class="grey lighten-4 elevation-0 login" v-if="status === 'register'">
        <v-card-text>
          <v-container fluid>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>邮箱</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  label="邮箱"
                  v-model="email"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>密码</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  label="密码"
                  v-model="password"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>密码</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  label="确认密码"
                  v-model="confirm"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-btn light primary @click.native="register()">注册</v-btn>
            </v-layout>
            <v-layout>
              <v-btn flat primary @click.native="status = 'login'">登录</v-btn>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      status: 'login',
      email: '',
      password: '',
      confirm: ''
    }
  },
  methods: {
    submit () {
      axios.post('/api/login', {
        email: this.email,
        password: this.password
      })
      .then(data => {
        if (data.data) {
          this.$router.push('/admin')
        }
      })
    },
    register () {
      axios.post('/api/register', {
        email: this.email,
        password: this.password
      })
      .then(data => {
        if (data.data) {
          this.$router.push('/admin')
        }
      })
    }
  }
}
</script>

<style scoped>
.login {
  margin-top: 200px;
}
</style>
