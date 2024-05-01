<script setup>
  const props = defineProps(["text"])
</script>

<template>
  <a class="header__button" href="" download="">
    <svg class="header__button-svg" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.66653 0.666748V4.00008H12.9999M6.99987 6.00008V12.0001M4.3332 10.0001L6.99987 12.6667L9.66653 10.0001M0.998535 0.666748H10.6665L12.9999 3.00008V15.3334H0.999869L0.998535 0.666748Z" stroke="white" stroke-width="1.33333"/>
    </svg>
    <span class="button-text">{{text}}</span>
  </a>

</template>

<style scoped>
.header__button{
  display: flex;
  gap: 10px;
  align-items: center;
  background-color: #A78BFA;
  height: 32px;
  max-width: 184px;
  border-radius: 2px;
  cursor: pointer;
  text-decoration: none;
}
.button-text{
  font-size: 11px;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  margin: 8px 8px 8px 0;
}
.header__button-svg{
  margin-left: 8px;
}
</style>