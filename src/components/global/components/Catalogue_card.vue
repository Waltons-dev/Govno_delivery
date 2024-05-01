<script setup>
const props = defineProps(["text","src"])
</script>

<template>
  <a class="catalogue__card" href="">
    <div class="catalogue__container">
      <img class="catalogue__img" :src=src :alt=text>
      <p class="catalogue__text">{{text}}</p>
    </div>
  </a>
</template>

<style scoped>
.catalogue__card{
  background-color: white;
  text-decoration: none;
  transition-property: all;
  transition: all ease 0.6s;
}
.catalogue__card:hover{
  background-color: #A78BFA;
  transition-duration: 0.4s;
  .catalogue__text{
    color: white;
    transition-duration: 0.25s;
  }
  .catalogue__img{
    filter: brightness(0) invert(1);
    transition-duration: 0.25s;
  }
}
.catalogue__container{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 20px 0 20px;
  min-height: 220px;
}
.catalogue__text{
  font-size: 18px;
  font-weight: 600;
  line-height: 21.6px;
  color: #111010;
  text-align: center;
}
</style>