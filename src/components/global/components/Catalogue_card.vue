<script setup>
const props = defineProps(["text"])
</script>

<template>
  <a class="catalogue__card" href="">
    <div class="catalogue__container">
      <svg class="catalogue__svg" width="85" height="84" viewBox="0 0 85 84" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15.5" y="15" width="54" height="54" stroke="#706F6F" stroke-width="3" stroke-linejoin="bevel"/>
        <path d="M27.5 27H49.25L57.5 36V57H27.5V27Z" stroke="#A78BFA" stroke-width="3" stroke-linejoin="bevel"/>
        <path d="M28.25 69V84" stroke="#706F6F" stroke-width="3" stroke-linejoin="bevel"/>
        <path d="M43.25 69V84" stroke="#706F6F" stroke-width="3" stroke-linejoin="bevel"/>
        <path d="M58.25 69V84" stroke="#706F6F" stroke-width="3" stroke-linejoin="bevel"/>
        <path d="M28.25 0V15" stroke="#706F6F" stroke-width="3" stroke-linejoin="bevel"/>
        <path d="M43.25 0V15" stroke="#706F6F" stroke-width="3" stroke-linejoin="bevel"/>
        <path d="M58.25 0V15" stroke="#706F6F" stroke-width="3" stroke-linejoin="bevel"/>
        <path d="M0.5 57L15.5 57" stroke="#706F6F" stroke-width="3" stroke-linejoin="bevel"/>
        <path d="M0.5 42L15.5 42" stroke="#706F6F" stroke-width="3" stroke-linejoin="bevel"/>
        <path d="M0.5 27L15.5 27" stroke="#706F6F" stroke-width="3" stroke-linejoin="bevel"/>
        <path d="M69.5 57L84.5 57" stroke="#706F6F" stroke-width="3" stroke-linejoin="bevel"/>
        <path d="M69.5 42L84.5 42" stroke="#706F6F" stroke-width="3" stroke-linejoin="bevel"/>
        <path d="M69.5 27L84.5 27" stroke="#706F6F" stroke-width="3" stroke-linejoin="bevel"/>
      </svg>
      <p class="catalogue__text">{{text}}</p>
    </div>
  </a>
</template>

<style scoped>
.catalogue__card{
  background-color: white;
  text-decoration: none;
}
.catalogue__card:hover{
  background-color: #A78BFA;
  transition-duration: 0.4s;
  .catalogue__text{
    color: white;
  }
  .catalogue__svg{
    color: white;
  }
}
.catalogue__svg{
  margin: 25px;
}
.catalogue__container{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px 20px 0 20px;
  min-height: 220px;
}
.catalogue__text{
  font-size: 18px;
  font-weight: 600;
  line-height: 21.6px;
  color: #111010;
}
</style>