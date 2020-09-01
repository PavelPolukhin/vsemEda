<template>
  <div class="slider-container">
    <div class="slider">
      <div class="slider__header">
        <h2>Предложения недели</h2>
      </div>
      <hooper :settings="hooperSettings">
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
        <slide v-for="item in sliderList" :key="item.id" class="slide-wrapper">
          <SliderItem
            :name="item.name"
            :delivery_price="item.delivery_price"
            :delivery_time="item.delivery_time"
            :minimal_price="item.minimal_price"
            :rate="item.rate"
            :image="item.image"
          >
          </SliderItem>
        </slide>
      </hooper>
    </div>
  </div>
</template>

<script>
  import {Hooper, Slide,  Navigation as HooperNavigation} from 'hooper';
  import 'hooper/dist/hooper.css';

  export default {
    components: {
      Hooper,
      Slide,
      HooperNavigation
    },
    computed: {
      sliderList() {
        return this.$store.getters.SLIDER_LIST
      }
    },
    data() {
      return {
        hooperSettings: {
          itemsToShow: 3,
          infiniteScroll: true,
        }
      }
    }
  }
</script>

<style>

</style>
