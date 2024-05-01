<script setup lang="js">
import {useHead} from "@unhead/vue";

import Product_swiper from "./components/global/sections/Product_swiper.vue";
import Catalogue from "./components/global/sections/Catalogue.vue";
import Filter from "./components/global/sections/Filter.vue";
useHead({
  "link": [
  {
    "rel": "preconnect",
    "href": "https://fonts.googleapis.com",
  },
    {
      "rel": "preconnect",
      "href": "https://fonts.gstatic.com",
      "crossOrigin":"crossOrigin"
    },
    {
      "rel": "stylesheet",
      "href": "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
    },
  ]
})
const swiper_names = {name1:"Хиты продаж", name2:"Новинки", name3:"Акции"}
</script>

<template>
  <Header></Header>
  <section class="filer-catalogue _container">
    <Filter class="filer-catalogue__filter"></Filter>
    <Catalogue class="filer-catalogue__catalogue"></Catalogue>
  </section>

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
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-family:  "Lato", sans-serif;
}
.filer-catalogue{
  display: flex;
  margin-bottom: 40px;
  gap: 20px;
}

</style>
