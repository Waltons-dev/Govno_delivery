<script setup>

import Catalogue from "./Catalogue.vue";
import Filter from "./Filter.vue";
</script>

<template>
  <section class="filer-catalogue _container">
    <Filter class="filer-catalogue__filter"></Filter>
    <Catalogue class="filer-catalogue__catalogue"></Catalogue>
  </section>
</template>

<style scoped>
.filer-catalogue{
  display: flex;
  margin-bottom: 40px;
  gap: 20px;
}
@media (max-width: 1296px){
  .filer-catalogue{
    flex-direction: column;
  }
}
</style>