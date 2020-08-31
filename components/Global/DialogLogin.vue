<template>
  <div class="dialog-container" v-if="dialog_login" @click.self="closeDialogLogin">
    <div class="login">
      <div class="login__header">
        <div class="login__header-title">Вход в личный кабинет</div>
        <div class="login__header-close" @click="closeDialogLogin"><i class="mdi mdi-close"></i></div>
      </div>
      <div class="form">
        <div class="form__item">
          <div class="form__item-title">Введите номер телефона</div>
          <div class="form__item-input">
            <masked-input v-model="phone" mask="\+\7 (111) 1111-11" placeholder="7 ("/>
          </div>
        </div>
        <div class="form__item">
          <div class="form__item-input">
            <el-input placeholder="Введите код из СМС-сообщения"></el-input>
          </div>
        </div>
        <div class="form__item">
          <div class="form__item-input">
            <el-checkbox v-model="agreement">
              Указывая номер телефона, я принимаю условия <router-link to="/">пользовательского соглашения</router-link>
            </el-checkbox>
          </div>
        </div>
      </div>
      <div class="login-button">
        <el-button :disabled="!agreement" type="success" @click="logIn">Войти</el-button>
      </div>
      <div class="register">
        В первый раз? <router-link to="/">Зарегистрироваться</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import MaskedInput from 'vue-masked-input'

  export default {
    components: {
      MaskedInput
    },
    data() {
      return {
        phone: '',
        agreement: false,
      }
    },
    computed: {
      dialog_login() {
        return this.$store.getters.DIALOG_LOGIN
      }
    },
    methods: {
      closeDialogLogin() {
        this.$store.commit('TOGGLE_DIALOG_LOGIN');
      },
      logIn(){
        this.$store.commit('LOG_IN');
        this.$store.commit('TOGGLE_DIALOG_LOGIN');
      }
    }
  }
</script>

<style>

</style>
