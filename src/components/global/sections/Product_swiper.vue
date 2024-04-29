<script setup>
import Product_card from "../components/Product_card.vue";
const params1 = ["Драм-картридж ФРОМБОАРД s-Line DK-1150 для Kyocera ECOSYS P2235, P2335","DFKYEP2235040",
  100000,"3 656 ₽","ХИТ","-5%"]
//"/src/public/1card.png",

</script>

<template>
  <Product_card :name="params1[0]" :article="params1[1]" :resource="params1[2]" :price="params1[3]"
                :hit="params1[4]" :discount="params1[5]"> </Product_card>
</template>

<style scoped>

</style>