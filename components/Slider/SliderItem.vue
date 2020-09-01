<template>
  <div class="slide">
    <div class="slide__top">
      <div class="slide__top-img">
        <img :src="image" alt="">
        <div class="favorites">
          <img src="@/static/images/vaforites.svg" alt="">
        </div>
      </div>
    </div>
    <div class="slide__bottom">
      <div class="slide__bottom-left">
        <div class="name">{{name}}</div>
        <div class="row">
          <div class="delivery-price">
            <img src="@/static/images/delivery.png" alt="">
            {{delivery_price}}₽
          </div>
          <div class="delivery-time">
            <img src="@/static/images/time.png" alt="">
            {{delivery_time}} мин
          </div>
          <div class="minimal-price">
            <img src="@/static/images/coin.png" alt="">
            {{minimal_price ? minimal_price : '₽₽'}}₽
          </div>
        </div>
      </div>
      <div class="slide__bottom-right">
        <div class="rate">
          {{rate}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
   props:{
     name: String,
     image: String,
     delivery_price: String,
     delivery_time: String,
     minimal_price: String,
     rate: String,
   }
  }
</script>

<style>

</style>
