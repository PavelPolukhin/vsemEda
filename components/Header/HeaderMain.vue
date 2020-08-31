<template>
  <div class="header-container">
    <Logo/>
    <InputAddresses icon="mdi-map-marker-outline"/>
    <InputSearch icon="mdi-magnify"/>
    <div class="actions">
      <div class="dropdown-container" v-if="login_status">
        <div class="dropdown-icon" @click="dropdown = !dropdown">
          <i class="mdi mdi-account-outline" ></i>
        </div>
        <div class="dropdown" v-if="dropdown">
          <div class="dropdown__item">
            <div class="dropdown__item-icon"><i class="mdi mdi-account-outline"></i></div>
            <div class="dropdown__item-title">Личные данные</div>
          </div>
          <div class="dropdown__item">
            <div class="dropdown__item-icon"><i class="mdi mdi-map-marker-check-outline"></i></div>
            <div class="dropdown__item-title">Адреса доставки</div>
          </div>
          <div class="dropdown__item">
            <div class="dropdown__item-icon"><i class="mdi mdi-playlist-check"></i></div>
            <div class="dropdown__item-title">Предыдущие заказы</div>
          </div>
          <div class="dropdown__log-out">
            <div class="dropdown__log-out-icon"><i class="mdi mdi-logout"></i></div>
            <div class="dropdown__log-out-title" @click="logOut">Выход</div>
          </div>
        </div>
      </div>
      <div class="login" v-else @click="openDialogLogin">
        <div class="login-icon"><i class="mdi mdi-login"></i></div>
        <div class="login-title">Войти</div>
      </div>
      <div class="basket">
          <i class="mdi mdi-basket"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      login_status() {
        return this.$store.getters.LOGIN_STATUS
      }
    },
    data() {
      return {
        dropdown: false,
      }
    },
    methods: {
      openDialogLogin(){
        this.$store.commit('TOGGLE_DIALOG_LOGIN');
      },
      logOut(){
        this.$store.commit('LOG_OUT');
        this.dropdown = false;
      }
    }
  }
</script>

<style>

</style>
