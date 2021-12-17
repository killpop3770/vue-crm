<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
            id="email"
            type="text"
            v-model.trim="email"
            v-bind:class="{error: this.v$.}"
        >
        <label for="email">Email</label>
        <small class="helper-text invalid">Email</small>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            v-model="password"
        >
        <label for="password">Пароль</label>
        <small class="helper-text invalid">Password</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import {email, required, minLength} from '@vuelidate/validators'

export default {
  name: "Login",
  setup() {
    return {
      v$: useVuelidate(),
    }
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6)},
  },
  methods: {
    submitHandler() {
      this.$router.push('/');
    }
  },
}
</script>

<style scoped>

</style>