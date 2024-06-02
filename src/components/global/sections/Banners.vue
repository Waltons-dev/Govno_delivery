<script setup>
const src1="src/public/banner1.png"
const src2="src/public/banner2.png"
</script>

<template>
  <section class="banner">
    <div class="banner__container _container">
      <img class="banner__img" :src=src1 alt="Бесплатная доставка при заказе от 3000 рубелй">
      <img class="banner__img" :src=src2 alt="Уже в продаже Монохромный лазерный принтер BULAT P1024  ">
    </div>
  </section>

</template>

<style scoped>
.banner{
  margin-bottom: 40px;
}
.banner__container{
  display: flex;
  gap: 20px;
  width: 100%;
}
.banner__img{
  object-fit: contain;
  max-width: calc(50% - 10px);
  max-height: 251px;
}
</style>