<script setup>
import Product_card from "../components/Product_card.vue";
const params1 = {name:"Драм-картридж ФРОМБОАРД s-Line DK-1150 для Kyocera ECOSYS P2235, P2335",
  vendor:"DFKYEP2235040", resource: 100000, price: "3 656 ₽",
  hit: true, discount:"-5%", src:"src/public/1card.png"}

const params2 = {name:"Драм-картридж ФРОМБОАРД s-Line DK-1150 для Kyocera ECOSYS P2235, P2335",
  vendor:"DFKYEP2235040", resource: 100000, price: "3 656 ₽",
  hit: false, discount:"-5%", src:"src/public/1card.png"}

const params3 = {name:"Драм-картридж ФРОМБОАРД s-Line DK-1150 для Kyocera ECOSYS P2235, P2335",
  vendor:"DFKYEP2235040", resource: 100000, price: "3 656 ₽",
  hit: false, discount:"", src:"src/public/1card.png"}

const sw_name= defineProps(["swiper_name"])
</script>

<template>
  <section class="swiper">
    <div class="swiper__container _container">
      <div class="swiper__header">
        <h3 class="swiper__heading">{{swiper_name}}</h3>
        <div class="swiper__header-buttons">
          <button class="swiper__button">
            <svg class="swiper__svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#706F6F"/>
            </svg>
          </button>
          <button class="swiper__button">
            <svg class="swiper__svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 11H16.17L10.58 5.41L12 4L20 12L12 20L10.59 18.59L16.17 13H4V11Z" fill="#706F6F"/>
            </svg>
          </button>
        </div>
      </div>
      <ul class="swiper__body">
        <li class="swiper_el">
          <Product_card :name=params1.name :vendor=params1.vendor :resource=params1.resource :price=params1.price :hit=params1.hit :discount=params1.discount :src=params1.src></Product_card>
        </li>
        <li class="swiper_el">
          <Product_card :name=params2.name :vendor=params2.vendor :resource=params2.resource :price=params2.price :hit=params2.hit :discount=params2.discount :src=params2.src></Product_card>
        </li>
        <li class="swiper_el">
          <Product_card :name=params3.name :vendor=params3.vendor :resource=params3.resource :price=params3.price :hit=params3.hit :discount=params3.discount :src=params3.src></Product_card>
        </li>
        <li class="swiper_el">
          <Product_card :name=params1.name :vendor=params1.vendor :resource=params1.resource :price=params1.price :hit=params1.hit :discount=params1.discount :src=params1.src></Product_card>
        </li>
        <li class="swiper_el">
          <Product_card :name=params3.name :vendor=params2.vendor :resource=params2.resource :price=params2.price :hit=params2.hit :discount=params2.discount :src=params2.src></Product_card>
        </li>
      </ul>
    </div>
  </section>

</template>

<style scoped>
.swiper{
  margin-bottom: 40px;
}
li{
  list-style: none;
  //max-width: 344px;
}
._container{
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 15px;
}
.swiper__container{
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.swiper__header{
  display: flex;
  justify-content: space-between;
  min-height: 80px;
  align-items: center;
  background-color: white;
}
.swiper__heading{
  margin-left: 40px;
  font-size: 24px;
  font-weight: 700;
}
.swiper__header-buttons{
  margin-right: 40px;
  width: 88px;
  display: flex;
  justify-content: space-between;
}
.swiper__button{
  background-color: white;
  cursor: pointer;
}
.swiper__body{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(344px, 1fr));
  grid-gap: 12px;
}
</style>