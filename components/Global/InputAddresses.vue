<template>
  <div class="input-search-address">
    <el-input
      placeholder="Введите адрес доставки"
      v-model="inputAddress"
      @focus="showResult = true"
      @blur="showResult = false"
      :prefix-icon="`mdi ${icon}`"
      clearable>
    </el-input>
    <div class="results" v-if="showResult && inputAddress.length">
      <div class="item" v-for="item in addresses.suggestions" :key="item.id" @click="clickResult(item.value)">
        {{item.value}}
      </div>
    </div>

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
    data() {
      return {
        showResult: false,
      }
    },
    computed: {
      inputAddress: {
        get() {
          return this.$store.state.inputSearchAddress
        },
        set(value) {
          this.$store.commit('SET_INPUT_SEARCH_ADDRESS', value);
          this.$store.dispatch('GET_ADDRESSES', value);
        }
      },
      addresses() {
        return this.$store.getters.ADDRESSES
      },
    },
    methods: {
      clickResult: (value) => {

      }
    }
  }
</script>

<style>

</style>
