<script setup lang="js">
import {useHead} from "@unhead/vue";

import Product_swiper from "./components/global/sections/Product_swiper.vue";
import Hero from "./components/global/sections/Hero.vue";
import FilterCatalogue from "./components/global/sections/Filter-Catalogue.vue";

useHead({
  "link": [
    {
      "rel": "preconnect",
      "href": "https://fonts.googleapis.com",
    },
    {
      "rel": "preconnect",
      "href": "https://fonts.gstatic.com",
      "crossOrigin": "crossOrigin"
    },
    {
      "rel": "stylesheet",
      "href": "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
    },
    {
      "rel": "stylesheet",
      "href":"_normalize.scss"
    }
  ]
})
const swiper_names = {name1: "Хиты продаж", name2: "Новинки", name3: "Акции"}

</script>

<template>
  <Header></Header>
  <Hero></Hero>
  <FilterCatalogue></FilterCatalogue>

  <Product_swiper :swiper_name=swiper_names.name1></Product_swiper>
  <Product_swiper :swiper_name=swiper_names.name2></Product_swiper>
  <Product_swiper :swiper_name=swiper_names.name3></Product_swiper>

</template>

<style lang="scss">
._container{
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 15px;
}
* {
  border: 0;
  box-sizing: border-box;
  font-family:  "Lato", sans-serif;
}
@media (max-width: 769px){
  ._container{
    max-width: 1800px;
    margin: 0 auto;
    padding: 0 10px;
  }
}

</style>
