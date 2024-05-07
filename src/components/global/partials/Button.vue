<script setup>
  const props = defineProps(["text"])
</script>

<template>
  <a class="header__button" href="" download="">
    <svg class="header__button-svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.6665 0.666748V4.00008H13.9999M7.99987 6.00008V12.0001M5.3332 10.0001L7.99987 12.6667L10.6665 10.0001M1.99854 0.666748H11.6665L13.9999 3.00008V15.3334H1.99987L1.99854 0.666748Z" stroke="white" stroke-width="1.33333"/>
    </svg>
    <span class="header__button-text">{{text}}</span>
  </a>


</template>

<style scoped>
.header__button{
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  background-color: #A78BFA;
  max-width: 184px;
  border-radius: 2px;
  cursor: pointer;
  text-decoration: none;
}

.header__button-text{
  font-size: 11px;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin: 8px 12px 8px 0;
}
.header__button-svg{
  margin-left: 8px;
}
@media (max-width: 1200px) {
  .header__button{
    max-width: 100px;
  }
  .header__button-text{
    font-size: 8px;
  }
}
@media (max-width: 769px) {
  .header__button{
    max-width: 100px;
  }
  .header__button-text{
    font-size: 11px;
  }
}
</style>