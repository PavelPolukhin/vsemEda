<template>
  <div class="input-search">
    <el-input
      placeholder="Поиск"
      v-model="inputSearch"
      :prefix-icon="`mdi ${icon}`"
      clearable>
    </el-input>
  </div>
</template>

<script>
  export default {
    props: {
      icon: {
        type: String,
        required: false,
      }
    },
    data(){
      return{
        inputSearch: ''
      }
    }
  }
</script>

<style>

</style>
