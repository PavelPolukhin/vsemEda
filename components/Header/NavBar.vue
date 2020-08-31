<template>
  <div class="navBar-container">
    <div class="navBar">
      <div class="navBar-all">
        <router-link class="navBar-item" to="/" active-class="active-link">Все</router-link>
      </div>
      <div class="navBar-links">
        <router-link class="navBar-item" v-for="item in navBar_links" :key="item.id" :to="item.link" active-class="active-link">
          {{item.title}}
        </router-link>
      </div>
      <div class="navBar-more">
        <el-button>
          Ещё <i class="mdi mdi-chevron-down"></i>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      navBar_links(){
        return this.$store.getters.NAVBAR_LINKS
      }
    }
  }
</script>

<style>

</style>
